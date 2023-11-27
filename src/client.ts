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
/**
 * This class contains properties for all other parts of the transparency API
 */

export class HCB {
	/** Module for handling organization-related operations. */
	public organization = new HCB_Organization();

	/** Module for handling transaction-related operations. */
	public transaction = new HCB_Transaction();

	/** Module for handling card charge-related operations. */
	public cardCharge = new HCB_CardCharge();

	/** Module for handling donation-related operations. */
	public donation = new HCB_Donation();

	/** Module for handling invoice-related operations. */
	public invoice = new HCB_Invoice();

	/** Module for handling check-related operations. */
	public check = new HCB_Check();

	/** Module for handling ACH transfer-related operations. */
	public ACHTransfer = new HCB_ACHTransfer();

	/** Module for handling regular transfer-related operations. */
	public transfer = new HCB_Transfer();

	/** Module for handling card-related operations. */
	public card = new HCB_Card();
}
