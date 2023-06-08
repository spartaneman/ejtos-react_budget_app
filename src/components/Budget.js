
//useContext is a hook that lets you access the context in 
//a functional component
import React, { useContext} from 'react';
//AppContext is a React Context, which provides a way to pass
//data through the component tree without having to pass props down manually at every level
import {AppContext} from '../context/AppContext';




const Budget = () => {

    const{ budget, dispatch, expenses, currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item)=>{
        return (total = total + item.cost);
    },0)
    const budgetChangeHandler = (event) =>{
        console.log(event.target.value);
        console.log(totalExpenses);
        if( event.target.value > 20000){
            alert("Sorry Budget has A max value of 20,000")
            return;
        }

        if(event.target.value < totalExpenses){
            alert("Sorry the budget cannot be lower than the current total expenses");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(event.target.value, 10)
        });
        

    }
    return (
        //to make the £ you hold down the alt key and type 0163
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input id='budget' type='number' step={10} value={budget} onChange={budgetChangeHandler}>
                
            </input>
        </div>
    );

};

export default Budget;
