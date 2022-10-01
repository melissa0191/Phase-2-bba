import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,handleDelete,enlistBots}) {

  // Your code here

  const  showBots= bots.map(bot=>{
    return (
      <BotCard
      key={bot.id}
      bot ={bot}
      handleDelete={handleDelete}
      enlistBots={enlistBots}
      />  
    )
  })
 

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/
         showBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
