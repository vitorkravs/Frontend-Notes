import "./styles.css";

const Notes = () => {
  return (
    <>
      <li className="notepad-infos">
        <div>
          <strong>Fazer Compras</strong>
          <div>x</div>
        </div>
        <textarea
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          possimus, quae quidem aperiam magnam voluptatibus cum aliquid libero.
          Earum nisi consequatur labore, dolor necessitatibus nesciunt
          reiciendis beatae dolorem doloribus excepturi."
        ></textarea>
        <span>!</span>
      </li>
    </>
  );
};

export default Notes;
