const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const models = require("../models");

const router = express.Router();

router.post("/list", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(401).send("프로그램 목록을 불러올 수 없습니다.");
  }
});

router.post("/create", isAdminCheck, async (req, res, next) => {
  const { insertPrograms, specificDate } = req.body;

  if (!Array.isArray(insertPrograms)) {
    return res.status(401).send("잘못된 요청입니다.");
  }

  const findQuery = `
  SELECT  id
    FROM  programDates
   WHERE  DATE_FORMAT(specificDate, "%Y-%m-%d") = DATE_FORMAT(${specificDate}, "%Y-%m-%d")
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
                ${data.imagePath ? `"${imagePath}"` : null}
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
                ${data.imagePath ? `"${imagePath}"` : null}
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

router.post("/update", isAdminCheck, async (req, res, next) => {
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
