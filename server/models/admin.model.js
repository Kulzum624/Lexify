const bcryptjs = require('bcryptjs');
const jwt = require ("jsonwebtoken");

module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define('Admin', {
    admin_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    admin_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tokens: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
    },
  });

  Admin.beforeCreate(async (admin) => {
    if (admin.changed('admin_password')) {
      admin.admin_password = await bcryptjs.hash(admin.admin_password, 10);
    }
  });

  //Generate token to verify user
  Admin.prototype.generateToken = async function () {
    try {
      let generatedToken = jwt.sign({ admin_id: this.admin_id }, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token: generatedToken });
      await this.save();
      return generatedToken;
    } catch (error) {
      console.log(error);
    }
  };

  return Admin;
};