export const DB_CONFIG = {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: +(process.env.DB_PORT || 5432),
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_USER: process.env.DB_USER || "",
    DB_NAME: process.env.DB_NAME || "'"
}