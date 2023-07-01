import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_Check } from '../src/api_endpoints/checks';

describe('HCB_Check', () => {
    let check: HCB_Check;
    beforeEach(() => {
      check = new HCB_Check();
    });

    describe('allOrgCheck', () => {
        it('hq Check object check', async () => {
            const result = await check.allOrgChecks({id: 'hq', per_page: 2});
            expect(result).toBeDefined();
            result.forEach((transaction: any) => {
                expect(transaction.object).toEqual('check');
            });
        })
    });
    describe('singleCheck', async () => {
        it('chk_qJ7u2V EQUALS chk_qJ7u2V', async () => {
            const data = { id: 'chk_qJ7u2V' };
            const result = await check.singleCheck(data);
            expect(result).toBeDefined();
            expect(result.id).toEqual('chk_qJ7u2V');
            expect(result.object).toEqual('check');
        });
    });

})