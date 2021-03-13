// import the React and ReactDOM libraries
// ES2015 import statement
import React from 'react';
import ReactDOM from 'react-dom';

// CommonJS import statement
// const React = require('react')

// Create a React component

// using Function Key work
// const App = function() {
//     return <div>Hi There!</div>
// }

function getButtonText() {
    return 'Click on me!'
}

// using ES2015 Arrow function
const App = () => {
    // const buttonText = 'Click Me!';
    const buttonText = { text: 'Click Me!' };

    return ( 
        <div>
            {/* this 'htmlFor' allows for user to click on 'Enter name' and the input box will get highlighted */}
            <label className="label" htmlFor="name">Enter Name</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {/* {buttonText} */}
                {buttonText.text}
                {/* {getButtonText()} */}
            </button>
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    // picks the ID from public/index.html
    document.querySelector('#root')
)