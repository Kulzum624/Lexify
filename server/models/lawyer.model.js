const bcryptjs = require('bcryptjs');
const jwt = require ("jsonwebtoken");

module.exports = (sequelize, Sequelize) => {
    const Lawyer = sequelize.define('Lawyer', {
        lawyer_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        lawyer_contact: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        lawyer_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lawyer_address: {
          type: Sequelize.STRING,
        },
        lawyer_license_no: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        lawyer_cnic_no: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        lawyer_email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        lawyer_password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tokens: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          defaultValue: [], 
        },
        lawyer_rating: {
          type: Sequelize.FLOAT,
          defaultValue: 0.0,
        },
      });
      Lawyer.beforeCreate(async (lawyer) => {
        if (lawyer.changed('lawyer_password')) {
          lawyer.lawyer_password = await bcryptjs.hash(lawyer.lawyer_password, 10);
        }
      });
    
      Lawyer.prototype.generateToken = async function () {
        try {
          let generatedToken = jwt.sign({ lawyer_id: this.lawyer_id }, process.env.SECRET_KEY);
          this.tokens = this.tokens.concat({ token: generatedToken });
          await this.save();
          return generatedToken;
        } catch (error) {
          console.log(error);
        }
      };
    
      return Lawyer;
    };