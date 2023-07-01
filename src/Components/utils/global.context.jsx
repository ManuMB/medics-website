import { createContext, useState } from "react";

export const initialState = {
  theme: {
    dark: {
      backgroundColor: "#1E293B",
      cardBackground: "#CBD5E1",
      textColor: "#FFFFFF",
    },
    light: {
      backgroundColor: "#FFFFFF",
      cardBackground: "#E5E7EB",
      textColor: "#000000",
    },
  },
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme.light);
  const handleTheme = () => {
    setTheme((curr) =>
      curr === initialState.theme.light
        ? initialState.theme.dark
        : initialState.theme.light
    );
  };

  return (
    <ContextGlobal.Provider value={{ theme, handleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};
