//estilos
import "./global.css";
import "./app.css";
import "./main.css";

//componentes
import Sidebar from "./Components/Sidebar";
import Notes from "./Components/Notes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <ul>
          <Notes />
          <Notes />
        </ul>
      </main>
    </div>
  );
}

export default App;
