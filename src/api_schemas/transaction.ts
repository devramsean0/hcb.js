import type { I_HCB_ACHTransfer } from './ACH_transfer';
import type { I_HCB_CardCharge } from './card_charge';
import type { I_HCB_Check } from './check';
import type { I_HCB_Donation } from './donation';
import type { I_HCB_Invoice } from './invoice';
import type { I_HCB_Organization } from './organization';
import type { I_HCB_Tag } from './tag';
import type { I_HCB_Transfer } from './transfer';

export interface I_HCB_Transaction {
	id: string;
	object: string;
	href: string;
	amount_cents: number;
	memo: string;
	date: string;
	type: 'invoice' | 'donation' | 'ach_transfer' | 'check' | 'transfer' | 'bank_account_transaction' | 'card_charge';
	pending: boolean;
	receipts: {
		count: number;
		missing: boolean;
	};
	comments: {
		count: number;
	};
	organization: I_HCB_Organization;
	tags: I_HCB_Tag[];
	card_charge?: I_HCB_CardCharge;
	ach_transfer?: I_HCB_ACHTransfer;
	check?: I_HCB_Check;
	donation?: I_HCB_Donation;
	invoice?: I_HCB_Invoice;
	transfer: I_HCB_Transfer;
}
