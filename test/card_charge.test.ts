import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_CardCharge } from '../src/api_endpoints/card_charge';

describe('HCB_CardCharge', () => {
	let card_charge: HCB_CardCharge;
	beforeEach(() => {
		card_charge = new HCB_CardCharge();
	});

	describe('allOrgCardCharges', () => {
		it('hack-the-thames CardCharges object check', async () => {
			const result = await card_charge.allOrgCardCharges({
				id: 'hack-the-thames',
				per_page: 2
			});
			expect(result).toBeDefined();
			result.forEach((transaction: any) => {
				expect(transaction.object).toEqual('card_charge');
			});
		});
	});
	describe('singleCardCharge', async () => {
		it('chg_YLHW64 EQUALS chg_YLHW64', async () => {
			const data = { id: 'chg_YLHW64' };
			const result = await card_charge.singleCardCharge(data);
			expect(result).toBeDefined();
			expect(result.id).toEqual('chg_YLHW64');
			expect(result.object).toEqual('card_charge');
		});
	});
});
