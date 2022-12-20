import TYPES from "./actionTypes";

export const employesInitialState = {
    employes:[
        {
            id: 1,
            name: 'Manager A',
            price: 300
        },
        {
            id: 2,
            name: 'Manager B',
            price: 300
        },
        {
            id: 3,
            name: 'Developer',
            price: 1000
        },
        {
            id: 4,
            name: 'QA Tester',
            price: 500
        }
    ],
    containerEmploye: [],
    totalPrice: 0
}

export const reducerEmployer = (state, action) => {
    switch(action.type){
        case TYPES.ADD_TO_LIST:{
        let newEmployer = state.employes.find((employer) => employer.id === action.payload)

        return {
            ...state,
            containerEmploye: [...state.containerEmploye, newEmployer]
        }

        }
        case TYPES.DELETE_EMPLOYER_FROM_LIST:{
            return {
                ...state,
                containerEmploye: state.containerEmploye.filter((employer) => employer.id !== action.payload)
            }
        }
        case TYPES.DELETE_ALL_FROM_LIST:{
            return employesInitialState;
        }
        case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_LIST:{
            return {
                ...state,
                totalPrice: state.containerEmploye.reduce( (previousValue, employer) => previousValue + employer.price, 0)
            }
        }
        default:
         return state;
    }

    throw Error("Unknown action: " + action.type)
}