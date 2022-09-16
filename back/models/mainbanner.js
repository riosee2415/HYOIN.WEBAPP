const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class MainBanner extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        subTitle: {
          type: DataTypes.STRING(300),
          allowNull: true,
        },
        imagePath: {
          type: DataTypes.STRING(600),
          allowNull: false,
        },
        mobileImagePath: {
          type: DataTypes.STRING(600),
          allowNull: false,
        },
      },
      {
        modelName: "MainBanner",
        tableName: "mainBanners",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
