import React,{useState} from 'react';
import './Button.css';

const Button =() =>{
    const [isOn, setIsOn] = useState(false);
    const handleClick=()=> {
        setIsOn(!isOn);

    };
    return(
        <React.Fragment>
            <button className={isOn ?'on':'off'} onClick={handleClick}>
                {isOn ? 'ON':'OFF'}
            </button>
        </React.Fragment>
    );
};
export default Button;

