const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Question extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        title: {
          type: DataTypes.STRING(200), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        mobile: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        isCompleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        completedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        modelName: "Question",
        tableName: "questions",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
