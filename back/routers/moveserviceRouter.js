const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const models = require("../models");

const router = express.Router();

router.post("/list", async (req, res, next) => {
  const { searchDate } = req.body;

  const carFindQuery = `
  SELECT	id,
          carCount,
          carNum,
          moveDate,
          DATE_FORMAT(moveDate, "%Y년 %m월 %d일")		AS viewMoveDate,
          createdAt,
          updatedAt,
          DATE_FORMAT(createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
          DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")		AS viewUpdatedAt
    FROM	moveServiceCars
   WHERE	DATE_FORMAT(moveDate, "%Y-%m-%d") = DATE_FORMAT("${searchDate}", "%Y-%m-%d")
   ORDER	BY carCount ASC
  `;

  const timeFindQuery = `
SELECT	id,
        moveTime,
        moverName,
        createdAt,
        updatedAt,
        DATE_FORMAT(createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
        DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")		AS viewUpdatedAt,
        MoveServiceCarId
  FROM	moveServiceTimes
 WHERE  MoveServiceCarId IN (
                              SELECT	id
                                FROM	moveServiceCars
                               WHERE	DATE_FORMAT(moveDate, "%Y-%m-%d") = DATE_FORMAT("${searchDate}", "%Y-%m-%d")
                               ORDER	BY carCount ASC
					 		              )
  `;

  const serviceFindQuery = `
SELECT	id,
        degree,
        passenger,
        count,
        isDelete,
        deletedAt,
        DATE_FORMAT(deletedAt, "%Y년 %m월 %d일")		AS viewDeletedAt,
        createdAt,
        updatedAt,
        DATE_FORMAT(createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
        DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")		AS viewUpdatedAt,
        MoveServiceCarId,
        MoveServiceTimeId 
  FROM	moveServices 
 WHERE	MoveServiceTimeId IN (
                                SELECT	id
                                  FROM	moveServiceTimes
                                 WHERE  MoveServiceCarId IN (
                                                              SELECT	id
                                                                FROM	moveServiceCars
                                                               WHERE	DATE_FORMAT(moveDate, "%Y-%m-%d") = DATE_FORMAT("${searchDate}", "%Y-%m-%d")
                                                               ORDER	BY carCount ASC
                                                            )
 							                )
   AND  isDelete = 0
  `;

  try {
    const carList = await models.sequelize.query(carFindQuery);
    const timeList = await models.sequelize.query(timeFindQuery);
    const serviceList = await models.sequelize.query(serviceFindQuery);

    return res.status(200).json({
      carList: carList[0],
      timeList: timeList[0],
      serviceList: serviceList[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send("정보를 조회할 수 없습니다.");
  }
});

// 차량 등록
router.post("/car/create", isAdminCheck, async (req, res, next) => {
  const { moveDate } = req.body;

  const findQuery = `
  SELECT    *
    FROM    moveServiceCars
   WHERE    DATE_FORMAT(moveDate, "%Y-%m-%d") = DATE_FORMAT("${moveDate}", "%Y-%m-%d")
  `;

  try {
    const findResult = await models.sequelize.query(findQuery);

    if (findResult[0].length !== 0) {
      return res.status(401).send("이미 해당 날짜에 차량 정보가 존재합니다.");
    }

    const carCnt = 6;

    for (let i = 0; i < carCnt; i++) {
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
          "${i + 1}호차",
          "0000",
          "${moveDate}",
          NOW(),
          NOW()
        )`;

      await models.sequelize.query(insertQuery);
    }

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
    const updateResult = await models.sequelize.query(updateQuery);

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
     AND    MoveServiceCarId = ${carId}
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

router.post("/service/update", isAdminCheck, async (req, res, next) => {
  const { id, degree, passenger, count } = req.body;

  const updateQuery = `
  UPDATE  moveServices
     SET  degree = "${degree}",
          passenger = "${passenger}",
          count = "${count}",
          updatedAt = NOW()
   WHERE  id = ${id}
  `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("정보를 수정할 수 없습니다.");
  }
});

router.post("/service/delete", isAdminCheck, async (req, res, next) => {
  const { id } = req.body;

  const deleteQuery = `
  UPDATE  moveServices
     SET  isDelete = 1,
          deletedAt = NOW()
   WHERE  id = ${id}
  `;

  try {
    const deleteResult = await models.sequelize.query(deleteQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("정보를 삭제할 수 없습니다.");
  }
});

module.exports = router;
