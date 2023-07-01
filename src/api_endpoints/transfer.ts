import type { I_HCB_Transfer } from "../api_schemas";
import { fetchWrapper } from "../lib/fetch";
import { queryFormer } from "../lib/queryFormer";

/**
    * @class HCB_Transfer
    * @description This class contains all the transaction related endpoints
*/
export class HCB_Transfer {
    public async allOrgTransfers(data: { id: string, expand?: string, offset?: number, page?: number, per_page?: number }): Promise<I_HCB_Transfer[]> {
        /**
         * Get all transfers for a single organization
         * @returns {Promise<I_HCB_Transfer[]>} Transfer objects
         * @param data {object} Object containing the ID or slug of the organization to fetch and all other optional parameters
         * @async
         */
        let url = `organizations/${data.id}/transfers`
        url += await queryFormer(data)
        const res = await fetchWrapper<I_HCB_Transfer[]>(url);
        return res;
    }
    public async singleTransfer(data: { id: string, expand?: string }): Promise<I_HCB_Transfer> {
        /**
         * Get a single transfer by ID
         * @returns {Promise<I_HCB_Transfer>} Transfer object
         * @param data {object} Object containing the ID of the transfer to fetch and an optional expand parameter to expand objects (should be a string seperated by commas)
         * @async
         */
        let url = `transfers/${data.id}`
        url += await queryFormer(data)
        const res = await fetchWrapper<I_HCB_Transfer>(url);
        return res;
    }
}