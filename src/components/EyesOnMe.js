// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'

// Code EyesOnMe Component Here
function EyesOnMe ()
{
    const handleFocus = (event) => 
    {
        console.log('Good!')
    }
    const handleBlur = (event) =>
    {
        console.log('Hey! Eyes on me!')
    }
    return(
    
    <>
    <div onFocus={handleFocus} onBlur={handleBlur}>
     <button>Eyes on me</button>
     </div>  
     </>
    
     
    )
}

export default EyesOnMe;