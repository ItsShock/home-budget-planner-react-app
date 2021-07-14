import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiPencil } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }

    const handleEditExpense = () => {
        dispatch({
            type: 'EDIT_EXPENSE',
            payload: {
                id: props.id,
                expenseToEdit: {name: "sss", cost: 40},
            }
                    
        })
    }

    const EditName = () => {
        console.log(props.name)
    }

    const EditCost = () => {
        console.log(props.cost)
    }

    return (
        
        <li className='list-group-item d-flex justify-content-between align-items-center mt-4 me-4'>
            {props.name}
            <div>
                <span className='badge bg-primary badge-pill me-4'>
                    ${props.cost}
                </span>
                <TiPencil className='me-2' size='1.5em' onClick={handleEditExpense}></TiPencil>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
            <input type="text" onChange={EditName} value={props.name} />
            <input type="number" onChange={EditCost} value={props.cost} />
        
        </li>
        
        
        
    )
};

export default ExpenseItem;