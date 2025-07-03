import { createContext, useContext, useReducer } from 'react';

const AddresserContext = createContext(null);


const initialAddressers = {
    you: {
        ageRange: 2,
        gender: 'male'
    },
    them: {
        ageRange: 3, 
        gender: 'male'
    }
};