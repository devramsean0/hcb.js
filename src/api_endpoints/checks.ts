import type { I_HCB_Check } from '../api_schemas';
import { fetchWrapper } from '../lib/fetch';
import { queryFormer } from '../lib/queryFormer';

/**
 * @class HCB_Check
 * @description This class contains all the check related endpoints
 */
export class HCB_Check {
	public async allOrgChecks(data: { id: string; expand?: string; offset?: number; page?: number; per_page?: number }): Promise<I_HCB_Check[]> {
		/**
		 * @description Get all checks for a single organization
		 * @returns {Promise<I_HCB_Check[]>} Check objects
		 * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
		 * @async
		 */
		let url = `organizations/${data.id}/checks`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Check[]>(url);
		return res;
	}
	public async singleCheck(data: { id: string; expand?: string }): Promise<I_HCB_Check> {
		/**
		 * @description Get a single check by ID
		 * @returns {Promise<I_HCB_Check>} Check object
		 * @param data {object} Object containing the ID of the check to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `checks/${data.id}`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Check>(url);
		return res;
	}
}
