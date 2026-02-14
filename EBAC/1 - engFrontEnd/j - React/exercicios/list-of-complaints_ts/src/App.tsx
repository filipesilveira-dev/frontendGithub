import { useEffect, useState } from "react";
import "./App.css";
import ComplaintForm from "./components/ComplaintForm";
// Importação específica de tipagem: necessita do "type"
import type { Complaint } from "./types/Complaint";
import ComplaintsList from "./components/ComplaintsList";
import axios from "axios";

const API_URL =
  "https://crudcrud.com/api/c745d2816cc64c61add83e5daa9a1242/complaints";

function App() {
  // Estado criado já tipado em arquivo externo "Complaint.ts": apresenta a tipagem das propriedades de uma "complaint" (reclamação). Uma vez que a função "addComplaint" é executada, esse estado muda, adicionando uma nova "complaint" (reclamação) na lista.
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  // Função para adicionar r3eclamação passada via props ao filho "<ComplaintForm/>"
  const addComplaint = (data: Complaint) => {

    // Utiliza o axios para realizar uma requisição POST para enviar à API os dados (data) tipados com "Complaint"
    axios
      .post<Complaint>(API_URL, data)
      .then((response) => setComplaints((prev) => [...prev, response.data]));
  };

  // Buscar no servidor de API as reclamações já cadastradas
  useEffect(() => {
    
    // Utilizado ao invés do "fetch" por já realizar a adequação da tipagem utilizada com o typescript no projeto
    axios
      .get<Complaint[]>(API_URL)
      .then((response) => setComplaints(response.data));
  }, []);

  return (
    <>
      {/* Quando o formulário for enviado, será executada a função "addComplaint" como callback, rodando a função declarado no pai no filho (passada via props) */}
      <ComplaintForm onSubmit={addComplaint} />
      {/* A lista com as reclamações já é passada mapeada. Ela é mapeada lá no componente <ComplaintList/> então já retorna aqui todas as tarefas contidas na lista.
      Aqui está sendo passado um estado via props. Pode gerar problema de performance
      */}
      <ComplaintsList complaints={complaints} />
    </>
  );
}

export default App;
