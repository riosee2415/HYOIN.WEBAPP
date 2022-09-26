const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class WeekAdmission extends Model {
  static init(sequelize) {
    return super.init(
      {
        personnel: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        totalPeople: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        avaliablePeople: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        waitingPeople: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        modelName: "WeekAdmission",
        tableName: "weekAdmissions",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
