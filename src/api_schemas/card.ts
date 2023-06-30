import type { I_HCB_Organization } from "./organization";
import type { I_HCB_User } from "./user";

export interface I_HCB_Card {
    id: string;
    object: string;
    href: string;
    name: string;
    type: "virtual" | "physical";
    status: "active" | "frozen" | "canceled";
    issued_at: string;
    owner: I_HCB_User;
    organization: I_HCB_Organization;
}