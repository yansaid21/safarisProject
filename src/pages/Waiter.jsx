
import { useContext } from "react"
import { waiterContext } from "../context/waiterContext"
import SelectSmall from "../components/SelectSmall"
export default function Waiter() {
    const {theWaiter} = useContext(waiterContext)
  return (
    <div>
        mesero: {theWaiter}
        <SelectSmall nombre="picada" />
        <SelectSmall nombre="brocheta"/>

    </div>
  )
}
