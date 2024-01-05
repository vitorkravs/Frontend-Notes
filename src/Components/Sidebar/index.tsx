import { useState } from "react";

import api from "../../Services/api";

import "./styles.css";

//Interfaces
import { SidebarProps } from "../../Interfaces/Note";

function Sidebar({ allNotes, setAllNotes }: SidebarProps) {
  const [title, setTitles] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  // Função para lidar com o envio do formulário
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // Chama a API para salvar a nota
      const response = await api.post("/annotations", {
        title,
        notes,
        priority: false,
      });
      // Limpa os campos de entrada após o sucesso do envio
      setTitles("");
      setNotes("");

      // Atualiza o estado allNotes com os dados recebidos do servidor
      setAllNotes([...allNotes, response.data]);
    } catch (error) {
      console.error("Erro ao salvar a nota:", error);
    }
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
            onChange={({ target }) => setTitles(target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="nota">Anotações:</label>
          <textarea
            required
            value={notes}
            onChange={({ target }) => setNotes(target.value)}
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
}

export default Sidebar;
