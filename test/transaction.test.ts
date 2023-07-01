import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_Transaction } from '../src/api_endpoints/transaction';

describe('HCB_Organization', () => {
    let transaction: HCB_Transaction;
    beforeEach(() => {
      transaction = new HCB_Transaction();
    });

    describe('allOrgTransactions', () => {
        it('hq TRANSACTIONS object check', async () => {
            const result = await transaction.allOrgTransactions({id: 'hq'});
            expect(result).toBeDefined();
            result.forEach((transaction: any) => {
                expect(transaction.object).toEqual('transaction');
            });
        })
    })
    describe('singleTransaction', async () => {
        it('txn_OXHK7X EQUALS txn_OXHK7X', async () => {
            const data = { id: 'txn_OXHK7X' };
            const result = await transaction.singleTransaction(data);
            expect(result).toBeDefined();
            expect(result.id).toEqual('txn_OXHK7X');
            expect(result.object).toEqual('transaction');
          });
    })
})