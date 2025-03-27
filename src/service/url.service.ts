import { Url } from "../model/urlTable.model";
import { UrlRepository } from "../repository/url.repository";
import { createDatabaseConnection } from "../utils/db";

class UrlService {
    private urlRepo: UrlRepository;
    constructor() {
        this.urlRepo = new UrlRepository(createDatabaseConnection());
    }

    isLongUrlExist(longUrl: string) {
        return this.urlRepo.findWithLongUrl(longUrl)
    }

    async createNewShortUrl(url: Url) {
        try {
            const res = await this.urlRepo.create(url)
            return res;
        } catch (err) {
            throw err;
        }
    }


    getOriginalUrlByShortUrl(shortUrl: string) {
        return this.urlRepo.findOriginalUrl(shortUrl);
    }
}

export default new UrlService