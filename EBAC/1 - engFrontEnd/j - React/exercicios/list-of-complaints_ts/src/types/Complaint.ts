// Tipeagem realizada externamente. É possível, dessa forma, criar um estado, por exemplo, já tipado
export type Complaint = {
  // A "?" indica que essa propriedade é opcional no contrato. Caso não seja opcional, fica obrigatório enviar um "id" para a API, por exemplo
  _id?: number;
  name: string;
  message: string;
};
