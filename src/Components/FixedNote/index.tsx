import {
  AiFillStar,
  AiOutlineExclamationCircle,
  AiTwotoneDelete,
} from "react-icons/ai";

const FixedNote = () => {
  const agradecimento =
    "Bem-vindo à Nota Fixa! Agradeço sua visita. " +
    "Aqui, você pode criar, visualizar e gerenciar suas notas, " +
    "Se precisar de ajuda ou tiver alguma dúvida, " +
    "pode entrar em contato comigo: www.linkedin.com/in/vitorkravszenko/ " +
    "Observação: Caso haja um atraso ao inserir notas, nosso banco de " +
    "dados online pode estar se conectando. Geralmente, isso leva " +
    "apenas um minuto. Agradeço sua paciência." 

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
