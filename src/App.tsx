import { useState, useEffect } from "react";
import api from "./Services/api";

//estilos
import "./global.css";
import "./app.css";
import "./main.css";

//componentes
import Sidebar from "./Components/Sidebar";
import Notes from "./Components/Notes";

function App() {
  const [allNotes, setAllNotes] = useState([]);

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
            <Notes data={data} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
