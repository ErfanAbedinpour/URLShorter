import Fastify, { RouteShorthandOptions } from "fastify";
import { IParams, opts } from "./schema/url-param.schema";

const fastify = Fastify({
	logger: true,
});

/*
 * 1. POST /api/v1/LongUrl => Create Short Url for User
 * 2. GET /api/v1/shortUrl => redirect user to mapped url
 */

/*
 * Appraoch
 * 1. UserSend LongURl
 * 2. Check DB if exsist url return shortUrl
 * 3. if Not createUniqueNumber and convertToBase62 and mapped to long url
 * */

fastify.post<{ Params: IParams }>("/:url", opts, (req, _) => {
	const { url } = req.params;
	// TODO: Map Url To ShortUrl
});

fastify.get<{ Params: IParams }>("/:url", opts, (req, reply) => {
	// TODO: GetShortUrl in Param and returned LongUrl
	return { hello: "salam" };
});

try {
	fastify.listen({ port: 3000 });
} catch (err) {
	console.error(err);
	process.exit(1);
}
