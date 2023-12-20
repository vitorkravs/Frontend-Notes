import "./styles.css";

function Sidebar() {
  return (
    <aside>
      <strong>Caderno de Notas</strong>
      <form>
        <div className="input-block">
          <label htmlFor="title">Título da Anotação: </label>
          <input />
        </div>
        <div className="input-block">
          <label htmlFor="nota">Anotações:</label>
          <textarea></textarea>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
}

export default Sidebar;
