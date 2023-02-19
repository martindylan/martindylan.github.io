import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
}

const initialState = {
  isDropped: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'isDropped':
      return {isDropped: action.value};
    default:
      return {isDropped: false};
  }
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{isDropped: state.isDropped, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export {
  AppProvider,
  useAppContext
}