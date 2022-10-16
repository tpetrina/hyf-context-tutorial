import { useUser } from "./user-context";

export function Logout() {
  const { onLogout } = useUser();
  
  return (
    <section className="nice-section">
      <h2>Logout</h2>

      <button onClick={onLogout}>Logout</button>
    </section>
  );
}
