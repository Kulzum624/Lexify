module.exports = (sequelize, Sequelize) => {
    const LegalDocuments = sequelize.define('LegalDocuments', {
        legal_template_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        legal_template_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        legal_template_type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        e_signature: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
    
      return LegalDocuments;
    };