import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Galeri = db.define('galeri',{
    judul_kegiatan: DataTypes.STRING,
    foto_kegiatan1: DataTypes.STRING,
    foto_kegiatan2: DataTypes.DATE,
    foto_kegiatan3: DataTypes.STRING,
    foto_kegiatan4: DataTypes.STRING,
    foto_kegiatan5: DataTypes.STRING,
   
},{
    freezeTableName: true
});

export default Galeri;

(async()=>{
    await db.sync();
})();