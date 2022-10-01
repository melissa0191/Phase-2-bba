import React,{useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]= useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);
  
    function removeBot(bot){
      setBots(bots.map(b => b.id === bot.id ? {...b } : b));

    }

    function enlistBots(bot){
      setBots(bots.map(b => b.id === bot.id ? {...b} : b));

    }
    function handleDelete(bot){
      setBots(bots.filter(b => b.id !== bot.id))
    }
  
  return (
    <div>
      <YourBotArmy  
        bots={bots.filter(b => b.army)} 
        removeBot={removeBot} 
        selectedBot={enlistBots}
      />

       
      <BotCollection 
        bots={bots} 
        handleDelete={handleDelete} 
        enlistBots={enlistBots} 
      />
    </div>
  )
}

export default BotsPage;
