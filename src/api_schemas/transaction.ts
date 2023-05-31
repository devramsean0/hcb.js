import type { HCB_ACHTransfer } from "./ACH_transfer";
import type { HCB_CardCharge } from "./card_charge";
import type { HCB_Check } from "./check";
import type { HCB_Donation } from "./donation";
import type { HCB_Invoice } from "./invoice";
import type { HCB_Organization } from "./organization";
import type { HCB_Tag } from "./tag";
import type { HCB_Transfer } from "./transfer";

export interface HCB_Transaction {
    id: string;
    object: string;
    href: string;
    amount_cents: number;
    memo: string;
    date: string;
    type: "invoice" | "donation" | "ach_transfer" | "check" | "transfer" | "bank_account_transaction" | "card_charge",
    pending: boolean;
    receipts: {
        count: number;
        missing: boolean;
    };
    comments: {
        count: number;
    }
    organization: HCB_Organization;
    tags: HCB_Tag[];
    card_charge?: HCB_CardCharge;
    ach_transfer?: HCB_ACHTransfer;
    check?: HCB_Check;
    donation?: HCB_Donation;
    invoice?: HCB_Invoice;
    transfer: HCB_Transfer;
}
