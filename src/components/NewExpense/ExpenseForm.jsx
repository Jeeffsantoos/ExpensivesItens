import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [title, setTitle] = useState('')
    // const [amount, setAmout] = useState('')
    // const [date, setDate] = useState('')

    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: new Date('2019-01-01'),
    })




    const titleChangeHandler = (e) => {
        // setTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     title: e.target.value
        // })
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: e.target.value
            }
        })
    }

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: Number(e.target.value)
            }
        })
    }

    const dateChangeHandler = (e) => {
        const selectedDate = new Date(e.target.value);        

        setUserInput((prevState) => ({
            ...prevState,
            date: selectedDate
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSaveData(userInput)

        setUserInput({
            title: '',
            amount: 0,
            date: new Date('')
        })

        props.isEdditing()
    }

        return (
            <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' value={userInput.amount} onChange={amountChangeHandler} step='0.01' />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={userInput.date.getFullYear().toString() +
                        "-" +
                        (userInput.date.getMonth() + 1).toString().padStart(2, 0) +
                        "-" +
                        userInput.date.getDate().toString().padStart(2, 0)}
                        onChange={dateChangeHandler} max='2025-01-01' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.isEdditing}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        )
    


}

export default ExpenseForm