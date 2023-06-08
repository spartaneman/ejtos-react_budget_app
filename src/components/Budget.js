
//useContext is a hook that lets you access the context in 
//a functional component
import React, { useContext} from 'react';
//AppContext is a React Context, which provides a way to pass
//data through the component tree without having to pass props down manually at every level
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const{ budget } = useContext(AppContext);
    return (
        //to make the £ you hold down the alt key and type 0163
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );

};

export default Budget;
