import React, { createContext, useReducer } from 'react';
const initialState = {
  dark: false,
};
export const ThemeContext = createContext(initialState);

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'Toggle': {
      return {
        dark: !state.dark,
      };
    }
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const toggleTheme = () => {
    dispatch({
      type: 'Toggle',
    });
  };
  const contextValues = { toggleTheme, ...state };
  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
