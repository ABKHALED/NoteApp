import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { nanoid } from 'nanoid';
import { useRef } from 'react';
const Context = createContext();
const Appcontext = ({children}) => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('mode')))
  const [text , setText] = useState('')
  const [note , setNote] = useState(JSON.parse(localStorage.getItem('note')) ||[])
  const [seaTx ,setSeaTx ] = useState('')
  const [newarr , setNewarr] = useState([])
  const addRef = useRef()
  function add(){
   if(text !== ''){
    setNote(prev =>{
      return [...prev , {
        text: text,
        id: nanoid(),
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
      }]
    })
    setText('')
    addRef.current.focus()
    setNewarr([])
    setSeaTx('')
   }
  }
  function changed(e){
    const {value} = e.target
    setText(value)
  }
  function res(){
    setText('')
  }
  
  function search(e){
    const {value} = e.target;
    setSeaTx(value)
    if(value !== ''){
      setNewarr(prev =>{
        return note.filter(ele =>{
          return ele.text.toLowerCase().startsWith(value.toLowerCase())
        })
      })
    }else{
      setNewarr([])
    }
  }
  useEffect(() =>{
    localStorage.setItem('note' ,JSON.stringify(note))
  } ,[note])
  useEffect(() =>{
    localStorage.setItem('mode' ,JSON.stringify(dark))
  } ,[dark])
  return (
    <Context.Provider value={{dark , setDark , text , changed ,res ,add ,note  ,setNote ,search , seaTx ,newarr ,addRef ,setNewarr, setSeaTx}}>
      {children}
    </Context.Provider>
  )
}

export  {Appcontext , Context}
