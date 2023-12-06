import type { I_HCB_Donation } from '../api_schemas';
import { fetchWrapper } from '../lib/fetch';
import { queryFormer } from '../lib/queryFormer';

/**
 * This class contains all the donation related endpoints
 */
export class HCB_Donation {
	public async allOrgDonations(data: {
		id: string;
		expand?: string;
		offset?: number;
		page?: number;
		per_page?: number;
	}): Promise<I_HCB_Donation[]> {
		/**
		 * Get all donations for a single organization
		 * @returns {Promise<I_HCB_Donation[]>} Donation objects
		 * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
		 * @async
		 */
		let url = `organizations/${data.id}/donations`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Donation[]>(url);
		return res;
	}
	public async singleDonation(data: { id: string; expand?: string }): Promise<I_HCB_Donation> {
		/**
		 * Get a single donation by ID
		 * @returns {Promise<I_HCB_Donation>} Donation object
		 * @param data {object} Object containing the ID of the donation to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `donations/${data.id}`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Donation>(url);
		return res;
	}
}
