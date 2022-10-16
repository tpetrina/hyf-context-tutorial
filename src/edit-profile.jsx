import { useState } from "react";

export function EditProfile({ username: initial }) {
  const [username, setUsername] = useState(initial);

  return (
    <section className="nice-section">
      <h2>Edit profile</h2>

      <label htmlFor="">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <div>
        <button>Save</button>
      </div>
    </section>
  );
}
