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
        breakfast1: {
          type: DataTypes.STRING(100), // 아침식사 1
          allowNull: false,
        },
        breakfast2: {
          type: DataTypes.STRING(100), // 아침식사 2
          allowNull: false,
        },
        breakfast3: {
          type: DataTypes.STRING(100), // 아침식사 3
          allowNull: false,
        },
        breakfast4: {
          type: DataTypes.STRING(100), // 아침식사 4
          allowNull: false,
        },
        breakfast5: {
          type: DataTypes.STRING(100), // 아침식사 5
          allowNull: false,
        },
        breakfast6: {
          type: DataTypes.STRING(100), // 아침식사 6
          allowNull: false,
        },
        breakfastCalorie: {
          type: DataTypes.STRING(50), // 아침식사 칼로리
          allowNull: false,
        },
        breakfaseImage: {
          type: DataTypes.STRING(600), // 아침식사 이미지
          allowNull: true,
        },
        lunch1: {
          type: DataTypes.STRING(100), // 점심식사1
          allowNull: false,
        },
        lunch2: {
          type: DataTypes.STRING(100), // 점심식사2
          allowNull: false,
        },
        lunch3: {
          type: DataTypes.STRING(100), // 점심식사3
          allowNull: false,
        },
        lunch4: {
          type: DataTypes.STRING(100), // 점심식사4
          allowNull: false,
        },
        lunch5: {
          type: DataTypes.STRING(100), // 점심식사5
          allowNull: false,
        },
        lunch6: {
          type: DataTypes.STRING(100), // 점심식사6
          allowNull: false,
        },
        lunchCalorie: {
          type: DataTypes.STRING(50), // 점심식사 칼로리
          allowNull: false,
        },
        lunchImage: {
          type: DataTypes.STRING(600), // 점심식사 이미지
          allowNull: true,
        },
        dinner1: {
          type: DataTypes.STRING(100), // 저녁식사1
          allowNull: false,
        },
        dinner2: {
          type: DataTypes.STRING(100), // 저녁식사2
          allowNull: false,
        },
        dinner3: {
          type: DataTypes.STRING(100), // 저녁식사3
          allowNull: false,
        },
        dinner4: {
          type: DataTypes.STRING(100), // 저녁식사4
          allowNull: false,
        },
        dinner5: {
          type: DataTypes.STRING(100), // 저녁식사5
          allowNull: false,
        },
        dinner6: {
          type: DataTypes.STRING(100), // 저녁식사6
          allowNull: false,
        },
        dinnerCalorie: {
          type: DataTypes.STRING(50), // 저녁식사 칼로리
          allowNull: false,
        },
        dinnerImage: {
          type: DataTypes.STRING(600), // 저녁식사 이미지
          allowNull: true,
        },
        morningSnack1: {
          type: DataTypes.STRING(300), // 오전 간식1
          allowNull: false,
        },
        morningSnack2: {
          type: DataTypes.STRING(300), // 오전 간식2
          allowNull: false,
        },
        morningSnackImage: {
          type: DataTypes.STRING(600), // 오전 간식 이미지
          allowNull: true,
        },
        afternoonSnack1: {
          type: DataTypes.STRING(300), // 오후 간식1
          allowNull: false,
        },
        afternoonSnack2: {
          type: DataTypes.STRING(300), // 오후 간식2
          allowNull: false,
        },
        afternoonSnackImage: {
          type: DataTypes.STRING(600), // 오후 간식 이미지
          allowNull: true,
        },
        functionDiet: {
          type: DataTypes.STRING(100), // 기능별식이
          allowNull: true,
        },
        diabetes: {
          type: DataTypes.STRING(50), // 당뇨
          allowNull: true,
        },
        scene: {
          type: DataTypes.STRING(50), // 경관
          allowNull: true,
        },
        lowSalt: {
          type: DataTypes.STRING(50), // 저염
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
