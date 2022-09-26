const Sequelize = require("sequelize");
const user = require("./user");
const mainbanner = require("./mainbanner");
const companyinfo = require("./companyinfo");
const popup = require("./popup");
const acceptrecord = require("./acceptrecord");
const notice = require("./notice");
const announce = require("./announce");
const news = require("./news");
const list = require("./list");
const gallary = require("./gallary");
const question = require("./question");
const seo = require("./seo");
const faqtype = require("./faqtype");
const faq = require("./faq");
const recruit = require("./recruit");
const programdate = require("./programdate");
const program = require("./program");
const menu = require("./menu");
const moveservicecar = require("./moveservicecar");
const moveservicetime = require("./moveservicetime");
const moveservice = require("./moveservice");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = user;
db.MainBanner = mainbanner;
db.CompanyInfo = companyinfo;
db.Popup = popup;
db.AcceptRecord = acceptrecord;
db.Notice = notice;
db.Announce = announce;
db.News = news;
db.List = list;
db.Gallary = gallary;
db.Question = question;
db.Seo = seo;
db.FaqType = faqtype;
db.Faq = faq;
db.Recruit = recruit;
db.ProgramDate = programdate;
db.Program = program;
db.Menu = menu;
db.MoveServiceCar = moveservicecar;
db.MoveServiceTime = moveservicetime;
db.MoveService = moveservice;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
