import React, { useEffect, useState, useRef } from 'react';

function MyComponent(){
    
    const inputRef = useRef(null);

    useEffect(
        () => {
            window.alert("COMPONENT RENDERED!");
            console.log(inputRef)
        }
    )


    function handleClick(){
        inputRef.current.focus();
    }
        

    return(
        <>
        <div>
            <button onClick={handleClick}>
                click me!
            </button>
            <input ref={inputRef} />
        </div>
        </>
    )
}

export default MyComponent