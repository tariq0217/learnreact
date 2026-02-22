import './App.css'
// import React from 'react';
import {Fragment} from 'react';

// function user() {
//   return "Tariq" , 45 , true
// }

// console.log(user());

let author = "Tariq"
let islogged = true;

function App() {

  return (
    //fragment - <> </>
    // <React.Fragment> 
    <Fragment key={1}> 

      <h1 style={{backgroundColor: "red", color: "white"}}> REACT JSX</h1>
      <label htmlFor="user">username:</label>
      <input id='user' type="text" />
      <p>{ author }</p>
      {
        islogged && <p>Welcome to Our Website</p>
      }
      {/* <button onClick={}></button> */}

    {/* </React.Fragment> */}
    </Fragment>
    
  )
}

export default App
