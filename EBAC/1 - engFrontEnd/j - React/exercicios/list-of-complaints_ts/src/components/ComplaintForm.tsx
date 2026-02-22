import React, { useState } from "react";
import type { Complaint } from "../types/Complaint";
import styles from "./ComplaintForm.module.css";

// Tipagem estática de "onSubmit": indica que se trata de uma função que recebe como argumento "complaint", uma reclamação, a qual é um dado tipado de acordo com o estabelecido em "Complaint.ts"
type ComplaintFormProps = {
  addComplaint: (complaint: Complaint) => void;
};

// Função de callback que será executada sempre que o formulário for enviado: onSubmit()
const ComplaintForm = ({ addComplaint }: ComplaintFormProps) => {
  /* Estados internos utilizados no formulário: o nome da empresa e a mensagem (reclamação)
    
        Utilizados nos inputs em "value" e em "onChange"
    */
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Chamada da função "onSubmit" quando o formulário for enviado (React.SubmitEvent). O evento (e) recebe uma tipagem específica
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    // Previne o recarregamento da página
    e.preventDefault();
    if (!name || !message) return;

    // Chama a função "onSubmit()" que passa como parâmetros o id, o nome da empresa e a messagem contida em textarea
    addComplaint({ name, message });
    setName("");
    setMessage("");
  };

  return (
    // Ao formulário ser enviado, é chamada a função "submit()", a qual chama a função "onSubmit()"
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Registrar Reclamação</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Nome da Empresa"
        // "value" + "onChange" = formulário controlado
        value={name}
        // "Altere o estado de 'name' com o que foi escrito nesse input"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder="Descreva sua reclamação"
        // "value" + "onChange" = formulário controlado
        value={message}
        // "Altere o estado de 'message' com o que foi escrito nesse textarea"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ComplaintForm;
