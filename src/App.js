import React from "react";
import FetchBots from "./FetchBots";


function App(){
  
   
   
 return (

   <div className="transactions-container">
     <header>
     <div className="bankHeader">
       <p>BOT BATTIR</p>
     </div>
     <div className="selected-bots">
     {/* <h1><b><i>Your Selected Bots:</i></b></h1> */}
     <div className="card1" id="Army"></div>
     </div>
     </header> 

  
     <> 

     <FetchBots />
       </>
     
   </div>
 );
 }   
 



export default App