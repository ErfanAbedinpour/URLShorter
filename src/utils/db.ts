import { Client } from "pg";
import { DB_CONFIG } from "../config/db.config";

export function createDatabaseConnection() {
	const client = new Client({
		host: DB_CONFIG.DB_HOST,
		port: DB_CONFIG.DB_PORT,
		password: DB_CONFIG.DB_PASSWORD,
		database: DB_CONFIG.DB_NAME,
		user: DB_CONFIG.DB_USER
	});
	try {
		client.connect();
		return client;
	} catch (err) {
		console.error("error during connect redis ", err);
		process.exit(1);
	}
}