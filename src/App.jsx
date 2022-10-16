import "./App.css";
import { EditProfile } from "./edit-profile";
import { Login } from "./login";
import { Logout } from "./logout";
import { UserProvider, useUser } from "./user-context";

function App() {
  /*
    TODO:
      1. After login show different component
      2. After login show logout
      3. Logout should be able to logout
  **/

  return (
    <UserProvider>
      <main>
        <Navbar />
        <h1>Simple context app</h1>

        <Content />
      </main>
    </UserProvider>
  );
}

function Content() {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <>Please log in</>;
  }

  return (
    <>
      <h2>Edit profile page</h2>
      <EditProfile />
    </>
  );
}

function Navbar() {
  const { isLoggedIn, username } = useUser();

  return (
    <section
      style={{
        background: "#aaa",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <h1>My cool app</h1>
      Welcome '{username}'{isLoggedIn ? <Logout /> : <Login />}
    </section>
  );
}

export default App;
