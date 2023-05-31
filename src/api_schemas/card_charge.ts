import type { HCB_Card } from "./card";
import type { HCB_Organization } from "./organization";
import type { HCB_Transaction } from "./transaction";
import type { HCB_User } from "./user";

export interface HCB_CardCharge {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Organization;
    amount_cents: number;
    date: string;
    card: HCB_Card;
    user: HCB_User;
}