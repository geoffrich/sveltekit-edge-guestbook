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
	return '???';
}
