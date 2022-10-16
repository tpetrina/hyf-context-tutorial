import { useState } from "react";
import "./App.css";
import { EditProfile } from "./edit-profile";
import { Login } from "./login";
import { Logout } from "./logout";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*
    TODO:
      1. After login show different component
      2. After login show logout
      3. Logout should be able to logout
  **/

  return (
    <main>
      <Navbar
        username={username}
        isLoggedIn={isLoggedIn}
        onLogin={(u) => {
          setIsLoggedIn(true);
          setUsername(u);
        }}
        onLogout={() => setIsLoggedIn(false)}
      />
      <h1>Simple context app</h1>

      {isLoggedIn ? (
        <>
          <Content username={username} />
        </>
      ) : null}
    </main>
  );
}

function Content({ username }) {
  return (
    <>
      <h2>Edit profile page</h2>
      <EditProfile username={username} />
    </>
  );
}

function Navbar({ username, isLoggedIn, onLogin, onLogout }) {
  return (
    <section
      style={{
        background: "#aaa",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <h1>My cool app</h1>
      Welcome '{username}'
      {isLoggedIn ? (
        <Logout onLogout={onLogout} />
      ) : (
        <Login onLogin={onLogin} />
      )}
    </section>
  );
}

export default App;
