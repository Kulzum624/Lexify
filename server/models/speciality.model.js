module.exports = (sequelize, Sequelize) => {
    const Speciality = sequelize.define('Speciality', {
        speciality_name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
      });
    
      return Speciality;
    };