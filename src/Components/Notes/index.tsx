import "./styles.css";

const Notes = ({ data }: any) => {
  return (
    <>
      <li className="notepad-infos">
        <div>
          <strong>{data.title}</strong>
          <div>x</div>
        </div>
        <textarea>{data.notes}</textarea>
        <span>!</span>
      </li>
    </>
  );
};

export default Notes;
