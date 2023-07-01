import type { I_HCB_Card } from '../api_schemas';
import { fetchWrapper } from '../lib/fetch';
import { queryFormer } from '../lib/queryFormer';

/**
 * @class HCB_ACH_Transfer
 * @description This class contains all the card charge related endpoints
 */
export class HCB_Card {
	public async allOrgCards(data: { id: string; expand?: string; offset?: number; page?: number; per_page?: number }): Promise<I_HCB_Card[]> {
		/**
		 * Get all cards for a single organization
		 * @returns {Promise<I_HCB_Card[]>} Card objects
		 * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
		 * @async
		 */
		let url = `organizations/${data.id}/cards`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Card[]>(url);
		return res;
	}
	public async singleCard(data: { id: string; expand?: string }): Promise<I_HCB_Card> {
		/**
		 * Get a single card by ID
		 * @returns {Promise<I_HCB_Card>} Card object
		 * @param data {object} Object containing the ID of the card to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `cards/${data.id}`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Card>(url);
		return res;
	}
}
