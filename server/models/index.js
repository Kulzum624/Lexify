const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require("./admin.model.js")(sequelize, Sequelize);
db.articles = require("./article.model.js")(sequelize, Sequelize);
db.feedbacks = require("./feedback.model.js")(sequelize, Sequelize);
db.lawyers = require("./lawyer.model.js")(sequelize, Sequelize);
db.documents = require("./legal_Document.model.js")(sequelize, Sequelize);
db.specialitys = require("./speciality.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.meetings = require("./meeting.model.js")(sequelize, Sequelize);
db.slots =require("./free_Slot.model.js")(sequelize, Sequelize);


db.lawyers.hasMany(db.feedbacks,{
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  onDelete: 'CASCADE',
});
db.feedbacks.belongsTo(db.lawyers);

db.users.hasMany(db.meetings,{
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  onDelete: 'CASCADE',
});
db.meetings.belongsTo(db.users);

db.lawyers.hasMany(db.slots,{
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  onDelete: 'CASCADE',
});
db.slots.belongsTo(db.lawyers);

db.lawyers.hasMany(db.specialitys, {
  foreignKey: {
    allowNull: false,
  },
  as: 'specialities',
  onDelete: 'CASCADE', 
});
db.specialitys.belongsTo(db.lawyers);

db.users.hasMany(db.feedbacks, {
  foreignKey: {
    allowNull: false,
  },
  as: 'feedbacks',
  onDelete: 'CASCADE', 
});
db.feedbacks.belongsTo(db.users);


db.users.hasMany(db.documents, {
  foreignKey: {
    allowNull: false,
  },
  as: 'documents',
  onDelete: 'CASCADE', 
});
db.documents.belongsTo(db.users);

db.admins.hasMany(db.documents, {
  foreignKey: {
    allowNull: false,
  },
  as: 'documents',
  onDelete: 'CASCADE', 
});
db.documents.belongsTo(db.admins);

db.admins.hasMany(db.articles, {
  foreignKey: {
    allowNull: false,
  },
  as: 'articles',
  onDelete: 'CASCADE', 
});
db.articles.belongsTo(db.admins);

db.admins.hasMany(db.lawyers, {
  foreignKey: {
    allowNull: false,
  },
  as: 'lawyers',
  onDelete: 'CASCADE', 
});
db.lawyers.belongsTo(db.admins);

// db.sequelize
//   .sync({alter : true})

//   .catch(error => logError('Something went wrong', error))
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//     console.error(err);
//   });
module.exports = db;
