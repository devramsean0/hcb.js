import type { I_HCB_ACHTransfer } from '../api_schemas';
import { fetchWrapper } from '../lib/fetch';
import { queryFormer } from '../lib/queryFormer';

/**
 * This class contains all the card charge related endpoints
 */
export class HCB_ACHTransfer {
	public async allOrgACHTransfers(data: {
		id: string;
		expand?: string;
		offset?: number;
		page?: number;
		per_page?: number;
	}): Promise<I_HCB_ACHTransfer[]> {
		/**
		 * Get all ACH transfers for a single organization
		 * @returns {Promise<I_HCB_ACHTransfer[]>} ACH transfer objects
		 * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
		 * @async
		 */
		let url = `organizations/${data.id}/ach_transfers`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_ACHTransfer[]>(url);
		return res;
	}
	public async singleACHTransfer(data: { id: string; expand?: string }): Promise<I_HCB_ACHTransfer> {
		/**
		 * Get a single ACH transfer by ID
		 * @returns {Promise<I_HCB_ACHTransfer>} ACH transfer object
		 * @param data {object} Object containing the ID of the ACH transfer to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `ach_transfers/${data.id}`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_ACHTransfer>(url);
		return res;
	}
}
