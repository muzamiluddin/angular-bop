import { Address } from './address.model';

export interface Account {
    accountNumber: string;
    name: string;
    address: Address;
    email: string;
    phone: string;
    fein: string;
    organizationType: string;
    industryCode: string;
    displayName: string;
    subtype: string;
    publicID: string;
}


export const NEW_ACCOUNT: Account = {
    name: '',
    address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: 'IA',
        postalCode: '',
        country: 'US',
        publicID: '',
        displayName: ''
    },
    email: '',
    phone: '',
    fein: '',
    organizationType: 'individual',
    industryCode: '5812',
    accountNumber: '',
    displayName: '',
    subtype: '',
    publicID: '',

};
