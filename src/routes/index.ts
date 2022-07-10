import type { RequestHandler } from './__types/index';

const CITY_HEADER = 'x-vercel-ip-city';
const COUNTRY_HEADER = 'x-vercel-ip-country';

export const get: RequestHandler = function ({ request }) {
	let current_city = '';
	let visited: string[] = [];

	const city = request.headers.get(CITY_HEADER) ?? 'unknown city';
	const country = getCountryName(request.headers.get(COUNTRY_HEADER));
	current_city = `${city}, ${country}`;

	return {
		body: {
			visited,
			current_city
		}
	};
};

const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
function getCountryName(countryCode: string | null) {
	if (countryCode) {
		return displayNames.of(countryCode);
	}
	return 'unknown country';
}
