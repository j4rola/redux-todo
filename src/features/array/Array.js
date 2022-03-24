import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux' 
import { addString, deleteString } from './arraySlice'


function Array() {

    

    const globalArray = useSelector((state) => state.array.value)      

    const dispatch = useDispatch(); 

    const [state, updateState] = useState({value:'', id:''})

    const update = (x) => {        
        updateState({value: x, id:''})   
    }

    const handleClick = (e) => {
        console.log(e.target.id)
        const id = e.target.id 
        dispatch(deleteString(id))
    }


  return (
    <div>Array
        <form onSubmit={(e) => {e.preventDefault()}}>   
            <input onChange={(e) => update(e.target.value)}>      

            </input>    
            <button onClick={() => {dispatch(addString(state))}}>Submit</button>           
        </form>          
      
      { globalArray.map((x, i) => <h3>{x.value}<button id={i} onClick={(e) => handleClick(e)}>X</button></h3>)}   
      
    </div>    
  )
}

export default Array 