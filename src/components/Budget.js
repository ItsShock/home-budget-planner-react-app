import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, incomes } = useContext(AppContext);

    // const totalBudget = () => {
    //     console.log('expenses:', expenses[0], ' /incomes:', incomes[0]);

    //     return (expenses.cost - incomes.cost)
    // }
    
    const totalBudget = () => {
        const expensesSum = expenses.reduce((sum, item) => {
            return sum - item.cost;
        }, 0);
        const incomesSum = incomes.reduce((sum, item) => {
            return sum - item.cost;
        }, 0);
     
        return expensesSum - incomesSum;
    }

    return (
        <div className="border border-secondary border border-2 rounded">
            <span className='ms-3'>You can spend: {totalBudget()}$</span>
        </div>
    )
}

export default Budget;