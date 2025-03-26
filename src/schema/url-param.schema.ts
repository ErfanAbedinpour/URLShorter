import { RouteShorthandOptions } from "fastify";

export interface IParams {
	url: string;
}

export const opts: RouteShorthandOptions = {
	schema: {
		params: {
			type: "object",
			properties: {
				url: { type: "string" },
			},
		},
	},
};
