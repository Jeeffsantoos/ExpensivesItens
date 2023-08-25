import React from "react"
import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = ({items}) => {

    if (items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">No expenses found.</h2>
        )
    }

    return (

        <ul className="expenses-list">
            {items.map((expense) => {
                return (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
                )
            })}
        </ul>
    )


}

export default ExpenseList