import type { I_HCB_Organization } from "./organization";
import type { I_HCB_Transaction } from "./transaction";

export interface I_HCB_Donation {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: I_HCB_Transaction;
    organization: I_HCB_Organization;
    amount_cents: number;
    donor: {
        name: string;
    };
    date: string;
    status: "pending" | "in_transit" | "deposited" | "failed" | "refunded"
}