import express from "express";
import "./utils/loadEnv.cjs"

const app = express();
const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});
