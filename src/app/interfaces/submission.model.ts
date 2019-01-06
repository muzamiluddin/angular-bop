import { NEW_ADDRESS, Address } from './address.model';

// TODO: To be strongly type casted
export interface Submission {
    quoteID: string;
    coverables: any;
    coverages: any;
    preQualQuestionSets: any;
    periodStartDate: any;
    periodEndDate: any;
    policyAddress: Address;
    termType: any;
    productCode: string;
    productName: string;
    status: string;
}

export const NEW_SUBMISSION: Submission = {
    quoteID: '',
    coverables: '',
    coverages: {},
    preQualQuestionSets: {},
    periodStartDate: {},
    periodEndDate: {},
    policyAddress: NEW_ADDRESS,
    termType: '',
    productCode: '',
    productName: '',
    status: ''

};
