export function AccountReducer(state, action) {
    if (state == null || state === 'undefined') {
        state = {
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
        }
    } 
    console.log('********Received an event******');
    console.log("State: " + JSON.stringify(state));
    console.log('Paload: ' + action.payload);

    switch (action.type) {
        default:
            console.log('processing event');
            state.name = state.name + ' awesome';
            return state;
    } 
}
