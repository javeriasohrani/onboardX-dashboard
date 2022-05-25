import React, {useState} from "react";
import { TextDataContextTwo } from "../../context/TextDataContext";


const TextDataContextProviderTwo = ({children}) => {
  
    const [textDataFromModalTwo, settextDataFromModalTwo] = useState()
    

  
    return(
        <>
        <TextDataContextTwo.Provider value={{textDataFromModalTwo, settextDataFromModalTwo}}>{children}</TextDataContextTwo.Provider>
        
        </>
    )
}
export default TextDataContextProviderTwo;