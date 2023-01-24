import React from "react"

function BotDisplay({name,health,damage,armor,bot_class,catchphrase,image,created_at,updated_at,deleteRobot,selectRobot}){


  return(

<div className="card-deck">
<button onClick={selectRobot} className="card">
    <img className="card-img" src={image}alt={name} />
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2><br></br>
    <p className="card-text">Health: {health} %</p>
    <p className="card-text">Damage: {damage} %</p> 
    <p className="card-text">armor: {armor} %</p>
    <p className="card-text">Class: {bot_class}</p>
    <p className="card-text">{catchphrase}</p>
    <p className="card-text">Update Last: {updated_at}</p>
    <p className="card-text">Created When: {created_at}</p>
  <button onClick={deleteRobot}className="card-btn">DELETE</button>
  
  </div>
</button>
</div>


)
}
export default BotDisplay
