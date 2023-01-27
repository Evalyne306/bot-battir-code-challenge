import React from "react"


function BotDisplay({name,health,damage,armor,bot_class,catchphrase,image,created_at,updated_at,deleteRobot, selectedBots}){
return(
  <>
  {/* {bots.map((item)=>{ */}


  {/* return( */}
     
  <div>
<div className="card-deck">
<button onClick={selectedBots} className="card">
    <img className="card-img" src={image}alt={name} />
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2><br></br>
    <div className="card-text">Health: {health} %</div>
    <div className="card-text">Damage: {damage} %</div> 
    <div className="card-text">armor: {armor} %</div>
    <div className="card-text">Class: {bot_class}</div>
    <div className="card-text">{catchphrase}</div>
    <div className="card-text">Update Last: {updated_at}</div>
    <div className="card-text">Created When: {created_at}</div>
  <button onClick={deleteRobot}className="card-btn">DELETE</button>
  
  </div>
</button>
</div>
</div>

{/* ); */}
{/* // })} */}
</>
);
}
export default BotDisplay
