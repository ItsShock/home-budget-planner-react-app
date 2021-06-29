import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddIncomesForm = () => {
    const { dispatch } = useContext(AppContext);
    const [nameIncome, setNameIncome] = useState('');
    const [costIncome, setCostIncome] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const incomes = {
            id: uuidv4(),
            name: nameIncome,
            cost: parseInt(costIncome),
        };

        dispatch({
            type: 'ADD_INCOME',
            payload: incomes,
        })
    }
    
    return (
        <form onSubmit={onSubmit} className='d-flex flex-row justify-content-around align-items-end'>
            <div>
                <label for='name'>Name</label>
                <input
                    required='required'
                    type='text'
                    className='form-control'
                    id='nameIncome'
                    onChange={(e) => setNameIncome(e.target.value)}
                    >
                </input>
            </div>
            <div>
                <label for='costIncome'>Cost</label>
                <input
                    required='required'
                    type='number'
                    className='form-control'
                    id='costIncome'
                    value={costIncome}
                    onChange={(e) => setCostIncome(e.target.value)}>
                </input>
            </div>
            <div className=''>
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </form>
    )
};

export default AddIncomesForm;