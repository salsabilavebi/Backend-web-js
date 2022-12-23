import {Sequelize} from "sequelize";

const db = new Sequelize('penjualan3a','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;