const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const models = require("../models");

const router = express.Router();

router.post("/all/list", isAdminCheck, async (req, res, next) => {
  const allQuery = `
    SELECT  id,
            personnel,
            totalPeople,
            avaliablePeople,
            waitingPeople,
            createdAt,
            updatedAt,
            DATE_FORMAT(createdAt, "%Y년 %m월 %d일")        AS viewCreatedAt,
            DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")        AS viewUpdatedAt
      FROM  allAdmissions
    `;

  const normalQuery = `
    SELECT  id,
            personnel,
            totalPeople,
            avaliablePeople,
            waitingPeople,
            createdAt,
            updatedAt,
            DATE_FORMAT(createdAt, "%Y년 %m월 %d일")        AS viewCreatedAt,
            DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")        AS viewUpdatedAt
      FROM  normalAdmissions
    `;

  const dementiaQuery = `
    SELECT  id,
            personnel,
            totalPeople,
            avaliablePeople,
            waitingPeople,
            createdAt,
            updatedAt,
            DATE_FORMAT(createdAt, "%Y년 %m월 %d일")        AS viewCreatedAt,
            DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")        AS viewUpdatedAt
      FROM  dementiaAdmissions
    `;

  const weekQuery = `
    SELECT  id,
            personnel,
            totalPeople,
            avaliablePeople,
            waitingPeople,
            createdAt,
            updatedAt,
            DATE_FORMAT(createdAt, "%Y년 %m월 %d일")        AS viewCreatedAt,
            DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")        AS viewUpdatedAt
      FROM  weekAdmissions
    `;
  try {
    const allList = await models.sequelize.query(allQuery);

    const normalList = await models.sequelize.query(normalQuery);

    const dementialList = await models.sequelize.query(dementiaQuery);

    const weekList = await models.sequelize.query(weekQuery);

    return res.status(200).json({
      allList: allList[0][0],
      normalList: normalList[0][0],
      dementialList: dementialList[0][0],
      weekList: weekList[0][0],
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send("데이터를 조회할 수 없습니다.");
  }
});

router.post("/week/list", isAdminCheck, async (req, res, next) => {
  try {
    return res.status(200).json(list[0][0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("데이터를 조회할 수 없습니다.");
  }
});

router.post("/all/update", isAdminCheck, async (req, res, next) => {
  const { id, personnel, totalPeople, avaliablePeople, waitingPeople } =
    req.body;

  const updateQuery = `
    UPDATE  allAdmissions
       SET  personnel   = "${personnel}",
            totalPeople = "${totalPeople}",
            avaliablePeople = "${avaliablePeople}",
            waitingPeople   = "${waitingPeople}",
            updatedAt = NOW()
     WHERE  id = ${id}
    `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("데이터를 수정할 수 없습니다");
  }
});

router.post("/normal/update", isAdminCheck, async (req, res, next) => {
  const { id, personnel, totalPeople, avaliablePeople, waitingPeople } =
    req.body;

  const updateQuery = `
    UPDATE  normalAdmissions
       SET  personnel   = "${personnel}",
            totalPeople = "${totalPeople}",
            avaliablePeople = "${avaliablePeople}",
            waitingPeople   = "${waitingPeople}",
            updatedAt = NOW()
     WHERE  id = ${id}
    `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("데이터를 수정할 수 없습니다");
  }
});

router.post("/dementia/update", isAdminCheck, async (req, res, next) => {
  const { id, personnel, totalPeople, avaliablePeople, waitingPeople } =
    req.body;

  const updateQuery = `
    UPDATE  dementiaAdmissions
       SET  personnel   = "${personnel}",
            totalPeople = "${totalPeople}",
            avaliablePeople = "${avaliablePeople}",
            waitingPeople   = "${waitingPeople}",
            updatedAt = NOW()
     WHERE  id = ${id}
    `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("데이터를 수정할 수 없습니다");
  }
});

router.post("/week/update", isAdminCheck, async (req, res, next) => {
  const { id, personnel, totalPeople, avaliablePeople, waitingPeople } =
    req.body;

  const updateQuery = `
    UPDATE  weekAdmissions
       SET  personnel   = "${personnel}",
            totalPeople = "${totalPeople}",
            avaliablePeople = "${avaliablePeople}",
            waitingPeople   = "${waitingPeople}",
            updatedAt = NOW()
     WHERE  id = ${id}
    `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("데이터를 수정할 수 없습니다");
  }
});

module.exports = router;
