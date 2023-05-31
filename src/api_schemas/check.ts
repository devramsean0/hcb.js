export interface HCB_Check {
    id: string;
    object: string;
    href: string;
    memo: string;
    amount_cents: number;
    date: string;
    status: "scheduled" | "in_transit" | "in_transit_and_processed" | "deposited" | "cancelled" | "voided" | "refunded";
}