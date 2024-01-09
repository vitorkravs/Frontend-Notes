import { useState } from "react";

import "./styles.css";
import {
  AiTwotoneDelete,
  AiOutlineExclamationCircle,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { NotesProps } from "../../Interfaces/Note";
import api from "../../Services/api";

const Notes: React.FC<NotesProps> = ({
  data,
  onRemove,
  onUpdate,
  setAllNotes,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(data.title);
  const [updatedNotes, setUpdatedNotes] = useState(data.notes);

  const handleRemove = async () => {
    // Chama a função onRemove com o ID da nota ao clicar no botão "X"
    await onRemove(data._id);
  };

  const handleUpdate = async () => {
    // Implemente a lógica para realizar a atualização
    await onUpdate(data._id, {
      title: updatedTitle,
      notes: updatedNotes,
    });
    setIsEditing(false);
  };

  const handleToggleFavorite = async () => {
    try {
      // Envie uma solicitação para alterar a prioridade da nota no backend
      await api.put(`/priorities/${data._id}`);
      const response = await api.get("/annotations");

      setAllNotes(response.data);
    } catch (error) {
      console.error("Erro ao alterar a prioridade da nota:", error);
    }
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

  const renderFavoriteButton = () => {
    return (
      <button className="edit-priority" onClick={handleToggleFavorite}>
        {data.priority ? <AiFillStar /> : <AiOutlineStar />}
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
      <span>{renderFavoriteButton()}</span>
    </li>
  );
};

export default Notes;
