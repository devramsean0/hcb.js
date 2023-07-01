import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_Card } from '../src/api_endpoints/card';

describe('HCB_Card', () => {
	let card: HCB_Card;
	beforeEach(() => {
		card = new HCB_Card();
	});

	describe('allOrgCards', () => {
		it('hq Check object check', async () => {
			const result = await card.allOrgCards({ id: 'hq', per_page: 2 });
			expect(result).toBeDefined();
			result.forEach((transaction: any) => {
				expect(transaction.object).toEqual('card');
			});
		});
	});
	describe('singleACHTransfer', async () => {
		it('crd_9ehe1j EQUALS crd_9ehe1j', async () => {
			const data = { id: 'crd_9ehe1j' };
			const result = await card.singleCard(data);
			expect(result).toBeDefined();
			expect(result.id).toEqual('crd_9ehe1j');
			expect(result.object).toEqual('card');
		});
	});
});
