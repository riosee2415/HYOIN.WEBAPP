const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class MoveService extends Model {
  static init(sequelize) {
    return super.init(
      {
        degree: {
          type: DataTypes.STRING(10), // 차수 | Ex) 1차, 2차
          allowNull: false,
        },
        passenger: {
          type: DataTypes.STRING(100), // 승객명 | 이종선 박현준 전춘자 ....
          allowNull: false,
        },
        count: {
          type: DataTypes.STRING(30), // 인원 | 2명
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
        modelName: "MoveService",
        tableName: "moveServices",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.MoveService.belongsTo(db.MoveServiceCar);
    db.MoveService.belongsTo(db.MoveServiceTime);
  }
};
