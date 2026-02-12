import http from "http";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRoute from "./Routers/productRoute.js"

//dotenv config

dotenv.config();

//express initialization

const app = express();  



//default middleware

app.use(express.json());

app.use(cors());

//default route

app.get("/", (req, res) => {
    res.status(200).send(`<h1 style="text-align:center;">Welcome to Backend</h1>`);
});

//custom routes
app.use("/api/products",productRoute);

//port

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


