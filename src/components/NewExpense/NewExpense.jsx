import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [isAddingNewExpense, setIsAddingNewExpense] = useState(false)


    const handleClick = () => {
        setIsAddingNewExpense(!isAddingNewExpense)
    }

    const saveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }


        if (expenseData.date == "Invalid Date") return 

        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            {!isAddingNewExpense && <button onClick={handleClick}>Add New Expense</button>}
            {isAddingNewExpense && <ExpenseForm onSaveData={saveDataHandler} isEdditing={handleClick} />}
        </div>
    )
}

export default NewExpense