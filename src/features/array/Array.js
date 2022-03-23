import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux' 
import { addString, deleteString } from './arraySlice'


function Array() {

    const globalArray = useSelector((state) => state.array.value)      

    const dispatch = useDispatch(); 

    const [state, updateState] = useState({value:'state', id: uuidv4()})

    const update = (x) => {
        updateState({value: x, id: uuidv4()}) 
    }


  return (
    <div>Array
        <form onSubmit={(e) => {e.preventDefault()}}>   
            <input onChange={(e) => update(e.target.value)}>   

            </input>    
            <button onClick={() => {dispatch(addString(state))}}>Submit</button>       
        </form>          
      
      { globalArray.map(x => <h3 id={x.id}>{x}<button onClick={(e) => dispatch(deleteString(e))}>x</button></h3>)}   
      
    </div>  
  )
}

export default Array 