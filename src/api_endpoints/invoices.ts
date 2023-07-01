import type { I_HCB_Invoice } from '../api_schemas';
import { fetchWrapper } from '../lib/fetch';
import { queryFormer } from '../lib/queryFormer';

/**
 * @class HCB_Donation
 * @description This class contains all the donation related endpoints
 */
export class HCB_Invoice {
	public async allOrgInvoices(data: { id: string; expand?: string; offset?: number; page?: number; per_page?: number }): Promise<I_HCB_Invoice[]> {
		/**
		 * Get all invoices for a single organization
		 * @returns {Promise<I_HCB_Invoice[]>} Invoice objects
		 * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
		 * @async
		 */
		let url = `organizations/${data.id}/invoices`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Invoice[]>(url);
		return res;
	}
	public async singleInvoice(data: { id: string; expand?: string }): Promise<I_HCB_Invoice> {
		/**
		 * Get a single invoice by ID
		 * @returns {Promise<I_HCB_Invoice>} Invoice object
		 * @param data {object} Object containing the ID of the invoice to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
		 * @async
		 */
		let url = `invoices/${data.id}`;
		url += await queryFormer(data);
		const res = await fetchWrapper<I_HCB_Invoice>(url);
		return res;
	}
}
