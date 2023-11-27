export async function queryFormer(data: object) {
	/**
	 * Converts an object into a query string
	 * @returns {Promise<string>}
	 * @param data {object} Object to convert
	 * @async
	 * @hidden
	 * @internal
	 */
	let query = '';
	if (Object.keys(data).length == 0) return query;
	else query += '?';
	for (const [key, value] of Object.entries(data)) {
		if (typeof value != 'undefined') {
			query = `${query}${key}=${value}&`;
		}
	}
	return query;
}
