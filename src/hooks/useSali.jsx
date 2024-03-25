import SalContext from "@/context/SalProvider"
import { useContext } from "react"


const useSal = () => {
  return useContext(SalContext)
}

export default useSal