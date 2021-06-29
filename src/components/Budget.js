import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className="border border-secondary border border-2 rounded">
            <span className='ms-3'>You can spend: {budget}$</span>
        </div>
    )
}

export default Budget;