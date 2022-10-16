import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [value] = useState({
    isLoggedIn: false,
    username: "test",
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const user = useContext(UserContext);
  return user;
}

const LanguageContext = createContext({
  language: "dk",
});

function LanguageProvider({ children }) {
  const [settings, setSettings] = useState({
    language: "dk",
  });

  function changeLanguage(newLanguage) {
    if (newLanguage === "dk" || newLanguage === "en") {
      setLanguage(newLanguage);
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        ...settings,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const value = useContext(LanguageContext);
  return value;
}

// how to use it
function LanguagePicker() {
  const value = useLanguage();

  return (
    <>
      Current language: {value.language}
      <button
        onClick={() => {
          value.changeLanguage("en");
        }}
      >
        Change to en
      </button>
    </>
  );
}
