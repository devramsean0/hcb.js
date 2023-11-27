export interface I_HCB_Check {
	/**
	 * Check interface
	 */
	id: string;
	object: string;
	href: string;
	memo: string;
	amount_cents: number;
	date: string;
	status: 'scheduled' | 'in_transit' | 'in_transit_and_processed' | 'deposited' | 'cancelled' | 'voided' | 'refunded';
}
