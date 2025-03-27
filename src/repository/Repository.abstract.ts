import { Url } from "../model/urlTable.model";

export abstract class Repository {
	abstract findWithLongUrl(longUrl: string): Promise<string | null>;
	abstract create(url: Url): Promise<string>;
}
