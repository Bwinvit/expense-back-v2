import dotenv from "dotenv"

dotenv.config()

export const CONFIG = {
    PORT: process.env.PORT,
    POSTGRES_URL: process.env.POSTGRES_URL,
}