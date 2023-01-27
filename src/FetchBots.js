import React, { useEffect, useState } from "react";
import "./App.css";
import BotDisplay from "./BotDisplay";
import axios from "axios";
import SearchRobot from "./RobotSearch";

function FetchBots() {
  //const[selected, setSelected]=useState([])
  const [bots, setBots] = useState([]);
  const [botState, setBotState] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios("https://api.npoint.io/24bf227b88194231eb03/bots").then((res) => {
      setBots(res.data);

      // setRobotName(res.data.id);
    });
  }, []);

  function handleAdd(item) {
    console.log("JWGFJKK", item);
    const selectedBots = [...botState];
    console.log("sele", selectedBots);
    selectedBots.push(item);

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
    // const tempTransactions = [...botState];
    const tempTransactions = Object.assign([],botState);
    const findIndex = tempTransactions.findIndex(
      (a) => a.id === itemToBeRemoved.id
    );

    findIndex !== -1 && tempTransactions.splice(findIndex, 1);
    console.log("kdJSLKJFKJ", tempTransactions.length);
    setBotState(tempTransactions);
  };

  let incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="transactions-container">
        <div className="bankHeader">
          <div>
            <h1 className="batir">BOT BATTIR</h1>

            <h1 className="botdiv">selected bot: {count} </h1>
          </div>
        </div>
        <SearchRobot search={Search} />
        <div className="selected-bots">
          {botState.map((bot) => (
            <button onClick={() => deleteArrayItem(bot)} key={bot.id} onChange={incrementCount} className="unselect">
              <div className="select" >
                <img className="card-img" src={bot.avatar_url} alt="" />
                <h2 className="card-title">Name: {bot.name}</h2>
                <div className="card-text">Health: {bot.health} %</div>
                <div className="card-text">Damage: {bot.damage} %</div>
                <div className="card-text">armor: {bot.armor} %</div>
                <div className="card-text">Class: {bot.bot_class}</div>
                <div className="card-text">Update Last: {bot.updated_at}</div>
                <div className="card-text">Created When: {bot.created_at}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {bots.map((item) => {
        return (
          <div className="display" key={item.id}>
            <BotDisplay
              name={item.name}
              health={item.health}
              damage={item.damage}
              armor={item.armor}
              bot_class={item.bot_class}
              image={item.avatar_url}
              created_at={item.created_at}
              updated_at={item.updated_at}
              selectedBots={() => handleAdd(item)}
            />
          </div>
        );
      })}
    </div>
  );
}
export default FetchBots;
