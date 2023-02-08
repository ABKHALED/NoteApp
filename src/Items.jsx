import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
function Items() {
    const {user , setUser} = useContext(Context)
  return (
    <div>
      <h1 onClick={() => {setUser('test don')}}>{user}</h1>
    </div>
  )
}

export default Items
