import React,{useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]= useState([]);
  const [boting,setBoting]=useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);
  
    function removeBot(bot){
     const  removeFromList = boting.filter((singleBot)=> singleBot.id !==bot.id)
       setBoting(removeFromList);
    }

    function enlistBots(bot){
      const selecting = boting.find((bott)=>bott.id === bot.id)  
      if (!selecting){
       setBoting(bots=>[...bots,bot])
      }   
    }
    function handleDelete(bot){
      const filterbots=bots.filter(oneBot => oneBot.id !== bot.id);
      const   deleting =  {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        } 
     }
      const removeFromArmy= boting.filter((bo)=>bo.id !==bot.id)
      fetch(`http://localhost:8002/bots/${bot.id}`,deleting)
       .then(()=>setBots(filterbots))
              setBoting(removeFromArmy)
        
    }
    
   // From BotArmy it removes from the list  and from bot collection it delete permanently amazing 
  
  return (
    <div>
      <YourBotArmy  
        bots={boting} 
        selectedBot={removeBot} 
        handleDelete ={handleDelete}
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
