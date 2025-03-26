import Fastify, { RouteShorthandOptions } from "fastify";

const fastify = Fastify({
	logger: true,
});

/*
 * 1. POST /api/v1/LongUrl => Create Short Url for User
 * 2. GET /api/v1/shortUrl => redirect user to mapped url
 */

// endpoints
interface IParams {
	url: string;
}

const opts: RouteShorthandOptions = {
	schema: {
		params: {
			type: "object",
			properties: {
				url: { type: "string" },
			},
		},
	},
};

fastify.post<{ Params: IParams }>("/:url", opts, (req, reply) => {
	const { url } = req.params;
	// TODO: Map Url To ShortUrl
});

fastify.get<{ Params: IParams }>("/:url", opts, (req, reply) => {
	// TODO: GetShortUrl in Param and returned LongUrl
});

try {
	fastify.listen({ port: 3000 });
} catch (err) {
	console.error(err);
	process.exit(1);
}
