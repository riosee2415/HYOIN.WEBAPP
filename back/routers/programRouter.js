const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const models = require("../models");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log(
    "uploads 폴더가 존재하지 않습니다. 새로 uploads 폴더를 생성합니다."
  );
  fs.mkdirSync("uploads");
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_Id,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.S3_BUCKET_NAME,
    key(req, file, cb) {
      cb(
        null,
        `${
          process.env.S3_STORAGE_FOLDER_NAME
        }/original/${Date.now()}_${path.basename(file.originalname)}`
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

router.post("/list", async (req, res, next) => {
  // 기본값으로 오늘 날짜의 월을 보내주세요. (FORMAT = YYYY-MM)
  // Ex) 2022-09
  const { searchMonth, searchDate } = req.body;

  const _searchDate = searchDate ? searchDate : ``;

  const selectQuery = `
    SELECT    A.id,
              A.title,
              A.content,
              A.imagePath,
              A.createdAt,
              A.updatedAt,
              DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")  AS viewCreatedAt,
              DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")  AS viewUpdatedAt,
              A.ProgramDateId,
              B.specificDate,
              DATE_FORMAT(B.specificDate, "%Y년 %m월 %d일")  AS viewSpecificDate
      FROM    programs            A
     INNER
      JOIN    programDates        B
        ON    A.ProgramDateId = B.id
     WHERE    A.isDelete = 0
       AND    DATE_FORMAT(B.specificDate, "%Y-%m")  = DATE_FORMAT("${searchMonth}-01", "%Y-%m")
       ${
         _searchDate !== ``
           ? `AND DATE_FORMAT(B.specificDate, "%Y-%m-%d") = DATE_FORMAT("${_searchDate}", "%Y-%m-%d")`
           : ``
       }
     ORDER    BY B.specificDate ASC
    `;

  try {
    const monthList = await models.sequelize.query(selectQuery);

    return res.status(200).json(monthList[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("프로그램 목록을 불러올 수 없습니다.");
  }
});

router.post(
  "/image",
  isAdminCheck,
  upload.single("image"),
  async (req, res, next) => {
    return res.json({ path: req.file.location });
  }
);

router.post("/create", isAdminCheck, async (req, res, next) => {
  // insertPrograms는 배열로 보내주세요.
  // insertPrograms의 형식은 title, content, imagePath입니다.
  // imagePath는 NULL허용 입니다.
  //   [
  //     {
  //       title: "테스트1",
  //       content: "테스트1",
  //       imagePath: "테스트1",
  //     },
  //     {
  //       title: "테스트2",
  //       content: "테스트2",
  //       imagePath: "테스트2",
  //     },
  //     {
  //       title: "테스트3",
  //       content: "테스트3",
  //       imagePath: "테스트3",
  //     },
  //   ];
  // specificDate는 프로그램을 등록할 날짜입니다. YYYY-MM-DD 형식으로 맞춰서 보내주세요.

  const { insertPrograms, specificDate } = req.body;

  if (!Array.isArray(insertPrograms)) {
    return res.status(401).send("잘못된 요청입니다.");
  }

  const findQuery = `
  SELECT  id,
          specificDate
    FROM  programDates
   WHERE  DATE_FORMAT(specificDate, "%Y-%m-%d") = DATE_FORMAT("${specificDate}", "%Y-%m-%d")
  `;

  try {
    const findResult = await models.sequelize.query(findQuery);

    ///////////////////////////////////////////////////////////////////
    /// 선택한 날짜가 존재하지 않을 때 ///////////////////////////////////////
    if (findResult[0].length === 0) {
      const dateInsertQuery = `
        INSERT  INTO   programDates
        (
            specificDate,
            createdAt,
            updatedAt
        )
        VALUES
        (
            "${specificDate}",
            NOW(),
            NOW()
        )
        `;

      const insertResult = await models.sequelize.query(dateInsertQuery);

      await Promise.all(
        insertPrograms.map(async (data) => {
          const insertQuery = `
            INSERT  INTO    programs
            (
                title,
                content,
                imagePath,
                createdAt,
                updatedAt,
                ProgramDateId
            )
            VALUES
            (
                "${data.title}",
                "${data.content}",
                ${data.imagePath ? `"${data.imagePath}"` : null},
                NOW(),
                NOW(),
                ${insertResult[0].insertId}
            )
            `;

          await models.sequelize.query(insertQuery);
        })
      );

      return res.status(201).json({ result: true });
    }

    ///////////////////////////////////////////////////////////////////
    /// 선택한 날짜가 존재할 때 ////////////////////////////////////////////
    if (findResult[0].length !== 0) {
      await Promise.all(
        insertPrograms.map(async (data) => {
          const insertQuery = `
            INSERT  INTO    programs
            (
                title,
                content,
                imagePath,
                createdAt,
                updatedAt,
                ProgramDateId
            )
            VALUES
            (
                "${data.title}",
                "${data.content}",
                ${data.imagePath ? `"${data.imagePath}"` : null},
                NOW(),
                NOW(),
                ${findResult[0][0].id}
            )
            `;

          await models.sequelize.query(insertQuery);
        })
      );

      return res.status(201).json({ result: true });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).send("월별 프로그램을 추가할 수 없습니다.");
  }
});

router.post("/update", isAdminCheck, async (req, res, next) => {
  const { id, title, content, imagePath } = req.body;

  const updateQuery = `
    UPDATE  programs
       SET  title = "${title}",
            content = "${content}",
            imagePath = ${imagePath ? `"${imagePath}"` : null}
     WHERE  id = ${id}
 `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("월별 프로그램을 수정할 수 없습니다.");
  }
});

router.post("/delete", isAdminCheck, async (req, res, next) => {
  const { id } = req.body;

  const deleteQuery = `
    UPDATE  programs
       SET  isDelete = 1,
            deletedAt = NOW()
     WHERE  id = ${id}
 `;

  try {
    const deleteResult = await models.sequelize.query(deleteQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("월별 프로그램을 삭제할 수 없습니다.");
  }
});

module.exports = router;
