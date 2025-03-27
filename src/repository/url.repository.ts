import { Repository } from "./Repository.abstract";
import { Url } from "../model/urlTable.model";
import { Client } from "pg";

export class UrlRepository implements Repository {
	constructor(private readonly client: Client) { }

	async create({ id, longUrl, shortUrl }: Url): Promise<string> {
		const query = `INSERT INTO url VALUES($1,$2,$3) RETURNING short_url`
		const values = [id, longUrl, shortUrl]
		try {
			const result = await this.client.query(query, values)
			return result.rows[0]
		} catch (err) {
			throw err;
		}
	}

	async findWithLongUrl(longUrl: string): Promise<string | null> {
		const query = `SELECT short_url FROM url WHERE long_url = $1 LIMIT 1`
		const condition = [longUrl]
		try {
			const res = await this.client.query(query, condition)
			return res.rows[0]
		} catch (err) {
			throw err
		}
	}
}
