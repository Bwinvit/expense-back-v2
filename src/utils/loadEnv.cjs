const { resolve } = require("path");

require("dotenv").config({
    path:
        process.env.NODE_ENV.trim() === "production"
            ? resolve(__dirname, "../../config/.env.production")
            : resolve(__dirname, "../../config/.env.development"),
});
