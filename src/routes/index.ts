import type { RequestHandler } from './__types/index';
import type { Visit } from '$lib/types';
import { get_visitors, add_visitor } from '$lib/data';

interface GetResponse {
	visited: Visit[];
	current_city: string;
}

export const GET: RequestHandler<GetResponse> = async function ({ request }) {
	let current_city = get_city(request);
	let visited = await get_visitors();

	return {
		body: {
			visited,
			current_city
		}
	};
};

export const POST: RequestHandler = async function ({ request }) {
	const city = get_city(request);
	await add_visitor(city);

	return {
		status: 200,
		body: {
			signed: true
		}
	};
};

function get_city(request: Request) {
	return '???';
}
