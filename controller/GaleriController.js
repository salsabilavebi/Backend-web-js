import Galeri from "../models/GaleriModels.js";
import path from "path";
import fs from "fs";

export const getGaleris = async(req, res)=>{

    try {
        const response = await Galeri.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
   
}

export const getGaleriById = async(req, res)=>{

    try {
        const response = await Galeri.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }

    
}

export const saveGaleri = (req, res)=>{

    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const judul_kegiatan = req.body.judul_kegiatan;
    const file = req.files.file;
    const file1 = req.files.file1;
    const file2 = req.files.file2;
    const file3 = req.files.file3;
    const file4 = req.files.file4;
    const fileSize = file.data.length;
    const fileSize1 = file1.data.length;
    const fileSize2 = file2.data.length;
    const fileSize3 = file3.data.length;
    const fileSize4 = file4.data.length;
    const ext = path.extname(file.name);
    const ext1 = path.extname(file1.name);
    const ext2 = path.extname(file2.name);
    const ext3 = path.extname(file3.name);
    const ext4 = path.extname(file4.name);
    const fileName = file.md5 + ext;
    const fileName1 = file1.md5 + ext;
    const fileName2 = file2.md5 + ext;
    const fileName3 = file3.md5 + ext;
    const fileName4 = file4.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/galeri/${fileName}`;
    const url1 = `${req.protocol}://${req.get("host")}/galeri/${fileName1}`;
    const url2 = `${req.protocol}://${req.get("host")}/galeri/${fileName2}`;
    const url3 = `${req.protocol}://${req.get("host")}/galeri/${fileName3}`;
    const url4 = `${req.protocol}://${req.get("host")}/galeri/${fileName4}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/galeri/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Galeri.create({judul_kegiatan: judul_kegiatan, foto_kegiatan1: fileName, foto_kegiatan2: fileName1, foto_kegiatan3: fileName2, foto_kegiatan4: fileName3, foto_kegiatan5: fileName4});
            res.status(201).json({msg: "Karyawan Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
   
    if(!allowedType.includes(ext1.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize1 > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file1.mv(`./public/galeri/${fileName1}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Galeri.create({judul_kegiatan: judul_kegiatan, foto_kegiatan1: fileName, foto_kegiatan2: fileName1, foto_kegiatan3: fileName2, foto_kegiatan4: fileName3, foto_kegiatan5: fileName4});
            res.status(201).json({msg: "Karyawan Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
    if(!allowedType.includes(ext2.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize2 > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file2.mv(`./public/galeri/${fileName2}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Galeri.create({judul_kegiatan: judul_kegiatan, foto_kegiatan1: fileName, foto_kegiatan2: fileName1, foto_kegiatan3: fileName2, foto_kegiatan4: fileName3, foto_kegiatan5: fileName4});
            res.status(201).json({msg: "Karyawan Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

    if(!allowedType.includes(ext3.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize3 > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file3.mv(`./public/galeri/${fileName2}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Galeri.create({judul_kegiatan: judul_kegiatan, foto_kegiatan1: fileName, foto_kegiatan2: fileName1, foto_kegiatan3: fileName2, foto_kegiatan4: fileName3, foto_kegiatan5: fileName4});
            res.status(201).json({msg: "Karyawan Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

    if(!allowedType.includes(ext4.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize4 > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file4.mv(`./public/galeri/${fileName4}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Galeri.create({judul_kegiatan: judul_kegiatan, foto_kegiatan1: fileName, foto_kegiatan2: fileName1, foto_kegiatan3: fileName2, foto_kegiatan4: fileName3, foto_kegiatan5: fileName4});
            res.status(201).json({msg: "Karyawan Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
   
}

