const bcryptjs = require ("bcryptjs");
const jwt = require ("jsonwebtoken");

// require('dotenv').config();
// dotenv.config({path : './config.env'});
//require('dotenv').config({ path: '../.env' });

//const secretKey = process.env.SECRET_KEY;


module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_contact: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_cnic_no: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    user_address: {
      type: Sequelize.STRING,
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    otp: {
      type: Sequelize.STRING,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    tokens: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [], 
    },
  });

  // Hashing Password to Secure 
  User.beforeCreate(async (user) => {
    if (user.changed('user_password')) {
      user.user_password = await bcryptjs.hash(user.user_password, 10);
    }
  });

  User.beforeUpdate(async (user) => {
    if (user.changed('user_password')) {
      user.user_password = await bcryptjs.hash(user.user_password, 10);
    }
  });

  //Generate token to verify user
  User.prototype.generateToken = async function () {
    try {
      let generatedToken = jwt.sign({ user_id: this.user_id }, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token: generatedToken });
      await this.save();
      return generatedToken;
    } catch (error) {
      console.log(error);
    }
  };

   
  return User;
};