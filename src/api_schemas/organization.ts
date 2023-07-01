import type { I_HCB_User } from './user';

export interface I_HCB_Organization {
	id: string;
	object: string;
	href: string;
	name: string;
	slug: string;
	category: 'hackathon' | 'high_school_hackathon' | 'event' | 'hack_club' | 'nonprofit' | 'robotics_team' | 'hardware_grant' | 'hack_club_hq';
	transparent: boolean;
	demo_mode: boolean;
	logo: string;
	public_message: string;
	balances: {
		balance_cents: number;
		fee_balance_cents: number;
		incoming_balance_cents: number;
	};
	created_at: string;
	users: I_HCB_User[];
}
