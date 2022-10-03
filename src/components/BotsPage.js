import React,{useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]= useState([])
  //const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);
  
    function removeBot(bot){
     const removeFromList= bots.map(singleBot => singleBot.id === bot.id ? {...singleBot, yourArmy:false} : singleBot);
       setBots(removeFromList);
    }

    function enlistBots(bot){
    const selecting= bots.map(singleBot => singleBot.id === bot.id ? {...singleBot,yourArmy:true} : singleBot);
      setBots(selecting );
    }
    function handleDelete(bot){
      const filterbots=bots.filter(oneBot => oneBot.id !== bot.id);
      const   deleting =  {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        } 
     }
      fetch(`http://localhost:8002/bots/${bot.id}`,deleting)
       .then(()=>setBots(filterbots))   
    }
    
   // From BotArmy it removes from the list  and from bot collection it delete permanently amazing 
  
  return (
    <div>
      <YourBotArmy  
        bots={bots.filter(oneBot => oneBot.yourArmy)} 
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
