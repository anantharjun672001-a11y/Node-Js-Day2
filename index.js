import http from "http";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();   

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(`<h1 style="text-align:center;">Welcome to Backend</h1>`);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
