import express from "express";

const app = express();
const port = process.env.PORT || 4444;

app.get("/", (req, res) => {
    res.send("APIs Running!");
});
app.get("/home", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});
