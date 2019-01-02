import { SelectOption } from "../interfaces/select-option.model";


export class Metadata {
    organizationList: SelectOption[] = [
        { value: 'individual', viewValue: 'Individual/Sole Proprietorship' },
        { value: 'partnership', viewValue: 'Partnership' },
        { value: 'corporation', viewValue: 'Corporation' }
    ];

    industryList: SelectOption[] = [
        { value: '5812', viewValue: 'Full Service Restaurants' },
        { value: '2451', viewValue: 'Mobile Homes' },
        { value: '2491', viewValue: 'Wood Preserving' }
    ];

    stateList: SelectOption[] = [
        { value: 'IA', viewValue: 'IA' },
        { value: 'OH', viewValue: 'OH' },
        { value: 'IL', viewValue: 'IL' },
        { value: 'CA', viewValue: 'CA' },
        { value: 'TX', viewValue: 'TX' }
    ];

}
