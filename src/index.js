import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/test", (req, res) => {
    res.send("APIs tested");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app