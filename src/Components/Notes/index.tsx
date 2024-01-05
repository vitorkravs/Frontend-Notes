import "./styles.css";

interface NotesProps {
  data: {
    _id: number;
    title: string;
    notes: string;
  };
  onRemove: (noteId: number) => Promise<void>;
}

const Notes: React.FC<NotesProps> = ({ data, onRemove }) => {
  const handleRemove = async () => {
    // Chama a função onRemove com o ID da nota ao clicar no botão "X"
    await onRemove(data._id);
  };
  return (
    <li className="notepad-infos">
      <div>
        <strong>{data.title}</strong>
        <div onClick={handleRemove}>x</div>
      </div>
      <textarea defaultValue={data.notes} />
      <span>!</span>
    </li>
  );
};

export default Notes;
