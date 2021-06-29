import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiPencil } from 'react-icons/ti';


const IncomesItem = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center mt-4 me-4'>
            {props.name}
            <div>
                <span className='badge bg-primary badge-pill me-4'>
                    ${props.cost}
                </span>
                <TiPencil className='me-2' size='1.5em'></TiPencil>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    )
};

export default IncomesItem;