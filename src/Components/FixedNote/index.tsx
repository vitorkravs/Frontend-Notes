import {
  AiFillStar,
  AiOutlineExclamationCircle,
  AiTwotoneDelete,
} from "react-icons/ai";

const FixedNote = () => {
  const agradecimento =
    "Bem-vindo à Nota Fixa! Esta é uma nota fixa de meu site, onde agradeço " +
    "sua visita. Aqui, ofereço uma experiência simplificada para criar, " +
    "visualizar e gerenciar suas notas. Se precisar de ajuda ou tiver alguma " +
    "dúvida, pode entrar em contato comigo. " +
    "https://www.linkedin.com/in/vitor-kravszenko-80748a234/";

  return (
    <li className="notepad-infos">
      <div>
        <strong>Nota Fixa</strong>
        <div>
          <AiTwotoneDelete />
        </div>
      </div>
      <textarea readOnly defaultValue={agradecimento} />

      <span>
        <button className="edit-priority">
          {" "}
          <AiOutlineExclamationCircle />
        </button>
      </span>
      <span>
        <button className="edit-priority">
          {" "}
          <AiFillStar />
        </button>
      </span>
    </li>
  );
};

export default FixedNote;
