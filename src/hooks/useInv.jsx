import InvContext from "@/context/InvProvider"
import { useContext } from "react"


const useInv = () => {
  return useContext(InvContext)
}

export default useInv