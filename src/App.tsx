import { useState, useEffect } from "react";
import api from "./Services/api";

//estilos
import "./global.css";
import "./app.css";
import "./main.css";

//Interfaces
import { Note } from "./Interfaces/Note";

//componentes
import Sidebar from "./Components/Sidebar";
import Notes from "./Components/Notes";

function App() {
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  // Obtém todas as notas da API e atualiza o estado.
  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get("/annotations");

      setAllNotes(response.data);
    }

    getAllNotes();
  }, []);

  const handleRemoveNote = async (noteId: number) => {
    try {
      await api.delete(`/annotations/${noteId}`);
      // Atualiza o estado excluindo a nota removida
      setAllNotes((prevNotes) =>
        prevNotes.filter((note) => note._id !== noteId)
      );
    } catch (error) {
      console.error("Erro ao remover a nota:", error);
    }
  };

  const handleUpdateNote = async (
    noteId: number,
    updatedNote: { title: string; notes: string }
  ) => {
    try {
      // Implemente a lógica para fazer a atualização da nota na API
      const response = await api.put(`/annotations/${noteId}`, updatedNote);

      // Atualiza o estado com a nota atualizada
      setAllNotes((prevNotes) =>
        prevNotes.map((note) => (note._id === noteId ? response.data : note))
      );
    } catch (error) {
      console.error("Erro ao atualizar a nota:", error);
    }
  };

  return (
    <div className="App">
      <Sidebar allNotes={allNotes} setAllNotes={setAllNotes} />
      <main>
        <ul>
          {allNotes.map((data) => (
            <Notes
              key={data._id}
              data={data}
              onRemove={handleRemoveNote}
              onUpdate={handleUpdateNote}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
