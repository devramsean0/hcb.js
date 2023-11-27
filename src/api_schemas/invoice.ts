import type { I_HCB_Organization } from './organization';
import type { I_HCB_Transaction } from './transaction';

export interface I_HCB_Invoice {
	/**
	 * Invoice interface
	 */
	id: string;
	object: string;
	href: string;
	memo: string;
	transaction: I_HCB_Transaction;
	organization: I_HCB_Organization;
	amount_cents: string;
	sponsor: {
		id: string;
		name: string;
	};
	date: string;
	status: 'open' | 'paid' | 'void';
}
