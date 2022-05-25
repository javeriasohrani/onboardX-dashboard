import React, { useState } from "react";
import { TextDataContext } from "../../context/TextDataContext";

const TextDataContextProvider = ({ children }) => {
  const [textDataFromModal, settextDataFromModal] = useState();

  return (
    <>
      <TextDataContext.Provider
        value={{ textDataFromModal, settextDataFromModal }}
      >
        {children}
      </TextDataContext.Provider>
    </>
  );
};
export default TextDataContextProvider;
