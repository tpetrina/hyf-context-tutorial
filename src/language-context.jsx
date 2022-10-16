const LanguageContext = createContext({
  language: "dk",
});

export function LanguageProvider({ children }) {
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
