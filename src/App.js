import React, { useState} from 'react'; 
import './App.css';

function App() {
  var ans=0;
  const [Value,SetValue] = useState("");
  const oper=['+','-','*','/','%','.','(',')','='];
  const BackSpaceAndClear=(e)=>
  {
     if(e==='c'|| e==='C')
     {
      SetValue(Value.slice(0,-1));
      console.log(Value);
    }
    else if(e==='ac' || e==='AC')
    {
       SetValue("");
    }
    
  }
  const EventHandler = (e) =>
  {
    // e=e.toString();
    if((oper.includes(e) && Value==="") || (oper.includes(e) && oper.includes(Value.slice(-1))))
    {
      SetValue(Value);
    }
    else
    {
      SetValue(Value+e);
    }
   
  }
  const Calculate=()=>
  {
    if(Value!=='')
    {
      ans=eval(Value);
      if(ans===Infinity)
      {
         ans.toString();
         ans="Can't Divide By Zero";
         SetValue(ans);
      }
      else
      {
        SetValue(ans.toString());
        console.log("Value",Value,typeof(Value));
        // SetValue(Value.toString());
      }
     
    }
    else
    {
      SetValue("");
    }

  }

  return (
    <div className="container App App-header">
       
       <div className="row">
       <div className="calculator">
         <div className="calculatorDispaly-Screen">
           <input type="text" readOnly value={Value || "0"} ></input>
        </div>
       <div className="Btn">
       <button  onClick={(e)=>BackSpaceAndClear(e.target.value)} className="cal-btn symboles backspace" value="C" type="button">C</button>
        <button  onClick={(e)=>BackSpaceAndClear(e.target.value)} className="cal-btn symboles backspace" type="button" value="AC">AC</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn symboles" type="button" value="%">%</button>
        <br/>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="1">1</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="2">2</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="3">3</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn symboles" type="button" value="/">/</button>
        <br/>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="4">4</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="5">5</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="6">6</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn symboles" type="button" value="*">X</button>
        <br/>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="7">7</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="8">8</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="9">9</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn symboles" type="button" value="+">+</button>
        <br/>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value=".">.</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn" type="button" value="0">0</button>
        <button  onClick={()=>Calculate()} className="cal-btn" type="button symboles" value="=">=</button>
        <button  onClick={(e)=>EventHandler(e.target.value)} className="cal-btn symboles" type="button" value="-">-</button>

       </div>
      </div>

       </div>
      
    </div>
  );
}

export default App;
