import React, { useEffect, useState } from "react";
import "./App.css";
import BotDisplay from "./BotDisplay";
import axios from "axios";
import SearchRobot from "./RobotSearch";
function FetchBots() {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    axios("https://api.npoint.io/24bf227b88194231eb03/bots").then((res) => {
      setBots(res.data);

      // setRobotName(res.data.id);
    });
  }, []);
  console.log(bots)
  function Search(searchValue){
    let result=bots.filter((bot)=>{
    return bot.name.toLowerCase().includes(searchValue.toLowerCase())
    
    })
    setBots(result)
    }
  
      const deleteArrayItem = function(itemToBeRemoved){
        console.log(itemToBeRemoved)
        const tempTransactions = Object.assign([],bots)
        const findIndex = tempTransactions.findIndex(a => a.id === itemToBeRemoved.id)
    
    findIndex !== -1 && tempTransactions.splice(findIndex , 1)
    console.log("kdJSLKJFKJ",tempTransactions.length)
    setBots(tempTransactions)
    }
  return (
    <div>
      <SearchRobot search={Search}/>
      {bots.map((bot) => {
        return (
          <div  key={bot.id} >
            <BotDisplay
            
              name={bot.name}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              bot_class={bot.bot_class}
              // catchphrase={bot.catchphrase}
              image={bot.avatar_url}
              created_at={bot.created_at}
              updated_at={bot.updated_at}
              // deleteTransaction={()=>deleteArrayItem(bot)}
            />
          </div>
        );
      })}
    </div>
    
  );
}
export default FetchBots;
