import { createContext, useContext, useState, ReactNode } from "react";

const DropdownContext = createContext<any>({});

const useDropdownContext = () => {
  return useContext(DropdownContext);
}

type Props = {
  children?: ReactNode
}

const DropdownProvider = (props: Props) => {

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