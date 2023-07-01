import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_Donation } from '../src/api_endpoints/donation';

describe('HCB_Donation', () => {
	let donation: HCB_Donation;
	beforeEach(() => {
		donation = new HCB_Donation();
	});

	describe('allOrgDonations', () => {
		it('hq Donations object check', async () => {
			const result = await donation.allOrgDonations({ id: 'hq', per_page: 2 });
			expect(result).toBeDefined();
			result.forEach((transaction: any) => {
				expect(transaction.object).toEqual('donation');
			});
		});
	});
	describe('singleDonation', () => {
		it('don_wZfRz6m EQUALS don_wZfRz6m', async () => {
			const data = { id: 'don_wZfRz6m' };
			const result = await donation.singleDonation(data);
			expect(result).toBeDefined();
			expect(result.id).toEqual('don_wZfRz6m');
			expect(result.object).toEqual('donation');
		});
	});
});
