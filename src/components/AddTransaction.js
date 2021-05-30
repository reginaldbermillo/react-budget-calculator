import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addIncome, addExpense } = useContext(GlobalContext);

    const [income, setIncome] = useState({
        incomeText: "",
        incomeAmount: 0
    });

    const onChangeIncome = (e) => {
        setIncome({...income, [e.target.name]: e.target.value });
    }
    const { incomeText, incomeAmount } = income;

    const onSubmitIncome = (e) => {
        e.preventDefault();
        if(incomeText !== ""){
            const newIncome = {
                id: uuidv4(),
                incomeText,
                incomeAmount: incomeAmount * 1
            }

            addIncome(newIncome);
            setIncome({
                incomeText: "",
                incomeAmount: 0
            })
        }
    }

    const [expense, setExpense] = useState({
        expenseText: "",
        expenseAmount: 0
    });

    const onChangeExpense = (e) => {
        setExpense({...expense, [e.target.name]: e.target.value});
    }

    const { expenseText, expenseAmount } = expense;
    const onSubmitExpense = (e) => {
        e.preventDefault();
        if(expenseText !== ""){
            const newExpense = {
                id: uuidv4(),
                expenseText,
                expenseAmount: expenseAmount * 1
            }

            addExpense(newExpense);
            setIncome({
                expenseText: "",
                expenseAmount: 0
            })
        }
    }

    return (
        <div className='form-wrapper'>
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input 
                        type='text'
                        value={incomeText}
                        name='incomeText' 
                        onChange={onChangeIncome}
                        placeholder='Add Income' 
                        autoComplete='off' />
                    <input 
                        type='number' 
                        value={incomeAmount}
                        name='incomeAmount'
                        onChange={onChangeIncome}
                        placeholder='Add Amount' 
                        autoComplete='off' />
                    <input 
                        type='submit'  
                        value='Submit' />
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input 
                        type='text' 
                        value={expenseText}
                        name='expenseText' 
                        onChange={onChangeExpense}
                        placeholder='Add Expense' 
                        autoComplete='off' 
                    />
                    <input 
                        type='number' 
                        value={expenseAmount}
                        name='expenseAmount' 
                        onChange={onChangeExpense}
                        placeholder='Add Amount' 
                        autoComplete='off' 
                    />
                    <input 
                        type='submit'  
                        value='Submit' 
                    />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction;