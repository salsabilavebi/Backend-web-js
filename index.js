import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import KaryawanRoutes from "./routes/KaryawanRoutes.js";
import Users from "./routes/UserRoutes.js"
import GaleriRoutes from "./routes/GaleriRoutes.js";
import db from "./config/Database.js";


const app = express();


app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(KaryawanRoutes);
app.use(Users)
app.use(GaleriRoutes);
//store.sync();

app.listen(5000, ()=> {console.log('Server up and running...');
});