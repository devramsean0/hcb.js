import { HCB_Organization } from "./api_endpoints/organization";

export class HCB {
    /**
     * @class HCB
     * @description This class contains the client for the HCB API
     */
    public organization = new HCB_Organization();
}