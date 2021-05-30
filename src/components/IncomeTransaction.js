import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeTransaction = ({incomeTransactions}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className='transaction'>
            <span className='transaction-text'>{incomeTransactions.incomeText}</span>
            <span className='transaction-amount'>${incomeTransactions.incomeAmount}</span>
            <button 
                className='delete-btn'
                onClick={() => deleteTransaction(incomeTransactions.id)}   
            >
                <i className='fas fa-trash'></i>
            </button>
        </li>
    );
    
}

export default IncomeTransaction;