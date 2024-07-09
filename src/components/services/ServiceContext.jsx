
import React from 'react';

const selectedID = 1;

const Context = React.createContext(null);

export const AppContextProvider = ({ children, ...props }) => {
    const context = useCreateAppContext(props);
    return <Context.Provider value={context}>{children}</Context.Provider>;
  };
 
  export function useAppContext() {
    const context = React.useContext(Context);
    if (!context) throw new Error('Use app context within provider!');
    return context;
  }
const ServiceContext = React.createContext(
    selectedID
);

export default ServiceContext;