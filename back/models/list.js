const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Lists extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        hit: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        file: {
          type: DataTypes.STRING(600),
          allowNull: true,
        },
        filename: {
          type: DataTypes.STRING(300),
          allowNull: true,
        },
        imagePath: {
          type: DataTypes.STRING(600),
          allowNull: true,
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
        modelName: "Lists",
        tableName: "lists",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
