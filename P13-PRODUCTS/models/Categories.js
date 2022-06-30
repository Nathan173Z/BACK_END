const Sequelize = require('sequelize');
const db= require('../database/db');

const categories = db.define('natanael_categories', {
    name:{
        type: Sequelize.STRING(50),
        allowNull: false,
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})

//Criar a tabela com sequelize
// categories.sync();

//Excluir a tabela e criar novamente
//User.sync({ force: true});

//Verificar se há alguma diferença na tabela, realiza alteração
// User.sync({ alter: true});

module.exports = categories;