import { useState , useEffect } from "react";

const App = () => {

  const [ showHeading , setShowHeading ] = useState(true);
  const [btnText , setBtnText] = useState("Hide Heading");

  const hideOrShowHeading = () => {
    setShowHeading( !showHeading );
  }

  useEffect( () => {
    console.log("useEffect-Hook: The showHeading state was changed....");
    if( showHeading )
    {
      setBtnText("Hide Heading");
    }
    else
    {
      setBtnText("Show Heading");
    }
  } , [showHeading] );


  // useEffect( () => {

  //   console.log("The showHeading state was changed...");

  // } , [showHeading] );



  useEffect( () => {

    console.log("useEffect-Hook: App component mounted...");

  } , [] );



  // useEffect( () => {

  //     console.log("The showHeading state was changed...");

  // } , [showHeading] );



  useEffect( () => {

    console.log("useEffect-Hook: The App component was rendered...");

  } )


  console.log("App component is rendered...");


  return (

    <div className="App">

      <div id="btnContainer">
        <button id="btn" onClick={ hideOrShowHeading }> {btnText} </button>
      </div>

      <div id="headingContainer">
        { showHeading == true ? <h2 id="heading"> This is the App component ! </h2> : <></> }
      </div>

    </div>

  )

};



export default App;