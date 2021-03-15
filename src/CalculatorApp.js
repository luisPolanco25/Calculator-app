import React, { useState } from 'react';
import { valuesMap } from './helpers/valuesMap';


export const CalculatorApp = () => {
    
    const [value, setValue] = useState('0');
    const [valueEvaluate, setValueEvaluate] = useState(true);
    const [valueDisplay, setValueDisplay] = useState(''); 

    // handleAdd
    const handleAdd = ({target}) => {
        const buttonValue = target.textContent;
        setValueEvaluate(() => true);
        setValue(() => valuesMap(`${value.replace(/^0|^[*]|^[/]/, '')}${buttonValue}`));
    };

    // handleClear
    const handleClear = () => {
        setValue('0');
        setValueEvaluate(() => true);
    };

    // handleEquals
    const handleEquals = () => {
        if (value === '0' || value === '*' || value === '/') {
            setValue('0');
            setValueDisplay('0');
        } else {
            setValue(`${eval(value)}`);
            setValueDisplay(`${eval(value)}`);
            setValueEvaluate(() => false);
            setValue('');
        }
    };

    return (
        <div className="calculator">
            <span>{value}</span>
            <p>{(valueEvaluate) ? value[value.length - 1] : valueDisplay}</p>
        
            <button onClick={handleAdd} id="zero">0</button>  
            <button onClick={handleAdd} id="one">1</button>  
            <button onClick={handleAdd} id="two">2</button>  
            <button onClick={handleAdd} id="three">3</button>  
            <button onClick={handleAdd} id="four">4</button>  
            <button onClick={handleAdd} id="five">5</button>  
            <button onClick={handleAdd} id="six">6</button>  
            <button onClick={handleAdd} id="seven">7</button>  
            <button onClick={handleAdd} id="eigth">8</button>  
            <button onClick={handleAdd} id="nine">9</button>

            <button onClick={handleEquals} id="equal">=</button>   
            <button onClick={handleAdd} id="point">.</button>  
            <button onClick={handleClear} id="ac">AC</button>  
            <button onClick={handleAdd} id="plus">+</button>  
            <button onClick={handleAdd} id="sub">-</button>  
            <button onClick={handleAdd} id="multiplication">*</button>  
            <button onClick={handleAdd} id="division">/</button>  
            <p id="coded">Design and code made by</p>
            <p id="me">&copy;Luis Polanco</p>
        </div>
    )
}
