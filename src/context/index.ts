import { createContext, useContext } from "react";

export type AppContextProps = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const defaultContext = {
  loading: false,
  setLoading: () => {},
};

const AppContext = createContext<AppContextProps>(defaultContext);

export const ContextProvider = AppContext.Provider;

export const useAppContext = () => useContext(AppContext);

export default AppContext;
