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

router.post("/admin/list", isAdminCheck, async (req, res, next) => {
  // 기본값으로 오늘 날짜의 월을 보내주세요. (FORMAT = YYYY-MM)
  // Ex) 2022-09
  const { searchMonth } = req.body;

  const selectQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m") = DATE_FORMAT("${searchMonth}-01", "%Y-%m")
   ORDER  BY saveDate ASC
    `;

  try {
    const list = await models.sequelize.query(selectQuery);

    return res.status(200).json(list[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("식단표 목록을 불러올 수 없습니다.");
  }
});

router.post("/list", async (req, res, next) => {
  const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } =
    req.body;

  const sundayQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${sunday}", "%Y-%m-%d")
   ORDER  BY saveDate ASC
    `;

  const mondayQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${monday}", "%Y-%m-%d")
   ORDER  BY saveDate ASC
    `;

  const tuesdayQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${tuesday}", "%Y-%m-%d")
   ORDER  BY saveDate ASC
    `;

  const wednesdayQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${wednesday}", "%Y-%m-%d")
   ORDER  BY saveDate ASC
    `;

  const thursdayQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${thursday}", "%Y-%m-%d")
   ORDER  BY saveDate ASC
    `;

  const fridayQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${friday}", "%Y-%m-%d")
   ORDER  BY saveDate ASC
    `;
  const saturdayQuery = `
  SELECT	id,
          saveDate,
          DATE_FORMAT(saveDate, "%Y-%m-%d")  AS viewSaveDate,
          breakfast1,
          breakfast2,
          breakfast3,
          breakfast4,
          breakfast5,
          breakfast6,
          breakfastCalorie,
          breakfaseImage,
          lunch1,
          lunch2,
          lunch3,
          lunch4,
          lunch5,
          lunch6,
          lunchCalorie,
          lunchImage,
          dinner1,
          dinner2,
          dinner3,
          dinner4,
          dinner5,
          dinner6,
          dinnerCalorie,
          dinnerImage,
          morningSnack1,
          morningSnack2,
          morningSnackImage,
          afternoonSnack1,
          afternoonSnack2,
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
     AND  DATE_FORMAT(saveDate, "%Y-%m-%d") = DATE_FORMAT("${saturday}", "%Y-%m-%d")
   ORDER  BY saveDate ASC
    `;

  try {
    const sundayData = await models.sequelize.query(sundayQuery);
    const mondayData = await models.sequelize.query(mondayQuery);
    const tuesdayData = await models.sequelize.query(tuesdayQuery);
    const wednesdayData = await models.sequelize.query(wednesdayQuery);
    const thursdayData = await models.sequelize.query(thursdayQuery);
    const fridayData = await models.sequelize.query(fridayQuery);
    const saturdayData = await models.sequelize.query(saturdayQuery);

    return res.status(200).json({
      sundayData: sundayData[0].length !== 0 ? sundayData[0][0] : {},
      mondayData: mondayData[0].length !== 0 ? mondayData[0][0] : {},
      tuesdayData: tuesdayData[0].length !== 0 ? tuesdayData[0][0] : {},
      wednesdayData: wednesdayData[0].length !== 0 ? wednesdayData[0][0] : {},
      thursdayData: thursdayData[0].length !== 0 ? thursdayData[0][0] : {},
      fridayData: fridayData[0].length !== 0 ? fridayData[0][0] : {},
      saturdayData: saturdayData[0].length !== 0 ? saturdayData[0][0] : {},
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send("식단표 목록을 불러올 수 없습니다.");
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
  const {
    saveDate,
    breakfast1,
    breakfast2,
    breakfast3,
    breakfast4,
    breakfast5,
    breakfast6,
    breakfastCalorie,
    breakfaseImage,
    lunch1,
    lunch2,
    lunch3,
    lunch4,
    lunch5,
    lunch6,
    lunchCalorie,
    lunchImage,
    dinner1,
    dinner2,
    dinner3,
    dinner4,
    dinner5,
    dinner6,
    dinnerCalorie,
    dinnerImage,
    morningSnack1,
    morningSnack2,
    morningSnackImage,
    afternoonSnack1,
    afternoonSnack2,
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
    breakfast1,
    breakfast2,
    breakfast3,
    breakfast4,
    breakfast5,
    breakfast6,
    breakfastCalorie,
    breakfaseImage,
    lunch1,
    lunch2,
    lunch3,
    lunch4,
    lunch5,
    lunch6,
    lunchCalorie,
    lunchImage,
    dinner1,
    dinner2,
    dinner3,
    dinner4,
    dinner5,
    dinner6,
    dinnerCalorie,
    dinnerImage,
    morningSnack1,
    morningSnack2,
    morningSnackImage,
    afternoonSnack1,
    afternoonSnack2,
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
    ${breakfast1 ? `"${breakfast1}"` : null},
    ${breakfast2 ? `"${breakfast2}"` : null},
    ${breakfast3 ? `"${breakfast3}"` : null},
    ${breakfast4 ? `"${breakfast4}"` : null},
    ${breakfast5 ? `"${breakfast5}"` : null},
    ${breakfast6 ? `"${breakfast6}"` : null},
    ${breakfastCalorie ? `"${breakfastCalorie}"` : null},
    ${breakfaseImage ? `"${breakfaseImage}"` : null},
    ${lunch1 ? `"${lunch1}"` : null},
    ${lunch2 ? `"${lunch2}"` : null},
    ${lunch3 ? `"${lunch3}"` : null},
    ${lunch4 ? `"${lunch4}"` : null},
    ${lunch5 ? `"${lunch5}"` : null},
    ${lunch6 ? `"${lunch6}"` : null},
    ${lunchCalorie ? `"${lunchCalorie}"` : null},
    ${lunchImage ? `"${lunchImage}"` : null},
    ${dinner1 ? `"${dinner1}"` : null},
    ${dinner2 ? `"${dinner2}"` : null},
    ${dinner3 ? `"${dinner3}"` : null},
    ${dinner4 ? `"${dinner4}"` : null},
    ${dinner5 ? `"${dinner5}"` : null},
    ${dinner6 ? `"${dinner6}"` : null},
    ${dinnerCalorie ? `"${dinnerCalorie}"` : null},
    ${dinnerImage ? `"${dinnerImage}"` : null},
    ${morningSnack1 ? `"${morningSnack1}"` : null},
    ${morningSnack2 ? `"${morningSnack2}"` : null},
    ${morningSnackImage ? `"${morningSnackImage}"` : null},
    ${afternoonSnack1 ? `"${afternoonSnack1}"` : null},
    ${afternoonSnack2 ? `"${afternoonSnack2}"` : null},
    ${afternoonSnackImage ? `"${afternoonSnackImage}"` : null},
    ${functionDiet ? `"${functionDiet}"` : null},
    ${diabetes ? `"${diabetes}"` : null},
    ${scene ? `"${scene}"` : null},
    ${lowSalt ? `"${lowSalt}"` : null},
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
    breakfast1,
    breakfast2,
    breakfast3,
    breakfast4,
    breakfast5,
    breakfast6,
    breakfastCalorie,
    breakfaseImage,
    lunch1,
    lunch2,
    lunch3,
    lunch4,
    lunch5,
    lunch6,
    lunchCalorie,
    lunchImage,
    dinner1,
    dinner2,
    dinner3,
    dinner4,
    dinner5,
    dinner6,
    dinnerCalorie,
    dinnerImage,
    morningSnack1,
    morningSnack2,
    morningSnackImage,
    afternoonSnack1,
    afternoonSnack2,
    afternoonSnackImage,
    functionDiet,
    diabetes,
    scene,
    lowSalt,
  } = req.body;

  const updateQuery = `
    UPDATE    menus
       SET    breakfast1 = ${breakfast1 ? `"${breakfast1}"` : null},
              breakfast2 = ${breakfast2 ? `"${breakfast2}"` : null},
              breakfast3 = ${breakfast3 ? `"${breakfast3}"` : null},
              breakfast4 = ${breakfast4 ? `"${breakfast4}"` : null},
              breakfast5 = ${breakfast5 ? `"${breakfast5}"` : null},
              breakfast6 = ${breakfast6 ? `"${breakfast6}"` : null},
              breakfastCalorie = ${
                breakfastCalorie ? `"${breakfastCalorie}"` : null
              },
              breakfaseImage = ${breakfaseImage ? `"${breakfaseImage}"` : null},
              lunch1 = ${lunch1 ? `"${lunch1}"` : null},
              lunch2 = ${lunch2 ? `"${lunch2}"` : null},
              lunch3 = ${lunch3 ? `"${lunch3}"` : null},
              lunch4 = ${lunch4 ? `"${lunch4}"` : null},
              lunch5 = ${lunch5 ? `"${lunch5}"` : null},
              lunch6 = ${lunch6 ? `"${lunch6}"` : null},
              lunchCalorie = ${lunchCalorie ? `"${lunchCalorie}"` : null},
              lunchImage = ${lunchImage ? `"${lunchImage}"` : null},
              dinner1 = ${dinner1 ? `"${dinner1}"` : null},
              dinner2 = ${dinner2 ? `"${dinner2}"` : null},
              dinner3 = ${dinner3 ? `"${dinner3}"` : null},
              dinner4 = ${dinner4 ? `"${dinner4}"` : null},
              dinner5 = ${dinner5 ? `"${dinner5}"` : null},
              dinner6 = ${dinner6 ? `"${dinner6}"` : null},
              dinnerCalorie = ${dinnerCalorie ? `"${dinnerCalorie}"` : null},
              dinnerImage = ${dinnerImage ? `"${dinnerImage}"` : null},
              morningSnack1 = ${morningSnack1 ? `"${morningSnack1}"` : null},
              morningSnack2 = ${morningSnack2 ? `"${morningSnack2}"` : null},
              morningSnackImage = ${
                morningSnackImage ? `"${morningSnackImage}"` : null
              },
              afternoonSnack1 = ${
                afternoonSnack1 ? `"${afternoonSnack1}"` : null
              },
              afternoonSnack2 = ${
                afternoonSnack2 ? `"${afternoonSnack2}"` : null
              },
              afternoonSnackImage = ${
                afternoonSnackImage ? `"${afternoonSnackImage}"` : null
              },
              functionDiet = ${functionDiet ? `"${functionDiet}"` : null},
              diabetes = ${diabetes ? `"${diabetes}"` : null},
              scene = ${scene ? `"${scene}"` : null},
              lowSalt = ${lowSalt ? `"${lowSalt}"` : null}
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
