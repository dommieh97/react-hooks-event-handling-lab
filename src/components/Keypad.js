// 1.In the components/Keypad.js file, create a Keypad React component.
// 2.In that component, render an input with the right type.
// 3.On that input, add an event handler that listens for the change event.
// 4.When that event fires, use console.log to print out the text 'Entering password...'.

// Code Keypad Component Here
import React from 'react';
function Keypad ()
{
     const  handlePassword = (event) => 
     {
         console.log("Entering password...")
     };

    return(
    
    <>
    <form onChange={handlePassword}>
     <input type="password" />
     </form>  
     </>
    
     
    )
}

export default Keypad;