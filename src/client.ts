import {
	HCB_Invoice,
	HCB_Check,
	HCB_ACHTransfer,
	HCB_Transfer,
	HCB_Card,
	HCB_CardCharge,
	HCB_Donation,
	HCB_Organization,
	HCB_Transaction
} from './api_endpoints';

export class HCB {
	/**
	 * @class HCB
	 * @description This class contains the client for the HCB API
	 */
	public organization = new HCB_Organization();
	public transaction = new HCB_Transaction();
	public cardCharge = new HCB_CardCharge();
	public donation = new HCB_Donation();
	public invoice = new HCB_Invoice();
	public check = new HCB_Check();
	public ACHTransfer = new HCB_ACHTransfer();
	public transfer = new HCB_Transfer();
	public card = new HCB_Card();
}
