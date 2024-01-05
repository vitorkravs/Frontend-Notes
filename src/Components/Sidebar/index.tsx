import { useState } from "react";

import api from "../../Services/api";

import "./styles.css";

function Sidebar({ allNotes, setAllNotes }: any) {
  const [title, setTitles] = useState("");
  const [notes, setNotes] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const response = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });

    setTitles("");
    setNotes("");

    setAllNotes([...allNotes, response.data]);
  }

  return (
    <aside>
      <strong>Caderno de Notas</strong>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="title">Título da Anotação: </label>
          <input
            required
            value={title}
            onChange={(e) => setTitles(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="nota">Anotações:</label>
          <textarea
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
}

export default Sidebar;
