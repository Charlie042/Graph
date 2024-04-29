import { useContext } from "react";
import { AppContext } from "./contextAPI";

export const useGlobal = () => {
    return useContext(AppContext)
}