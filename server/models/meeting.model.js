
module.exports = (sequelize, Sequelize) => {
  const MeetingRecord = sequelize.define('MeetingRecord', {
    meeting_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lawyer_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lawyer_email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    day: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    slot: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  return MeetingRecord;
};