import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModels.js";

const {DataTypes} = Sequelize;

const Karyawan = db.define('karyawan',{
    nomor_badge: DataTypes.STRING,
    nama_kar: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    jabatan: DataTypes.STRING,
    area_pemasaran: DataTypes.STRING,
    status: DataTypes.STRING,
    no_tlp : DataTypes.STRING,
    ukuran_baju: DataTypes.STRING,
    nomor_celana: DataTypes.STRING,
    foto: DataTypes.STRING,
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Users.hasMany(Karyawan);
Karyawan.belongsTo(Users, {foreignKey: 'userId'});
export default Karyawan;

(async()=>{
    await db.sync();
})(); 