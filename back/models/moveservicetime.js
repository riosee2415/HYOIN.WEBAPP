const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class MoveServiceTime extends Model {
  static init(sequelize) {
    return super.init(
      {
        moveTime: {
          type: DataTypes.STRING(30), // 오전 or 오후
          allowNull: false,
        },
        moverName: {
          type: DataTypes.STRING(50), // 기사명 | Ex) 홍길동
          allowNull: false,
        },
      },
      {
        modelName: "MoveServiceTime",
        tableName: "moveServiceTimes",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.MoveServiceTime.belongsTo(db.MoveServiceCar);
  }
};
