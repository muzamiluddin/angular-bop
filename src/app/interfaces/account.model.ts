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


export const NEW_ACCOUNT = {
            name: '',
            address: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: ''
            },
            email: '',
            phone: '',
            fein: '',
            organizationType: '',
            industryCode: ''
};
