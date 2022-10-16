import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, setState] = useState({
    isLoggedIn: false,
    username: "INITIAL VALUE",
  });

  const value = {
    ...state,
    onLogin: (username) => {
      setState({
        isLoggedIn: true,
        username: username,
      });
    },
    onLogout: () => {
      setState({
        isLoggedIn: false,
        username: "",
      });
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error("Did you forget to put this under UserProvider");
  }

  return user;
}
