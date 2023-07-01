import { beforeEach, expect, describe, it } from 'vitest';
import { HCB_Organization } from '../src/api_endpoints/organization';

describe('HCB_Organization', () => {
  let organization: HCB_Organization;
  beforeEach(() => {
    organization = new HCB_Organization();
  });

  describe('singleOrganization', () => {
    it('hq EQUALS org_a29uVj', async () => {
      const data = { id: 'hq' };
      const result = await organization.singleOrganization(data);
      expect(result).toBeDefined();
      expect(result.id).toEqual('org_a29uVj');
      expect(result.object).toEqual('organization');
    });
  });
  describe('allOrganizations', async () => {
    it('allOrganizations object check on first 2 items', async () => {
      const result = await organization.allOrganizations({per_page: 2});
      expect(result).toBeDefined();
      result.forEach((org: any) => {
        expect(org.object).toEqual('organization');
      });
    });
  });
});