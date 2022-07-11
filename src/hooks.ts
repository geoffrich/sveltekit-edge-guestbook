import dotenv from 'dotenv';
import type { Handle } from '@sveltejs/kit';
import { COUNTRY_HEADER, CITY_HEADER } from '$lib/constants';

dotenv.config();

export const handle: Handle = async function ({ event, resolve }) {
	if (import.meta.env.DEV) {
		event.request.headers.append(CITY_HEADER, 'Seattle');
		event.request.headers.append(COUNTRY_HEADER, 'US');
	}
	const response = await resolve(event);
	return response;
};
