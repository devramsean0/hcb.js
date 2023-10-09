import { fetch } from '@sapphire/fetch';
export async function fetchWrapper<T>(url: string) {
	/**
	 * Adds the bank api endpoint to the URL and fetches the response
	 * @returns {Promise<T>} JSON response
	 * @param url {string} URL to fetch
	 * @async
	 */
	const res = await fetch<T>(`https://hcb.hackclub.com/api/v3/${url}`);
	return res;
}
