import "./styles.css";

interface NotesProps {
  data: {
    title: string;
    notes: string;
  };
}

const Notes: React.FC<NotesProps> = ({ data }) => {
  return (
    <li className="notepad-infos">
      <div>
        <strong>{data.title}</strong>
        <div>x</div>
      </div>
      <textarea defaultValue={data.notes} />
      <span>!</span>
    </li>
  );
};

export default Notes;
