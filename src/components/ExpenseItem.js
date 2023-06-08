import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {TiDelete} from 'react-icons/ti';
import {FcPlus} from 'react-icons/fc';
import {AiFillMinusCircle} from 'react-icons/ai';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);


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
    const decreaseAllocation =(name)=>{
        //expense object
        const expense = {
            name: name,
            cost: 10,
        };

        //add expense action
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return(
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FcPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}>+</FcPlus> </td>
            <td><AiFillMinusCircle size='1.5em' color='red' onClick={event=> decreaseAllocation(props.name)}>-</AiFillMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;