import type { I_HCB_Organization } from './organization';
import type { I_HCB_Transaction } from './transaction';

export interface I_HCB_Transfer {
	/**
	 * Transfer interface
	 */
	id: string;
	object: string;
	href: string;
	memo: string;
	transaction: I_HCB_Transaction;
	organization: I_HCB_Organization;
	amount_cents: string;
	date: string;
	status: 'fufilled' | 'processing' | 'rejected' | 'canceled' | 'errored' | 'under_review' | 'pending';
}
