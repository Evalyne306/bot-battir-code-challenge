import React from "react"

function BotDisplay({name,health,damage,armor,bot_class,catchphrase,image,created_at,updated_at,deleteRobot}){


  return(

<div className="card-group">
<div className="card">
    <img className="card-img" src={image}alt={name} />
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <p className="card-text">{health}</p>
    <p className="card-text">{damage}</p> 
    <p className="card-text">{armor}</p>
    <p className="card-text">{bot_class}</p>
    <p className="card-text">{catchphrase}</p>
    <p className="card-text">{updated_at}</p>
    <p className="card-text">{created_at}</p>
  <button onClick={deleteRobot}className="card-btn">DELETE</button>
  
  </div>
</div>
</div>


)
}
export default BotDisplay
