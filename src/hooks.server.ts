import type { Handle } from '@sveltejs/kit';
import { COUNTRY_HEADER, CITY_HEADER } from '$lib/constants';
import { dev } from '$app/environment';

export const handle: Handle = async function ({ event, resolve }) {
	if (dev) {
		event.request.headers.append(CITY_HEADER, 'Kakariko Village');
		event.request.headers.append(COUNTRY_HEADER, 'JP');
	}
	const response = await resolve(event);
	return response;
};
