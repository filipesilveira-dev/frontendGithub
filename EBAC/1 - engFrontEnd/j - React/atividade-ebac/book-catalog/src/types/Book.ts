export interface BookType {
// Mais à frente do projeto será introduzido. A "?" indica que essa propriedade é opcional no contrato. Caso não seja opcional, fica obrigatório enviar um "id" para a API, por exemplo
  	_id?: string;
  	name: string;
  	author: string;
	// Mais à frente do projeto será introduzido.
	isRead: boolean;
};
 
// Pelo tamanho da aplicação será feito o prop drilling