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

        }
        case TYPES.DELETE_EMPLOYER_FROM_LIST:{

        }
        case TYPES.DELETE_ALL_FROM_LIST:{

        }
        case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_LIST:{

        }
        default:
            return state;
    }

    throw Error("Unknown action: " + action.type)
}