import React from 'react'

 function Menu(props) {
    return (
        <div>
        <form>
         <input name="video" type="radio" onClick={()=>props.chooseVideo('fast')}/>Fast   
         <input name="video" type="radio" onClick={()=>props.chooseVideo('slow')}/>Slow   
         <input name="video" type="radio" onClick={()=>props.chooseVideo('cute')}/>Cute  
         <input name="video" type="radio" onClick={()=>props.chooseVideo('eek')}/>Eek   
        </form>    
        </div>
    )
}

export default Menu;