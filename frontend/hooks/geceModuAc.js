import {useState} from "react";
import useLocalStorage from "./localStorageKullan";

const useModeChange = (key, initialValue) => {
    //const [mode, setMode]=useState(false);
    const[value, setValue] = useLocalStorage(key, initialValue);

    const changeModeHandler = (updatedMode) =>{
        //setMode(updatedMode);
        setValue(updatedMode);
    }

    return[value, changeModeHandler];

}
export default useModeChange;