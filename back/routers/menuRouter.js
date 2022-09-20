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

router.post(
  "/image",
  isAdminCheck,
  upload.single("image"),
  async (req, res, next) => {
    return res.json({ path: req.file.location });
  }
);

router.post("/list", isAdminCheck, async (req, res, next) => {
  const { searchSaveDate } = req.body;

  const selectQuery = `
  SELECT	id,
  			saveDate,
  			DATE_FORMAT(saveDate, "%Y년 %m월 %d일")	AS viewSaveDate,
  			breakfast,
  			breakfastCalorie,
  			breakfaseImage,
  			lunch,
  			lunchCalorie,
  			lunchImage,
  			dinner,
  			dinnerCalorie,
  			dinnerImage,
  			morningSnack,
  			morningSnackImage,
  			afternoonSnack,
  			afternoonSnackImage,
  			functionDiet,
  			diabetes,
  			scene,
  			lowSalt,
  			createdAt,
  			updatedAt,
  			DATE_FORMAT(createdAt, "%Y년 %m월 %d일")  AS viewCreatedAt,
            DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")  AS viewUpdatedAt
    FROM	menus
   WHERE	isDelete = 0
     AND    DATE_FORMAT(saveDate, "%Y-%m-%d") = "${searchSaveDate}"
   ORDER    BY saveDate ASC
    `;

  try {
    const list = await models.sequelize.query(selectQuery);

    return res.status(200).json(list[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("식단표 목록을 불러올 수 없습니다.");
  }
});

router.post("/create", isAdminCheck, async (req, res, next) => {
  const {
    saveDate,
    breakfast,
    breakfastCalorie,
    breakfaseImage,
    lunch,
    lunchCalorie,
    lunchImage,
    dinner,
    dinnerCalorie,
    dinnerImage,
    morningSnack,
    morningSnackImage,
    afternoonSnack,
    afternoonSnackImage,
    functionDiet,
    diabetes,
    scene,
    lowSalt,
  } = req.body;

  const findQuery = `
  SELECT    *
    FROM    menus
   WHERE    DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${saveDate}", "%Y-%m-%d")
     AND    isDelete = 0
  `;

  const insertQuery = `
  INSERT    INTO    menus
  (
    saveDate,
    breakfast,
    breakfastCalorie,
    breakfaseImage,
    lunch,
    lunchCalorie,
    lunchImage,
    dinner,
    dinnerCalorie,
    dinnerImage,
    morningSnack,
    morningSnackImage,
    afternoonSnack,
    afternoonSnackImage,
    functionDiet,
    diabetes,
    scene,
    lowSalt,
    createdAt,
    updatedAt
  )
  VALUES
  (
    "${saveDate}",
    "${breakfast}",
    "${breakfastCalorie}",
    ${breakfaseImage ? `"${breakfaseImage}"` : null},
    "${lunch}",
    "${lunchCalorie}",
    ${lunchImage ? `"${lunchImage}"` : null},
    "${dinner}",
    "${dinnerCalorie}",
    ${dinnerImage ? `"${dinnerImage}"` : null},
    "${morningSnack}",
    ${morningSnackImage ? `"${morningSnackImage}"` : null},
    "${afternoonSnack}",
    ${afternoonSnackImage ? `"${afternoonSnackImage}"` : null},
    "${functionDiet}",
    "${diabetes}",
    "${scene}",
    "${lowSalt}",
    NOW(),
    NOW()
  )
  `;

  try {
    const findResult = await models.sequelize.query(findQuery);

    if (findResult[0].length !== 0) {
      return res.status(401).send("이미 해당 날짜에 등록된 식단이 있습니다.");
    }

    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("식단표를 등록할 수 없습니다.");
  }
});

router.post("/update", isAdminCheck, async (req, res, next) => {
  const {
    id,
    saveDate,
    breakfast,
    breakfastCalorie,
    breakfaseImage,
    lunch,
    lunchCalorie,
    lunchImage,
    dinner,
    dinnerCalorie,
    dinnerImage,
    morningSnack,
    morningSnackImage,
    afternoonSnack,
    afternoonSnackImage,
    functionDiet,
    diabetes,
    scene,
    lowSalt,
  } = req.body;

  const updateQuery = `
  UPDATE    menus
     SET    saveDate = "${saveDate}",
            breakfast = "${breakfast}",
            breakfastCalorie = "${breakfastCalorie}",
            breakfaseImage = ${breakfaseImage ? `"${breakfaseImage}"` : null},
            lunch = "${lunch}",
            lunchCalorie = "${lunchCalorie}",
            lunchImage =  ${lunchImage ? `"${lunchImage}"` : null},
            dinner = "${dinner}",
            dinnerCalorie =  "${dinnerCalorie}",
            dinnerImage =  ${dinnerImage ? `"${dinnerImage}"` : null},
            morningSnack = "${morningSnack}",
            morningSnackImage = ${
              morningSnackImage ? `"${morningSnackImage}"` : null
            },
            afternoonSnack = "${afternoonSnack}",
            afternoonSnackImage = ${
              afternoonSnackImage ? `"${afternoonSnackImage}"` : null
            },
            functionDiet = "${functionDiet}",
            diabetes = "${diabetes}",
            scene = "${scene}",
            lowSalt = "${lowSalt}",
            updatedAt = NOW()
   WHERE    id = ${id}
  `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("식단표 정보를 수정할 수 없습니다.");
  }
});

router.post("/delete", isAdminCheck, async (req, res, next) => {
  const { id } = req.body;

  const updateQuery = `
  UPDATE    menus
     SET    isDelete = 1,
            deletedAt = NOW()
   WHERE    id = ${id}
  `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("식단표 정보를 삭제할 수 없습니다.");
  }
});

module.exports = router;
