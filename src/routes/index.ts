import type { RequestHandler } from './__types/index';
import { faker } from '@faker-js/faker';

export const get: RequestHandler = function ({ request }) {
	let current_city = '';
	let visited: string[] = [];
	if (import.meta.env.DEV) {
		current_city = getFakeCity();
		visited = Array(5)
			.fill('')
			.map((_) => getFakeCity());
	} else {
		current_city = request.headers.get('x-vercel-ip-city') ?? 'unknown';
	}

	return {
		body: {
			visited,
			current_city
		}
	};
};

function getFakeCity() {
	return `${faker.address.cityName()}, ${faker.address.country()}`;
}
