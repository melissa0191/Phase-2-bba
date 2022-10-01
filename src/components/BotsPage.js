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
  
  function enlistBots(bot){
     console.log(bot)
     setBots(bots.map(b => b.id === bot.id ? {...b, army:true} : b));
  };
  function handleDelete(bot){
    console.log('deleted')
    setBots(bots.filter(b => b.id !== bot.id))

  };
  return (
    <div>
      <YourBotArmy 
        
        />


      <BotCollection 
         bots={bots} 
         enlistBots={enlistBots} 
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default BotsPage;
