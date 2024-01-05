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

  return (
    <div className="App">
      <Sidebar allNotes={allNotes} setAllNotes={setAllNotes} />
      <main>
        <ul>
          {allNotes.map((data) => (
            <Notes key={data._id} data={data} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
