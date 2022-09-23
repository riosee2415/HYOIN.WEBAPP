const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const models = require("../models");

const router = express.Router();

// 차량 등록
router.post("/car/create", isAdminCheck, async (req, res, next) => {
  const { carCount, carNum, moveDate } = req.body;

  const findCarNumQuery = `
  SELECT    *
    FROM    moveServiceCars
   WHERE    carCount = "${carCount}"
  `;

  const findQuery = `
  SELECT    *
    FROM    moveServiceCars
   WHERE    carCount = "${carCount}"
     AND    DATE_FORMAT(moveDate, "%Y-%m-%d") = DATE_FORMAT("${moveDate}", "%Y-%m-%d")
  `;

  const insertQuery = `
  INSERT    INTO    moveServiceCars
  (
    carCount,
    carNum,
    moveDate,
    createdAt,
    updatedAt
  )
  VALUES
  (
    "${carCount}",
    "${carNum}",
    "${moveDate}",
    NOW(),
    NOW()
  )
  `;

  try {
    const carNumResult = await models.sequelize.query(findCarNumQuery);

    if (carNumResult[0].length === 1) {
      return res.status(401).send("이미 해당 차수의 차량이 존재합니다.");
    }

    const findResult = await models.sequelize.query(findQuery);

    if (findResult[0].length !== 0) {
      return res.status(401).send("이미 해당 날짜에 존재하는 차량입니다.");
    }

    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("차량 데이터를 추가할 수 없습니다.");
  }
});

// 차량 수정
router.post("/car/update", isAdminCheck, async (req, res, next) => {
  const { id, carNum } = req.body;

  const updateQuery = `
    UPDATE  moveServiceCars
       SET  carNum = "${carNum}",
            updatedAt = NOW()
     WHERE  id = "${id}"
  `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("차량 데이터를 수정할 수 없습니다.");
  }
});

// 시간 등록
router.post("/time/create", isAdminCheck, async (req, res, next) => {
  const { carId, moveTime, moverName } = req.body;

  const findQuery = `
    SELECT  *
      FROM  moveServiceTimes
     WHERE  MoveServiceCarId = ${carId}
       AND  moveTime = "${moveTime}"
  `;

  const findLengthQuery = `
    SELECT  *
      FROM  moveServiceTimes
     WHERE  MoveServiceCarId = ${carId}
  `;

  const insertQuery = `
  INSERT  INTO  moveServiceTimes
  (
    MoveServiceCarId,
    moveTime,
    moverName,
    createdAt,
    updatedAt
  )
  VALUES
  (
    ${carId},
    "${moveTime}",
    "${moverName}",
    NOW(),
    NOW() 
  )
  `;

  try {
    const findResult = await models.sequelize.query(findQuery);

    if (findResult[0].length !== 0) {
      return res.status(401).send("해당 차량에 등록된 정보가 있습니다.");
    }

    const findLengthResult = await models.sequelize.query(findLengthQuery);

    if (findLengthResult[0].length === 2) {
      return res.status(401).send("더 이상 정보를 등록할 수 없습니다.");
    }

    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("오전/오후 데이터를 생성할 수 없습니다.");
  }
});

router.post("/time/update", isAdminCheck, async (req, res, next) => {
  const { id, moveTime, moverName } = req.body;

  const updateQuery = `
UPDATE  moveServiceTimes
   SET  moveTime = "${moveTime}",
        moverName = "${moverName}",
        updatedAt = NOW()
 WHERE  id = ${id}
`;

  try {
    const updateResult = await models.sequelizee.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("오전/오후 데이터를 수정할 수 없습니다.");
  }
});

router.post("/service/create", isAdminCheck, async (req, res, next) => {
  const { degree, passenger, count, carId, timeId } = req.body;

  const findQuery = `
  SELECT    *
    FROM    moveServices
   WHERE    MoveServiceTimeId = ${timeId}
     AND    MoveServiceCar = ${carId}
     AND    degree = "${degree}"
  `;

  const insertQuery = `
  INSERT    INTO    moveServices
  (
    degree,
    passenger,
    count,
    MoveServiceCarId,
    MoveServiceTimeId,
    createdAt,
    updatedAt
  )
  VALUES
  (
    "${degree}",
    "${passenger}",
    "${count}",
    ${carId},
    ${timeId},
    NOW(),
    NOW()
  )
  `;

  try {
    const findResult = await models.sequelize.query(findQuery);

    if (findResult[0].length !== 0) {
      return res.status(401).send("이미 해당 차수 데이터가 존재합니다.");
    }

    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("정보를 추가할 수 없습니다.");
  }
});

module.exports = router;
