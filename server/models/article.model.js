module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define('Article', {
        article_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
        },
      });
    
      return Article;
    };