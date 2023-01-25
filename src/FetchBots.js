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

  function handleAdd(name,id,health,damage,armor,bot_class,catchphrase,image,created_at,updated_at){
    let Army = document.getElementById('Army')
    let NewArmy = document.createElement('div')
      
    NewArmy.setAttribute("id", id)

    NewArmy.innerHTML = `
    <img className="card-img" src=${image}alt=${name} />
    <h2 className="card-title">Name: ${name}</h2><br></br>
    <p className="card-text">Health: ${health} %</p>
    <p className="card-text">Damage: ${damage} %</p> 
    <p className="card-text">armor: ${armor} %</p>
    <p className="card-text">Class: ${bot_class}</p>
    <p className="card-text">${catchphrase}</p>
    <p className="card-text">Update Last: ${updated_at}</p>
    <p className="card-text">Created When: ${created_at}</p>
    `

    Army.appendChild(NewArmy)
  }


  function Search(searchValue){
    let result=bots.filter((bot)=>{
    return bot.name.toLowerCase().includes(searchValue.toLowerCase())
    
    })
    setBots(result)
    }
    
  
  
 
  
    const handleClick = event => {
      // 👇️ refers to the image element
        console.log(event.target);
        
  //  return(
  //   <BotDisplay/>
  //  )
  //     // console.log('Image clicked');
      
   };

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
             handleAdd = {handleAdd}
              name={bot.name}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              bot_class={bot.bot_class}
              // catchphrase={bot.catchphrase}
              image={bot.avatar_url}
              created_at={bot.created_at}
              updated_at={bot.updated_at}
               deleteRobot={()=>deleteArrayItem(bot)}
               selectRobot= {handleClick}
           />
 
          </div>
        );
      })}
    </div>
    
  );
}
export default FetchBots;
