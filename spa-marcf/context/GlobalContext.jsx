import React, { createContext } from 'react';

export const GlobalContext = createContext(); 

export const GlobalContextProvider = (props) => {




  const valuesProvider = {
    nombre:"Guille"
  };

  
  return (
    <GlobalContext.Provider value={valuesProvider}>
      {props.children}
    </GlobalContext.Provider>
  );
}