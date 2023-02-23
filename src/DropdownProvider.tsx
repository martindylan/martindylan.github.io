// import { createContext, useContext, useReducer, ReactNode } from "react";
import { createContext, useContext, useState, ReactNode } from "react";

const DropdownContext = createContext<any>({});

const useDropdownContext = () => {
  return useContext(DropdownContext);
}

// const initialState = {
//   isDropped: false
// }

// type ActionType = {
//   type: 'isDropped',
//   // value: Boolean
// }

// const reducer = (state: typeof initialState, action: ActionType) => {

//   switch (action.type) {
//     case 'isDropped':
//       return {
//         ...state,
//         // isDropped: action.value
//         isDropped: !state.isDropped
//       };
//     default:
//       return {
//         ...state,
//         isDropped: false
//       };
//   }
// }

type Props = {
  children?: ReactNode
}

const DropdownProvider = (props: Props) => {

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState(false);

  return (
    <DropdownContext.Provider value={{ isDropped: state, drop: setState }}>
      {props.children}
    </DropdownContext.Provider>
  );
}

export {
  DropdownProvider,
  useDropdownContext
}