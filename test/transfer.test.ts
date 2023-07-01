import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_Transfer } from '../src/api_endpoints/transfer';

describe('HCB_Transfer', () => {
    let transfer: HCB_Transfer
    beforeEach(() => {
        transfer = new HCB_Transfer()
    });

    describe('allOrgTransfers', () => {
        it('hq Transfers object check', async () => {
            const result = await transfer.allOrgTransfers({id: 'hq', per_page: 2});
            expect(result).toBeDefined();
            result.forEach((transaction: any) => {
                expect(transaction.object).toEqual('transfer');
            });
        })
    });
    describe('singleDonation', () => {
        it('xfr_kV1snd EQUALS xfr_kV1snd', async () => {
            const data = { id: 'xfr_kV1snd' };
            const result = await transfer.singleTransfer(data);
            expect(result).toBeDefined();
            expect(result.id).toEqual('xfr_kV1snd');
            expect(result.object).toEqual('transfer');
        });
    });
});