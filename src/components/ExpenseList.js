import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import  { AppContext } from '../context/AppContext';

const ExpeneseList = () => {
    
    const { expenses } = useContext(AppContext);


    return (
        <ul>
            {expenses.map((expense) => (
            < ExpenseItem key={expense}
                id={expense.id}
                name={expense.name}
                cost={expense.cost} />
            ))}
        </ul>
    )
};

export default ExpeneseList;