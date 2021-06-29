import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [nameExpense, setNameExpense] = useState('');
    const [costExpense, setCostExpense] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: nameExpense,
            cost: parseInt(costExpense),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
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
                    id='nameExpense'
                    onChange={(e) => setNameExpense(e.target.value)}>
                </input>
            </div>
            <div>
                <label for='costExpense'>Cost</label>
                <input
                    required='required'
                    type='number'
                    className='form-control'
                    id='costExpense'
                    value={costExpense}
                    onChange={(e) => setCostExpense(e.target.value)}>
                </input>
            </div>
            <div className=''>
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </form>
    )
};

export default AddExpenseForm;