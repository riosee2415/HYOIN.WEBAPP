const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const models = require("../models");
const isAdminCheck = require("../middlewares/isAdminCheck");
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

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname); // 확장자 추출 (.png)
//       const basename = path.basename(file.originalname, ext);

//       done(null, basename + "_" + new Date().getTime() + ext);
//     },
//   }),
//   limits: { fileSize: 10 * 1024 * 2024 }, // 20MB
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/list", async (req, res, next) => {
  const { page, searchTitle } = req.body;

  const LIMIT = 10;

  const _page = page ? page : 1;
  const _searchTitle = searchTitle ? searchTitle : "";

  const __page = _page - 1;
  const OFFSET = __page * 10;

  const lengthQuery = `
  SELECT	ROW_NUMBER() OVER(ORDER BY A.createdAt)     AS num,
            A.id,
            A.title,
            A.content,
            A.hit,
            A.file,
            A.filename,
            A.imagePath,
            A.createdAt,
            A.updatedAt,
            DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
            DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")		AS viewUpdatedAt
    FROM	announce		A
   WHERE	A.title LIKE '%${_searchTitle}%'
     AND    A.isDelete = 0
  `;

  const selectQuery = `
  SELECT	ROW_NUMBER() OVER(ORDER BY A.createdAt)     AS num,
            A.id,
            A.title,
            A.content,
            A.hit,
            A.file,
            A.filename,
            A.imagePath,
            A.createdAt,
            A.updatedAt,
            DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
            DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")		AS viewUpdatedAt
    FROM	announce		A
   WHERE	A.title LIKE '%${_searchTitle}%'
     AND    A.isDelete = 0
   ORDER    BY num DESC
   LIMIT    ${LIMIT}
  OFFSET    ${OFFSET}
  `;

  try {
    const lengths = await models.sequelize.query(lengthQuery);
    const announce = await models.sequelize.query(selectQuery);

    const announceLen = lengths[0].length;

    const lastPage =
      announceLen % LIMIT > 0 ? announceLen / LIMIT + 1 : announceLen / LIMIT;

    return res.status(200).json({
      announce: announce[0],
      lastPage: parseInt(lastPage),
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글 목록을 불러올 수 업습니다.");
  }
});

router.post("/admin/list", async (req, res, next) => {
  const { searchTitle } = req.body;

  const _searchTitle = searchTitle ? searchTitle : "";

  const selectQuery = `
  SELECT	ROW_NUMBER() OVER(ORDER BY A.createdAt)     AS num,
            A.id,
            A.title,
            A.content,
            A.hit,
            A.file,
            A.filename,
            A.imagePath,
            A.createdAt,
            A.updatedAt,
            DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
            DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")		AS viewUpdatedAt
    FROM	announce		A
   WHERE	A.title LIKE '%${_searchTitle}%'
     AND    A.isDelete = 0
   ORDER    BY num DESC
  `;

  try {
    const announce = await models.sequelize.query(selectQuery);

    return res.status(200).json(announce[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글 목록을 불러올 수 업습니다.");
  }
});

router.post("/create", isAdminCheck, async (req, res, next) => {
  const { title, content, file, filename, imagePath } = req.body;

  const insertQuery = `
  INSERT  INTO  announce
  (
    title,
    content,
    file,
    filename,
    imagePath,
    createdAt,
    updatedAt
  )
  VALUES
  (
    "${title}",
    "${content}",
    ${file ? `"${file}"` : null},
    ${filename ? `"${filename}"` : null},
    ${imagePath ? `"${imagePath}"` : null},
    NOW(),
    NOW()
  )
  `;

  try {
    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글을 등록할 수 없습니다.");
  }
});

router.post("/update", isAdminCheck, async (req, res, next) => {
  const { id, title, content, file, filename, imagePath } = req.body;

  const updateQuery = `
  UPDATE  announce
     SET  title = "${title}",
          content = "${content}",
          file = ${file ? `"${file}"` : null},
          filename = ${filename ? `"${filename}"` : null},
          imagePath = ${imagePath ? `"${imagePath}"` : null},
          updatedAt = NOW()
   WHERE  id = ${id}
  `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글을 수정할 수 없습니다.");
  }
});

router.post("/delete", isAdminCheck, async (req, res, next) => {
  const { id } = req.body;

  const deleteQuery = `
  UPDATE  announce
     SET  isDelete = 1,
          deletedAt = NOW()
   WHERE  id = ${id}
  `;

  try {
    const deleteResult = await models.sequelize.query(deleteQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글을 삭제할 수 없습니다.");
  }
});

router.post("/image", upload.single("image"), async (req, res, next) => {
  return res.json({ path: req.file.location });
});

router.post("/file", upload.single("file"), async (req, res, next) => {
  return res.json({ path: req.file.location });
});

router.get("/detail/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const detailQuery = `
    SELECT	A.id,
            A.title,
            A.content,
            A.hit,
            A.file,
            A.filename,
            A.imagePath,
            A.createdAt,
            A.updatedAt,
            DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
            DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")		AS viewUpdatedAt
      FROM	announce		A
     WHERE	A.id = ${id}
       AND  A.isDelete = 0
    `;

    const detailData = await models.sequelize.query(detailQuery);

    if (detailData[0].length === 0) {
      return res.status(401).send("존재하지 않는 게시글 정보입니다.");
    }

    const updateQuery = `
   UPDATE announce
      SET hit = ${detailData[0][0].hit + 1},
          updatedAt = now()
    WHERE id = ${id} 
   `;

    const updateResult = await models.sequelize.query(updateQuery);

    const nextDataQuery = `
    SELECT  title
      FROM  announce
     WHERE  id > ${id}
       AND  isDelete = 0
     LIMIT  1
    `;

    const prevDataQuery = `
    SELECT  title
      FROM  announce
     WHERE  id < ${id}
       AND  isDelete = 0
    `;

    const nextData = await models.sequelize.query(nextDataQuery);
    const prevData = await models.sequelize.query(prevDataQuery);

    return res.status(200).json({
      detailData: detailData[0][0],
      nextAnnounce: !nextData[0] ? null : nextData[0][0], // 다음 게시글
      prevAnnounce: !prevData[0] ? null : prevData[0][prevData[0].length - 1], // 이전 게시글
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글 정보를 불러올 수 없습니다.");
  }
});

router.post("/nextAnnounce", async (req, res, next) => {
  const { id } = req.body;

  try {
    const nextDataQuery = `
    SELECT  id
      FROM  announce
     WHERE  id > ${id}
       AND  isDelete = 0
     LIMIT  1
    `;

    const nextData = await models.sequelize.query(nextDataQuery);

    if (nextData[0].length === 0) {
      return res.status(401).send("마지막 게시글 입니다.");
    }

    return res.redirect(`/api/announce/detail/${nextData[0][0].id}`);
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글 정보를 불러올 수 없습니다.");
  }
});

router.post("/prevAnnounce", async (req, res, next) => {
  const { id } = req.body;

  try {
    const prevDataQuery = `
    SELECT  id
      FROM  announce
     WHERE  id < ${id}
       AND  isDelete = 0
    `;

    const prevData = await models.sequelize.query(prevDataQuery);

    if (prevData[0].length === 0) {
      return res.status(401).send("첫번째 게시글 입니다.");
    }

    return res.redirect(
      `/api/announce/detail/${prevData[0][prevData[0].length - 1].id}`
    );
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글 정보를 불러올 수 없습니다.");
  }
});

module.exports = router;
