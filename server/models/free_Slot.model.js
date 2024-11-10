
module.exports = (sequelize, Sequelize) => {
    const FreeSlot = sequelize.define('FreeSlot', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        day: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        slot: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });



    return FreeSlot;
};

