import { Redis } from '@upstash/redis';
import type { Visit } from './types';

const set_name = 'visitors';

export async function get_visitors(): Promise<Visit[]> {
	const redis = Redis.fromEnv();
	const visitors = await redis.zrange<string[]>(set_name, 0, -1, { withScores: true });
	const adapted: Visit[] = [];
	for (let i = 0; i < visitors.length; i += 2) {
		const member = visitors[i];
		const score = visitors[i + 1];
		adapted.push({ city: decodeURIComponent(member), count: score });
	}

	return adapted;
}

export async function add_visitor(city: string) {
	const redis = Redis.fromEnv();
	await redis.zincrby(set_name, 1, city);
}
