module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define('Feedback', {
        feedback_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        rating: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        comment: {
          type: Sequelize.STRING,
        },
      });
    
      return Feedback;
    };