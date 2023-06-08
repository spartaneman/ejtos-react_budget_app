import React, {useContext} from 'react';

import{AppContext} from '../context/AppContext';

const Currency= () =>{

    const {currency, dispatch} = useContext(AppContext);

    const optionStyle = {
        backgroundColor: ' #5ee764',
        padding: '20px',
    }

    const currencyChangeHandler=(event)=>{
        console.log(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }
    
    return(
        <div  >
            <select style={optionStyle} onChange={currencyChangeHandler} value={currency} > 
                <option value="$" name="dollar" style={optionStyle}>Currency ($ Dollar)</option>
                <option value="£" name="pound" style={optionStyle}>Currency (£ Pound)</option>
                <option value="€" name="euro" style={optionStyle}>Currency (€Euro)</option>
                <option value="╣" name="ruppee" style={optionStyle}>Currency (╣Ruppee)</option>
            </select>
        </div>
    );
};

export default Currency;