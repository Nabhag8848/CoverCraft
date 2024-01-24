import { on } from "@create-figma-plugin/utilities";
import { createContext, h } from "preact";
import { PropsWithChildren } from "preact/compat";
import { StateUpdater, useContext, useState } from "preact/hooks";
import { GetAccessToken } from "../../types";

interface ContextValue {
  token: string;
  isAuthenticated: boolean;
  setToken: StateUpdater<string>;
}
const AuthContext = createContext({} as ContextValue);

function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string>("");
  const isAuthenticated = token !== "";

  on<GetAccessToken>("GET_ACCESS_TOKEN", async function (storedToken) {
    setToken(() => (storedToken === undefined ? "" : storedToken));
  });

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context Used outside of Provider");
  return context;
}

export { AuthProvider, useAuth };
