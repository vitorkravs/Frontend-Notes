import { useState } from "react";

import "./styles.css";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import { NotesProps } from "../../Interfaces/Note";

const Notes: React.FC<NotesProps> = ({ data, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(data.title);
  const [updatedNotes, setUpdatedNotes] = useState(data.notes);

  const handleRemove = async () => {
    // Chama a função onRemove com o ID da nota ao clicar no botão "X"
    await onRemove(data._id);
  };

  const handleUpdate = async () => {
    // Implemente a lógica para realizar a atualização
    await onUpdate(data._id, { title: updatedTitle, notes: updatedNotes });
    setIsEditing(false);
  };

  const renderTitle = () => {
    return isEditing ? (
      <input
        className="edit-title"
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
    ) : (
      <strong>{data.title}</strong>
    );
  };

  const renderTextArea = () => {
    return isEditing ? (
      <textarea
        className="edit-textarea"
        value={updatedNotes}
        onChange={(e) => setUpdatedNotes(e.target.value)}
      />
    ) : (
      <textarea
        readOnly
        value={data.notes}
        onChange={(e) => setUpdatedNotes(e.target.value)}
      />
    );
  };

  const renderButtons = () => {
    return isEditing ? (
      <button onClick={handleUpdate}>Salvar</button>
    ) : (
      <button onClick={() => setIsEditing(true)}>
        <AiOutlineExclamationCircle />
      </button>
    );
  };

  return (
    <li className="notepad-infos">
      <div>
        {renderTitle()}
        <div onClick={handleRemove}>
          <AiTwotoneDelete />
        </div>
      </div>
      {renderTextArea()}
      <span>{renderButtons()}</span>
    </li>
  );
};

export default Notes;
