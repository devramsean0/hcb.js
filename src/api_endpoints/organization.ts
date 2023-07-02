import type { I_HCB_Organization } from '../api_schemas';
import { fetchWrapper } from '../lib/fetch';
import { queryFormer } from '../lib/queryFormer';
/**
 * @class HCB_Organization
 * @description This class contains all the organization related endpoints
 */
export class HCB_Organization {
	public async singleOrganization(data: { id: string; expand?: string }): Promise<I_HCB_Organization> {
		/**
		 * @description Get a single organization by ID or slug
		 * @returns {Promise<I_HCB_Organization>} Organization object
		 * @param data {object} Object containing the ID or slug of the organization to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `organizations/${data.id}`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Organization>(url);
		return res;
	}
	public async allOrganizations(data: { expand?: string; offset?: number; page?: number; per_page?: number }): Promise<I_HCB_Organization[]> {
		/**
		 * @description Get all transparent organizations
		 * @returns {Promise<I_HCB_Organization[]>} Array of organization objects
		 * @param data {object} Object containing an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `organizations`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Organization[]>(url);
		return res;
	}
}
