import React, { useReducer, createContext } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initState = {
  isDark: false,
  language: "zh-cn",
};

const reducer = (state, action) => {
  console.log(">>> update", state, action);
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        isDark: !state.isDark,
      };
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.value,
      };
    default:
      throw new Error("Bad Action Type");
  }
};

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {props.children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
