const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const models = require("../models");
const router = express.Router();

router.post("/type/list", async (req, res, next) => {
  try {
    const selectQuery = `
    SELECT	ROW_NUMBER () OVER(ORDER BY createdAt)	AS num,
            id,
            value,
            isDelete,
            deletedAt,
            createdAt,
            updatedAt,
            DATE_FORMAT(deletedAt, "%Y년 %m월 %d일")				AS viewDeletedAt,
            DATE_FORMAT(createdAt, "%Y년 %m월 %d일")				AS viewCreatedAt,
            DATE_FORMAT(updatedAt, "%Y년 %m월 %d일")				AS viewUpdatedAt
      FROM	faqTypes
     WHERE	isDelete = 0
     ORDER  BY num DESC
      `;
    const list = await models.sequelize.query(selectQuery);

    return res.status(200).json(list[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ유형을 불러올 수 없습니다.");
  }
});

router.post("/type/create", isAdminCheck, async (req, res, next) => {
  const { value } = req.body;

  const validateQuery = `
  SELECT    *
    FROM    faqTypes
   WHERE    isDelete = 0
     AND    value = "${value}"
  `;

  const insertQuery = `
  INSERT INTO faqTypes 
  (value, createdAt, updatedAt)
  VALUES
  ( "${value}" , now(), now() )
  `;
  try {
    const validateResult = await models.sequelize.query(validateQuery);

    if (validateResult[0].length !== 0) {
      return res.status(401).send("동일한 이름의 유형이 존재합니다.");
    }

    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ유형을 추가할 수 없습니다.");
  }
});

router.post("/type/update", isAdminCheck, async (req, res, next) => {
  const { id, value } = req.body;

  const validateQuery = `
  SELECT    *
    FROM    faqTypes
   WHERE    isDelete = 0
     AND    id = ${id}
  `;

  const updateQuery = `
  UPDATE    faqTypes
     SET    value = "${value}",
            updatedAt = now()
   WHERE    id = ${id}
  `;

  try {
    const validateResult = await models.sequelize.query(validateQuery);

    if (validateResult[0].length === 0) {
      return res.status(401).send("존재하지 않는 유형 정보입니다.");
    }

    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ유형을 수정할 수 없습니다.");
  }
});

router.post("/type/delete", isAdminCheck, async (req, res, next) => {
  const { id } = req.body;

  const validateQuery = `
  SELECT    *
    FROM    faqTypes
   WHERE    isDelete = 0
     AND    id = ${id}
  `;

  const deleteQuery = `
  UPDATE    faqTypes
     SET    isDelete = 1,
            deletedAt = now()
   WHERE    id = ${id}
  `;

  try {
    const validateResult = await models.sequelize.query(validateQuery);

    if (validateResult[0].length === 0) {
      return res.status(401).send("존재하지 않는 유형 정보입니다.");
    }

    const deleteResult = await models.sequelize.query(deleteQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ유형을 삭제할 수 없습니다.");
  }
});

///////////////////////////////////////////////////////////////////////////////
////////////////////////////////// - FAQ - ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

router.post("/admin/graph", isAdminCheck, async (req, res, next) => {
  const selectQ = `
        SELECT	B.value,
                COUNT(A.id)			AS	cnt
          FROM	faqs		A
         INNER 
          JOIN	faqTypes 	B
            ON	A.FaqTypeId = B.id
         WHERE	A.isDelete = 0
           AND  B.isDelete = 0
         GROUP	BY	A.FaqTypeId
    `;

  try {
    const result = await models.sequelize.query(selectQ);

    return res.status(200).json(result[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).send("그레프 정보를 불러올 수 없습니다.");
  }
});

router.post("/list", async (req, res, next) => {
  const { typeId, page, searchData } = req.body;

  const LIMIT = 10;
  const _page = page ? page : 1;

  const __page = _page - 1;
  const OFFSET = __page * 10;

  let _typeId = typeId ? typeId : false;
  let _searchData = searchData ? searchData : ``;

  const lengthQuery = `
  SELECT	ROW_NUMBER () OVER(ORDER BY A.createdAt)               AS num,
            A.id,
            A.question,
            A.answer,
            A.isDelete,
            A.FaqTypeId,
            A.deletedAt,
            DATE_FORMAT(A.deletedAt, "%Y년 %m월 %d일")				AS viewDeletedAt,
            A.createdAt,
            DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")				AS viewCreatedAt,
            A.updatedAt,
            DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")				AS viewUpdatedAt,
            B.value												  AS typeValue
    FROM	faqs		A
   INNER
    JOIN	faqTypes 	B
      ON	A.FaqTypeId = B.id
   WHERE	A.isDelete = 0
     AND    A.question LIKE '%${_searchData}%'
            ${_typeId ? `AND A.FaqTypeId = ${_typeId}` : ``}
   `;

  const selectQuery = `
  SELECT	ROW_NUMBER () OVER(ORDER BY A.createdAt)               AS num,
            A.id,
            A.question,
            A.answer,
            A.isDelete,
            A.FaqTypeId,
            A.deletedAt,
            DATE_FORMAT(A.deletedAt, "%Y년 %m월 %d일")				AS viewDeletedAt,
            A.createdAt,
            DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")				AS viewCreatedAt,
            A.updatedAt,
            DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")				AS viewUpdatedAt,
            B.value												  AS typeValue
     FROM	faqs		A
    INNER
     JOIN	faqTypes 	B
       ON	A.FaqTypeId = B.id
    WHERE	A.isDelete = 0
      AND   A.question LIKE '%${_searchData}%'
            ${_typeId ? `AND A.FaqTypeId = ${_typeId}` : ``}
    ORDER   BY num DESC
    LIMIT   ${LIMIT}
   OFFSET   ${OFFSET}
   `;

  try {
    const lengths = await models.sequelize.query(lengthQuery);
    const faqs = await models.sequelize.query(selectQuery);

    const faqsLen = lengths[0].length;

    const lastPage =
      faqsLen % LIMIT > 0 ? faqsLen / LIMIT + 1 : faqsLen / LIMIT;

    return res.status(200).json({
      faqs: faqs[0],
      lastPage: parseInt(lastPage),
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ목록을 불러올 수 없습니다.");
  }
});

router.post("/admin/list", isAdminCheck, async (req, res, next) => {
  const { typeId, searchData } = req.body;

  let _typeId = typeId ? typeId : false;
  let _searchData = searchData ? searchData : ``;

  const selectQuery = `
 SELECT	ROW_NUMBER () OVER(ORDER BY A.createdAt)              AS num,
        A.id,
 		A.question,
 		A.answer,
 		A.isDelete,
 		A.FaqTypeId,
 		A.deletedAt,
        DATE_FORMAT(A.deletedAt, "%Y년 %m월 %d일")				AS viewDeletedAt,
        A.createdAt,
        DATE_FORMAT(A.createdAt, "%Y년 %m월 %d일")				AS viewCreatedAt,
        A.updatedAt,
        DATE_FORMAT(A.updatedAt, "%Y년 %m월 %d일")				AS viewUpdatedAt,
        B.value												  AS typeValue
   FROM	faqs		A
  INNER
   JOIN	faqTypes 	B
     ON	A.FaqTypeId = B.id
  WHERE	A.isDelete = 0
    AND A.question LIKE '%${_searchData}%'
        ${_typeId ? `AND A.FaqTypeId = ${_typeId}` : ``}
  ORDER BY A.createdAt DESC
  `;

  try {
    const list = await models.sequelize.query(selectQuery);

    return res.status(200).json(list[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ목록을 불러올 수 없습니다.");
  }
});

router.post("/create", async (req, res, next) => {
  const { question, answer, faqTypeId } = req.body;

  const insertQuery = `
  INSERT INTO faqs
  (
    question,
    answer,
    faqTypeId,
    createdAt,
    updatedAt
  )
  VALUES
  (
    "${question}",
    "${answer}",
    ${faqTypeId},
    now(),
    now()
  )
  `;

  try {
    const insertResult = await models.sequelize.query(insertQuery);

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ를 추가할 수 없습니다.");
  }
});

router.post("/update", async (req, res, next) => {
  const { id, question, answer, faqTypeId } = req.body;

  const validateQuery = `
  SELECT    *
    FROM    faqs
   WHERE    isDelete = 0
     AND    id = ${id}
  `;

  const updateQuery = `
  UPDATE    faqs
     SET    question = "${question}",
            answer = "${answer}",
            FaqTypeId = ${faqTypeId},
            updatedAt = now()
   WHERE    id = ${id}
  `;

  try {
    const validateResult = await models.sequelize.query(validateQuery);

    if (validateResult[0].length === 0) {
      return res.status(401).send("존재하지 않는 FAQ 정보입니다.");
    }

    const updateResult = await models.sequelize.query(updateQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ를 수정할 수 없습니다.");
  }
});

router.post("/delete", async (req, res, next) => {
  const { id } = req.body;

  const validateQuery = `
  SELECT    *
    FROM    faqs
   WHERE    isDelete = 0
     AND    id = ${id}
  `;

  const deleteQuery = `
  UPDATE    faqs
     SET    isDelete = 1,
            deletedAt = now()
   WHERE    id = ${id}
  `;

  try {
    const validateResult = await models.sequelize.query(validateQuery);

    if (validateResult[0].length === 0) {
      return res.status(401).send("존재하지 않는 FAQ 정보입니다.");
    }

    const deleteResult = await models.sequelize.query(deleteQuery);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ를 삭제할 수 없습니다.");
  }
});

module.exports = router;
