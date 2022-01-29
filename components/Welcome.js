import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Welcome = () => {
  const {
    user: {
      name,
    }
  } = useContext(GlobalContext);
  
  return (
    <h1 className="text-2xl font-bold lg:text-4xl">Welcome, {name}</h1>
  )
}
