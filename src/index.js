import dotenv from "dotenv";
import connectDB from "./db/index.js"
import  express  from "express";
const app = express();

dotenv.config({
    path: "./.env"
});

connectDB()
.then(() => {
    app.listen( (process.env.PORT || 8000),() => {
        console.log(` Server is running at port : ${process.env.PORT
        }`);
    })
   app.on("error", (error) => {
    console.log("Errr: ",error);
    throw error;
   }) 
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})