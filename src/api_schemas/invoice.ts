import type { HCB_Organization } from "./organization";
import type { HCB_Transaction } from "./transaction";

export interface HCB_Invoice {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Organization;
    amount_cents: string;
    sponsor: {
        id: string;
        name: string; 
    };
    date: string;
    status: "open" | "paid" | "void"
}