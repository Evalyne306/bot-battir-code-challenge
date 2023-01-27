import React, { useEffect, useState } from "react";
import "./App.css";
import BotDisplay from "./BotDisplay";
import axios from "axios";
import SearchRobot from "./RobotSearch";

function FetchBots() {
 //const[selected, setSelected]=useState([])
  const [bots, setBots] = useState([]);
  const[botState, setBotState]= useState([])
  useEffect(() => {
    axios("https://api.npoint.io/24bf227b88194231eb03/bots").then((res) => {
      setBots(res.data);

      // setRobotName(res.data.id);
    });
  }, []);

  function handleAdd(bot) {
    console.log("JWGFJKK",bot);
    const selectedBots = [...botState];
    selectedBots.push(bot);
    setBotState(selectedBots);
  }

  function Search(searchValue) {
    let result = bots.filter((bot) => {
      return bot.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setBots(result);
  }

  const deleteArrayItem = function (itemToBeRemoved) {
    console.log(itemToBeRemoved);
    const tempTransactions = Object.assign([], bots);
    const findIndex = tempTransactions.findIndex(
      (a) => a.id === itemToBeRemoved.id
    );

    findIndex !== -1 && tempTransactions.splice(findIndex, 1);
    console.log("kdJSLKJFKJ", tempTransactions.length);
    setBots(tempTransactions);
  };
  return (
    <div>
       
            <div className="transactions-container">
        
          <div className="bankHeader">
          
             <div>
             <h1 className="batir">BOT BATTIR</h1>
          
          <h1 className="botdiv">selected bot: </h1>
            </div>
          </div>
          <SearchRobot search={Search} />
          <div className="selected-bots">
            
            {/* <h1><b><i>Your Selected Bots:</i></b></h1> */}
            {botState.map((bot,index)=>(
            <div className="select"key={index} >
 <img className="card-img" src={bot.avatar_url}alt="" />
 <h2 className="card-title">Name: {bot.name}</h2><br></br>
    <div className="card-text">Health: {bot.health} %</div>
    <div className="card-text">Damage: {bot.damage} %</div> 
    <div className="card-text">armor: {bot.armor} %</div>
    <div className="card-text">Class: {bot.bot_class}</div>
    <div className="card-text">Update Last: {bot.updated_at}</div>
    <div className="card-text">Created When: {bot.created_at}</div>
            </div>
             ))}
          </div>
         
        
      </div>
     

      {bots.map((bot) => {
        return (
          <div key={bot.id}>
            <BotDisplay
              // handleAdd={handleAdd}
              name={bot.name}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              bot_class={bot.bot_class}
              // catchphrase={bot.catchphrase}
              image={bot.avatar_url}
              created_at={bot.created_at}
              updated_at={bot.updated_at}
              deleteRobot={() => deleteArrayItem(bot)}
           selectedBots={()=>handleAdd(bot)}
           />
          </div>
        );
      })}

    </div>
  );
}
export default FetchBots;
