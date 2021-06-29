import React, { useContext } from 'react';
import IncomesItem from './IncomesItem';
import { AppContext } from '../context/AppContext';

const IncomesList = () => {
    const { incomes } = useContext(AppContext);

    return (
        <ul>
            {incomes.map((income) => (
            < IncomesItem
                id={income.id}
                name={income.name}
                cost={income.cost} />
            ))}
        </ul>
    )
};

export default IncomesList;