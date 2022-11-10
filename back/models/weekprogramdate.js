const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class WeekProgramDate extends Model {
  static init(sequelize) {
    return super.init(
      {
        specificDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        isDelete: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        modelName: "WeekProgramDate",
        tableName: "weekProgramDates",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
