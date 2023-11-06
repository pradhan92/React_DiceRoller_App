
import { useState } from 'react';
import Button from './components/Button';

const  App=()=> {
  //declear the variable
  const [diceNumber, setDiceNumber]=useState(6)
  const refreshDice =()=>{
    const randomno = Math.floor(Math.random()*6)+1
    setDiceNumber(randomno)
  }
  return (
    <div>
      <center>
        <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img> 
        <br/> 
        {
          //  with simple buton
        /* <button onClick={()=> refreshDice()} className='button'>Roll</button>  */}
          
          {/* with recllable buton */}
          <Button name="Roll" click={()=>refreshDice()}/>
          </center>
    </div>
  );
}

export default App;
