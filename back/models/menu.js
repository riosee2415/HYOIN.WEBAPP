const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Menu extends Model {
  static init(sequelize) {
    return super.init(
      {
        saveDate: {
          type: DataTypes.DATE, // 날짜
          allowNull: false,
        },
        breakfast: {
          type: DataTypes.STRING(1000), // 아침식사
          allowNull: false,
        },
        breakfastCalorie: {
          type: DataTypes.STRING(50), // 아침식사 칼로리
          allowNull: false,
        },
        breakfaseImage: {
          type: DataTypes.STRING(600), // 아침식사 이미지
          allowNull: false,
        },
        lunch: {
          type: DataTypes.STRING(1000), // 점심식사
          allowNull: false,
        },
        lunchCalorie: {
          type: DataTypes.STRING(50), // 점심식사 칼로리
          allowNull: false,
        },
        lunchImage: {
          type: DataTypes.STRING(600), // 점심식사 이미지
          allowNull: false,
        },
        dinner: {
          type: DataTypes.STRING(1000), // 저녁식사
          allowNull: false,
        },
        dinnerCalorie: {
          type: DataTypes.STRING(50), // 저녁식사 칼로리
          allowNull: false,
        },
        dinnerImage: {
          type: DataTypes.STRING(600), // 저녁식사 이미지
          allowNull: false,
        },
        morningSnack: {
          type: DataTypes.STRING(300), // 오전 간식
          allowNull: false,
        },
        morningSnackImage: {
          type: DataTypes.STRING(600), // 오전 간식 이미지
          allowNull: false,
        },
        afternoonSnack: {
          type: DataTypes.STRING(300), // 오후 간식
          allowNull: false,
        },
        afternoonSnackImage: {
          type: DataTypes.STRING(600), // 오후 간식 이미지
          allowNull: false,
        },
        functionDiet: {
          type: DataTypes.STRING(100), // 기능별식이
          allowNull: false,
        },
        diabetes: {
          type: DataTypes.STRING(50), // 당뇨
          allowNull: false,
        },
        scene: {
          type: DataTypes.STRING(50), // 경관
          allowNull: false,
        },
        lowSalt: {
          type: DataTypes.STRING(50), // 저염
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
        modelName: "Menu",
        tableName: "menus",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
