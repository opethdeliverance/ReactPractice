import './App.css';
import React from "react";

function SecretComponent(){
    return(
        <h1>Secret info hmm</h1>
    )
    
}

function RegularComponent(){
    return(
        <h1>Public info</h1>
    )
}

function App2(props) {
    return(
        <>
        
        {props.authorized ? <SecretComponent/> : <RegularComponent/>}
        </>
    )

    
  }
  
  export default App2;