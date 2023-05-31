import type { HCB_Organization } from "./organization";
import type { HCB_Transaction } from "./transaction";

export interface HCB_Donation {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Organization;
    amount_cents: number;
    donor: {
        name: string;
    };
    date: string;
    status: "pending" | "in_transit" | "deposited" | "failed" | "refunded"
}