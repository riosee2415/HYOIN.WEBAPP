const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const models = require("../models");

const router = express.Router();

router.post("/list", isAdminCheck, async (req, res, next) => {
  const { searchName, listType } = req.body;

  const _listType = parseInt(listType) || 3;
  const _searchName = searchName ? searchName : ``;

  const selectQuery = `
  SELECT  ROW_NUMBER() OVER(ORDER BY createdAt)   AS num,
          id,
          title,
          content,
          name,
          email,
          mobile,
          isCompleted,
          completedAt,
          createdAt,
          updatedAt,
          DATE_FORMAT(createdAt, "%Y년 %m월 %d일")  AS viewCreatedAt,
          DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")  AS viewUpdatedAt
    FROM  questions
   WHERE  name LIKE '%${_searchName}%'
          ${
            _listType === 1
              ? `AND isCompleted = 0`
              : _listType === 2
              ? `AND isCompleted = 1`
              : _listType === 3
              ? ``
              : ``
          }
   ORDER  BY num DESC
  `;

  try {
    const list = await models.sequelize.query(selectQuery);

    return res.status(200).json(list[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("문의 데이터를 가져올 수 없습니다.");
  }
});

router.post("/create", async (req, res, next) => {
  const { title, content, name, email, mobile } = req.body;

  const insertQuery = `
  INSERT  INTO  questions
  (
    title,
    content,
    name,
    email,
    mobile,
    createdAt,
    updatedAt
  )
  VALUES
  (
    "${title}",
    "${content}",
    "${name}",
    "${email}",
    "${mobile}",
    NOW(),
    NOW()
  )
  `;

  try {
    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("문의를 작성할 수 없습니다.");
  }
});

router.post("/update", isAdminCheck, async (req, res, next) => {
  const { id } = req.body;

  const updateQuery = `
  UPDATE  questions
     SET  isCompleted = 1,
          completedAt = NOW()
   WHERE  id = ${id}
  `;

  try {
    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("문의를 처리할 수 없습니다.");
  }
});

module.exports = router;
