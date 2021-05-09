import React from 'react';

const Button = (props) => {
    const handleClick = () => {
        console.log(props.text);
    };

    return (
        <div className="text-center">
            <button type="button" className="btn btn-outline-primary" onClick={handleClick}>{props.text}</button>

        </div>
    )
};

export default Button;



