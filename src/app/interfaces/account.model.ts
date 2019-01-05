import { Address } from './address.model';

export interface Account {
    name: string;
    address: Address;
    email: string;
    phone: string;
    fein: string;
    organizationType: string;
    industryCode: string;
}
