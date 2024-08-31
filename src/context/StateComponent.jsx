import React, { useState } from 'react'
import { waiterContext } from './waiterContext'

const StateComponent = ({children}) => {
    const [theWaiter,setTheWaiter] = useState("")
  return (
    <waiterContext.Provider value={{theWaiter,setTheWaiter}}>
      {children}
    </waiterContext.Provider>
  )
}

export default StateComponent
