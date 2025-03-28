import Fastify from "fastify";
import { IBody, IParam } from "./schema/url-param.schema";
import urlService from "./service/url.service";
import { uniqueIdGenerator } from "./utils/uniqueIdGenerator";
import { convertToBase62 } from "./utils/convertToBase62";
import fastifyStatic from '@fastify/static';
import path from "path";

const fastify = Fastify({ logger: true });

fastify.register(fastifyStatic, {
	root: path.join(process.cwd(), 'public'),
});


fastify.get('/', async (req, reply) => {
	return reply.sendFile('index.html');
});


fastify.post<{ Body: IBody }>("/", async (req, reply) => {
	const { url } = req.body;

	if (!url)
		return reply.send({ message: "url is not found in body" }).code(400);


	try {
		const isShortUrlExist = await urlService.isLongUrlExist(url);
		if (isShortUrlExist)
			return {
				shortUrl: `${req.host}/${isShortUrlExist}`
			}

		const uniqueNumber = uniqueIdGenerator();
		const uniqueBase62 = convertToBase62(uniqueNumber);

		urlService.createNewShortUrl({
			id: uniqueNumber,
			longUrl: url,
			shortUrl: uniqueBase62,
		})
		return { shortUrl: `${req.host}/${uniqueBase62}` }

	} catch (err) {
		console.error(err)
		return reply.send({ message: "internal server error during create url" }).code(500)
	}
});

fastify.get<{ Params: IParam }>("/:url", async (req, reply) => {
	const { url } = req.params;
	if (!url)
		reply.send({ message: "enter url in param" }).code(404)

	try {
		const long_url = await urlService.getOriginalUrlByShortUrl(url);

		if (!long_url)
			return reply.send({ message: "url does not found please first register it." }).code(404)

		return reply.redirect(long_url, 301)
	} catch (err) {
		console.error(err)
		return reply.send({ message: "url doest nof found please first register it." }).code(500)
	}
});


try {
	fastify.listen({ port: +(process.env.PORT || 3000), host: '0.0.0.0' });
} catch (err) {
	console.error(err);
	process.exit(1);
}
