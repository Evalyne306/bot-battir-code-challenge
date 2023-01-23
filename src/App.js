import React from "react";
import FetchBots from "./FetchBots";


function App(){
  
 
 
 
 return (
   <div className="transactions-container">
     <header className="bankHeader">
       <p>BOT BATTIR</p>
     </header>
     {(
       <>
    
        
         <FetchBots />
 
 {/* < allItemsArray={transactions} deleteArrayItem={deleteArrayItem} search={search}/> */}
 {/* <AddTransactionForm /> */}
       
     
       </>
     )}
   </div>
 );
 }   
 



export default App