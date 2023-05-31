import type { HCB_Organization } from "./organization";
import type { HCB_User } from "./user";

export interface HCB_Card {
    id: string;
    object: string;
    href: string;
    name: string;
    type: "virtual" | "physical";
    status: "active" | "frozen" | "canceled";
    issued_at: string;
    owner: HCB_User;
    organization: HCB_Organization;
}