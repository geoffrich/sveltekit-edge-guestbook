import type { RequestHandler } from './__types/index';
import { CITY_HEADER, COUNTRY_HEADER } from '$lib/constants';

export const get: RequestHandler = function ({ request }) {
	let current_city = getCity(request);
	let visited: string[] = [];

	return {
		body: {
			visited,
			current_city
		}
	};
};

export const post: RequestHandler = async function ({ request }) {
	console.log(getCity(request));

	return {
		status: 200
	};
};

function getCity(request: Request) {
	const city = request.headers.get(CITY_HEADER) ?? 'unknown city';
	const country = getCountryName(request.headers.get(COUNTRY_HEADER));
	return `${city}, ${country}`;
}

const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
function getCountryName(countryCode: string | null) {
	if (countryCode) {
		return displayNames.of(countryCode);
	}
	return 'unknown country';
}
