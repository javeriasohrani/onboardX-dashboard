import { createContext } from "react";
import AllRoutes from "./Routes";
import TextDataContextProvider from "./components/TextDataContextProvider/TextDataContextProvider";



function App() {
  return (
    <>
      <TextDataContextProvider>
        <AllRoutes />
      </TextDataContextProvider>



    </>
  );
}

export default App;

