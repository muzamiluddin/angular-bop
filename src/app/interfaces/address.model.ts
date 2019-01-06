export interface Address {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
    publicID: string;
    displayName: string;
}

export const NEW_ADDRESS: Address = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    state: '',
    country: 'US',
    publicID: '',
    displayName: ''
};


