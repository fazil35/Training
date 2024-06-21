// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [weatherVisible, setWeatherVisible] = useState(true);
  const [todoVisible, setTodoVisible] = useState(true);

  return (
    <AppContext.Provider value={{ weatherVisible, setWeatherVisible, todoVisible, setTodoVisible }}>
      {children}
    </AppContext.Provider>
  );
};
