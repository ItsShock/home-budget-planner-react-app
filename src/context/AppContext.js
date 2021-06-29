import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'ADD_INCOME':
            return {
                ...state,
                incomes: [...state.incomes, action.payload],
            }
        default:
            return state;
    }
}

const initailState = {
    budget: 0,
    expenses: [
        // { id: 2, name: 'shopping', cost: 40 },
    ],
    incomes: [

    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initailState);
    
    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            incomes: state.incomes,
            dispatch,
        }}
    >
        {props.children}
    </AppContext.Provider>)
}