import type { I_HCB_Transaction } from "../api_schemas"
import { fetchWrapper } from "../lib/fetch"
import { queryFormer } from "../lib/queryFormer"
/**
    * @class HCB_Transaction
    * @description This class contains all the transaction related endpoints
*/
export class HCB_Transaction {
    public async allOrgTransactions(data: { id: string, expand?: string, offset?: number, page?: number, per_page?: number }): Promise<I_HCB_Transaction[]> {
        /**
         * Get all transactions for a single organization in a page of 100
         * @returns {Promise<I_HCB_Transaction[]>} Transaction objects
         * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
         * @async
         */
        let url = `organizations/${data.id}/transactions`
        url += await queryFormer(data)
        const res = await fetchWrapper<I_HCB_Transaction[]>(url);
        return res;
    }
    public async singleTransaction(data: { id: string, expand?: string }): Promise<I_HCB_Transaction> {
        /**
         * Get a single transaction by ID
         * @returns {Promise<I_HCB_Transaction>} Transaction object
         * @param data {object} Object containing the ID of the transaction to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
         * @async
         */
        let url = `transactions/${data.id}`
        url += await queryFormer(data)
        const res = await fetchWrapper<I_HCB_Transaction>(url);
        return res;
    }
}