import React, {useContext} from 'react';
import { AppContext} from '../context/AppContext';

const Remaining = ()=>{
    const {expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=> {
        //total is the running tally, while item is the item 
        //that the array is currently on. 
        //reduce(adds the value of an array into a scalar)
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger': 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
