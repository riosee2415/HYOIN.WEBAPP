const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class MoveServiceCar extends Model {
  static init(sequelize) {
    return super.init(
      {
        carCount: {
          type: DataTypes.STRING(30), // 호차 | Ex) 1호차, 2호차
          allowNull: false,
        },
        carNum: {
          type: DataTypes.STRING(10), // 차량 번호 | Ex) 3680
          allowNull: false,
        },
        moveDate: {
          type: DataTypes.DATE, // 날짜
          allowNull: false,
        },
      },
      {
        modelName: "MoveServiceCar",
        tableName: "moveServiceCars",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
