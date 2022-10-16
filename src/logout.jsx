export function Logout({ onLogout }) {
  return (
    <section className="nice-section">
      <h2>Logout</h2>

      <button onClick={onLogout}>Logout</button>
    </section>
  );
}
