import type { I_HCB_CardCharge } from '../api_schemas';
import { fetchWrapper } from '../lib/fetch';
import { queryFormer } from '../lib/queryFormer';
/**
 * @class HCB_CardCharge
 * @description This class contains all the card charge related endpoints
 */
export class HCB_CardCharge {
	public async allOrgCardCharges(data: {
		id: string;
		expand?: string;
		offset?: number;
		page?: number;
		per_page?: number;
	}): Promise<I_HCB_CardCharge[]> {
		/**
		 * Get all card charges for a single organization
		 * @returns {Promise<I_HCB_CardCharge[]>} CardCharge objects
		 * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
		 * @async
		 */
		let url = `organizations/${data.id}/card_charges`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_CardCharge[]>(url);
		return res;
	}
	public async singleCardCharge(data: { id: string; expand?: string }): Promise<I_HCB_CardCharge> {
		/**
		 * Get a single card charge by ID
		 * @returns {Promise<I_HCB_CardCharge>} CardCharge object
		 * @param data {object} Object containing the ID of the card charge to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `card_charges/${data.id}`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_CardCharge>(url);
		return res;
	}
}
