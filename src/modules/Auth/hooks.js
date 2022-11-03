import { useMutation } from "react-query"
import { loginUser } from "./api"

export const useLoginUser = () => {
  return useMutation(loginUser)
}
