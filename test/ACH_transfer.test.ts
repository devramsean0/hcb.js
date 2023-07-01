import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_ACHTransfer } from '../src/api_endpoints/ACH_transfer';

describe('HCB_ACHTransfer', () => {
	let ach_transfer: HCB_ACHTransfer;
	beforeEach(() => {
		ach_transfer = new HCB_ACHTransfer();
	});

	describe('allACHTransfer', () => {
		it('hq Check object check', async () => {
			const result = await ach_transfer.allOrgACHTransfers({
				id: 'hq',
				per_page: 2
			});
			expect(result).toBeDefined();
			result.forEach((transaction: any) => {
				expect(transaction.object).toEqual('ach_transfer');
			});
		});
	});
	describe('singleACHTransfer', async () => {
		it('ach_xw5hJz EQUALS ach_xw5hJz', async () => {
			const data = { id: 'ach_xw5hJz' };
			const result = await ach_transfer.singleACHTransfer(data);
			expect(result).toBeDefined();
			expect(result.id).toEqual('ach_xw5hJz');
			expect(result.object).toEqual('ach_transfer');
		});
	});
});
