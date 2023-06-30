import type { I_HCB_Card } from "./card";
import type { I_HCB_Organization } from "./organization";
import type { I_HCB_Transaction } from "./transaction";
import type { I_HCB_User } from "./user";

export interface I_HCB_CardCharge {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: I_HCB_Transaction;
    organization: I_HCB_Organization;
    amount_cents: number;
    date: string;
    card: I_HCB_Card;
    user: I_HCB_User;
}