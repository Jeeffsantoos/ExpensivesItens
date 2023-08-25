import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const handleChangeFilter = (e) => {
    props.onFilterChange(e.target.value == "" ? null : e.target.value)
  }
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleChangeFilter}>
        <option value={props.dataFilter}></option>
          {[...new Set(props.expensesYear.map(expense => expense.date.getFullYear()))].map((year, index) => {
            return (
              <option key={index} value={year}>{year}</option>
            )
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;