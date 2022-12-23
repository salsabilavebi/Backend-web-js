import Karyawan from "../models/KaryawanModels.js";
import path from "path";
import fs from "fs";

export const getKaryawans = async(req, res)=>{

    try {
        const response = await Karyawan.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
   
}

export const getKaryawanById = async(req, res)=>{

    try {
        const response = await Karyawan.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
    
}

export const saveKaryawan = (req, res)=>{

    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const nomor_badge = req.body.nomor_badge;
    const nama_kar = req.body.nama_kar;
    const tgl_lahir = req.body.tgl_lahir;
    const jabatan = req.body.jabatan;
    const area_pemasaran = req.body.area_pemasaran;
    const status = req.body.status;
    const no_tlp = req.body.no_tlp;
    const ukuran_baju = req.body.ukuran_baju;
    const nomor_celana = req.body.nomor_celana;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/karyawan/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Karyawan.create({nomor_badge: nomor_badge, nama_kar: nama_kar, tgl_lahir: tgl_lahir, jabatan: jabatan, area_pemasaran: area_pemasaran, status: status,
                 ukuran_baju: ukuran_baju, nomor_celana: nomor_celana, no_tlp: no_tlp, foto: fileName});
            res.status(201).json({msg: "Karyawan Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
   
}

export const updateKaryawan = async(req, res)=>{

    const karyawan = await Karyawan.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!karyawan) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = karyawan.foto;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/karyawan/${karyawan.foto}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/karyawan/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const nomor_badge = req.body.nomor_badge;
    const nama_kar = req.body.nama_kar;
    const tgl_lahir = req.body.tgl_lahir;
    const jabatan = req.body.jabatan;
    const area_pemasaran = req.body.area_pemasaran;
    const status = req.body.status;
    const no_tlp = req.body.no_tlp;
    const ukuran_baju = req.body.ukuran_baju;
    const nomor_celana = req.body.nomor_celana;
    const url = `${req.protocol}://${req.get("host")}/karyawan/${fileName}`;
    
    try {
        await Karyawan.update({nomor_badge: nomor_badge, nama_kar: nama_kar, tgl_lahir: tgl_lahir, jabatan: jabatan, area_pemasaran: area_pemasaran, status: status,
            ukuran_baju: ukuran_baju, nomor_celana: nomor_celana, no_tlp: no_tlp, foto: fileName},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Karyawan Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    
}

export const deleteKaryawan = async(req, res)=>{

    const karyawan = await Karyawan.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!karyawan) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/karyawan/${karyawan.foto}`;
        fs.unlinkSync(filepath);
        await Karyawan.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Karyawan Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    
}