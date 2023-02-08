import React, { useContext } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Context } from "./Context";
import { useState } from 'react';
import { useRef } from 'react';
function Note({id,text,date}) {
  const fff = useRef(null)
    const { setNote ,setNewarr ,setSeaTx} = useContext(Context)
    const [dis , setDis] = useState(true)
    const [sectx , setSectx] = useState(text)
    function chan(e){
      const {value} = e.target
      setSectx(value)
      
    }
    function sav(id){
      setNote(prev =>{
        return prev.map(ele =>{
          return ele.id === id ? {...ele , text : sectx} : ele
        })
      })
      setDis(true)
      setNewarr([])
      setSeaTx('')
    }
    let t = text
    function edit(id){
      setDis(false)
      setTimeout(() =>{fff.current.focus()} , 1)
    }
    if(sectx === ''){
      t =''
    }
    function delet(id){
      setNote(prev =>{
        return prev.filter(ele =>{
          return ele.id !== id
        })
      })
      setNewarr([])
      setSeaTx('')
    }
  return (
    <div className='nt'>
        <textarea maxLength='200' ref={fff} disabled={dis} value={sectx === ''? t : sectx} onChange={(e) => chan(e ,id)} />
      <div className="footer">
        <p>{date}</p>
        <div className="mod">
        <div className="delet" onClick={() => delet(id)}>
        <DeleteForeverIcon/>
        </div>
        {dis ? <div className='edit' onClick={() => edit(id)}>
           <EditIcon /> 
            
        </div> : <div className='edit' onClick={() => sav(id)}> <DoneAllIcon /> </div> }
        
        </div>
      </div>
    </div>
  )
}

export default Note
