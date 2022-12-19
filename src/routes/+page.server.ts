import { CITY_HEADER, COUNTRY_HEADER } from '$lib/constants';
import { get_visitors, add_visitor } from '$lib/data';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async function ({ request }) {
	const current_city = get_city(request);
	const visited = await get_visitors();

	return {
		visited,
		current_city
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const city = get_city(request);
		await add_visitor(city);
		return {
			signed: true
		};
	}
};

function get_city(request: Request) {
	const city = request.headers.get(CITY_HEADER) ?? 'unknown city';
	const country = get_country_name(request.headers.get(COUNTRY_HEADER));
	return `${city}, ${country}`;
}

const display_names = new Intl.DisplayNames(['en'], { type: 'region' });
function get_country_name(country_code: string | null) {
	if (country_code) {
		return display_names.of(country_code);
	}
	return 'unknown country';
}
