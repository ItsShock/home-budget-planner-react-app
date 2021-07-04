import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, incomes } = useContext(AppContext);

    const totalBudget = () => {
        return (expenses.cost - incomes.cost)
    }
    return (
        <div className="border border-secondary border border-2 rounded">
            <span className='ms-3'>You can spend: {totalBudget}$</span>
        </div>
    )
}

export default Budget;