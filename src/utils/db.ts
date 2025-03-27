import { Client } from "pg";

export function createDatabaseConnection() {
	const client = new Client({ host: 'localhost', port: 5432, password: "12341234", database: "url-shorter", user: 'admin' });
	try {
		client.connect();
		return client;
	} catch (err) {
		console.error("error during connect redis ", err);
		process.exit(1);
	}
}