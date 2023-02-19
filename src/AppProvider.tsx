import { createContext, useContext, useReducer, ReactNode } from "react";

const AppContext = createContext<any>({});

const useAppContext = () => {
  return useContext(AppContext);
}

const initialState = {
  isDropped: false
}

type ActionType = {
  type: 'isDropped',
  // value: Boolean
}

const reducer = (state: typeof initialState, action: ActionType) => {

  switch (action.type) {
    case 'isDropped':
      return {
        ...state,
        // isDropped: action.value
        isDropped: !state.isDropped
      };
    default:
      return {
        ...state,
        isDropped: false
      };
  }
}

type Props = {
  children?: ReactNode
}

const AppProvider = (props: Props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ isDropped: state.isDropped, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export {
  AppProvider,
  useAppContext
}