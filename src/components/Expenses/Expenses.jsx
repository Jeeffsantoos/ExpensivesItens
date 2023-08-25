import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from './ExpenseFilter/ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
    const { expenses } = props
    const [chosenDataFilter, setChosenDataFilter] = useState(null)

    const handleFilterChange = (selectedYear) => {
        setChosenDataFilter(selectedYear)
    }

    console.log(expenses)

    const filteredData = expenses.filter(expense => {
        if (chosenDataFilter == null) {
            return expenses
        } else {
            return expense.date.getFullYear().toString() == chosenDataFilter
        }
    })

    return (
            <Card className='expenses'>
                <ExpensesFilter
                    onFilterChange={handleFilterChange}
                    expensesYear={expenses}
                    selectedYear={chosenDataFilter}
                />
                <ExpensesChart expenses={filteredData} />
                <ExpenseList items={filteredData} />
            </Card>
    )
}

export default Expenses