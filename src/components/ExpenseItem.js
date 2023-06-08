import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {TiDelete} from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);


    //this is the action that will be dispatched to 
    //the reducer
    const handleDeleteExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation =(name)=>{
        //expense object
        const expense = {
            name: name,
            cost: 10,
        };

        //add expense action
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return(
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={event=> increaseAllocation(props.name)}>+</button> </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;