import EntContext from "@/context/EntProvider"
import { useContext } from "react"


const useEnt = () => {
  return useContext(EntContext)
}

export default useEnt