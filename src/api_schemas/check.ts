export interface I_HCB_Check {
	/**
	 * @description Check interface
	 * @interface I_HCB_Check
	 */
	id: string;
	object: string;
	href: string;
	memo: string;
	amount_cents: number;
	date: string;
	status: 'scheduled' | 'in_transit' | 'in_transit_and_processed' | 'deposited' | 'cancelled' | 'voided' | 'refunded';
}
