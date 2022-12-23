import {Sequelize} from "sequelize";
import db from "../config/Database.js";

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
    foto: DataTypes.STRING
},{
    freezeTableName: true
});

export default Karyawan;

(async()=>{
    await db.sync();
})();