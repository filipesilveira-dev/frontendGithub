import type { Complaint } from "../types/Complaint";

// Tipagem realizada internamente, mas utilizando o arquivo externo "Complaint.ts"
type Props = {
  // "complain" aqui neste componente será tipado de acordo com o que está no arquivo "Complaint.ts", ou seja, um objeto com as propriedades "id, "name" e "message"
  complaint: Complaint;
};

// Componente que representará cada reclamação presente na lista de reclamações, mostrando o nome da empresa e a mensagem inserida pelo reclamante
const ComplaintItem = ({ complaint }: Props) => {
  return (
    <div>
      <div>
        {/* Recebe o que está em 'name' da reclamação (complaint) */}
        <strong>{complaint.name}</strong>
      </div>
      {/* Recebe o que está em 'message' da reclamação (complaint) */}
      <p>{complaint.message}</p>
    </div>
  );
};

export default ComplaintItem;
