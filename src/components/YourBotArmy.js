import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots,selectedBot,handleDelete}) {
  //your bot army code here...
 
  const  showBots= bots.map(bot=>{
    return (
      <BotCard
      key={bot.id}
      bot ={bot}
      handleDelete={handleDelete}
      enlistBots={selectedBot}
      />  
    )
  }) 

  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/ 
           showBots }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
