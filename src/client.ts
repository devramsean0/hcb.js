import { HCB_Organization } from "./api_endpoints/organization";
import { HCB_Transaction } from "./api_endpoints/transaction";

export class HCB {
    /**
     * @class HCB
     * @description This class contains the client for the HCB API
     */
    public organization = new HCB_Organization();
    public transaction = new HCB_Transaction();
}