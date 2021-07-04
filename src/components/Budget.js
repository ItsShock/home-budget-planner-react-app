import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, incomes } = useContext(AppContext);

    const totalBudget = () => {
        return (expenses.cost - incomes.cost)
    }
    return (
        <div className="border border-secondary border border-2 rounded">
            <span className='ms-3'>You can spend: {budget - totalBudget}$</span>
        </div>
    )
}

export default Budget;