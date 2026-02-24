// Importação do arquivo de estilização
import "./App.css";
// Importação de hooks utilizados
import { useCallback, useEffect, useState } from "react";
// Importação da interface criada para tipar o livro ou array de livros
import type { BookType } from "./types/Book";
// Importação do componente que recebe as informações do usuário
import { BookForm } from "./components/BookForm";
// Importação do componente que renderiza os itens do array
import { BookList } from "./components/BookList";
// Importação do cliente HTTP em substituição ao método fecth
import axios from "axios";

function App() {
  // Variável criada para receber o endereço de endpoint do servidor de API
  const API_URL =
    "https://crudcrud.com/api/83ca4372f92144f8b506ba11f853674d/books";

  // Estado que recebe o array de livros (tipado de acordo com BookType e iniciado como um array vazio)
    const [books, setBooks] = useState<BookType[]>([]);

  // Buscar livros (métdo GET por meio de axios)
  useEffect(() => {
    // Função criada para receber async/await (useEffect não recebe async/await diretamente)
    async function fetchBooks() {
      try {
        // Constante recebe a resposta da requisição (esperada um array de livros tipado de acordo com BookType)
        const response = await axios.get<BookType[]>(API_URL);
        // Atribui indiretamente ao estado books os dados da resposta por meio de seu setter
        setBooks(response.data);
        // Tratamento de erros
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchBooks();
  }, []);

  // Adicionar livro (método POST por meio de axios): função assíncrona na qual é esperado um argumento tipado de acordo com BookType (useCallback para que a função só seja recriada caso alguma dependência mude)
  const addBook = useCallback(async (data: BookType) => {
    try {
      // Constante que recebe a resposta da requisição POST. Os dados esperados devem estar de acordo com BookType (backend)
      const response = await axios.post<BookType>(API_URL, data);
      // Atualiza o array com os dados da resposta da requisição (frontend)
      setBooks((prev) => [...prev, response.data]);
      // Tratamento dos erros
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  }, []);

  // Deletar livro (método DELETE por meio de axios): função assíncrona na qual é esperado um argumento id tipado como string (useCallback para que a função só seja recriada caso alguma dependência mude)
  const deleteBook = useCallback(async (id: string) => {
    try {
      // Nesse caso não é esperado nenhum dado. Apenas é passado o endereço do livro a ser deletado
      await axios.delete(`${API_URL}/${id}`);
      // Atualiza o estado no frontend criando um novo array sem o livro com o id passado no argumento da função
      setBooks((prev) => prev.filter((book) => book._id !== id));
      // Tratamento de erros
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  }, []);

  // Alterar status (sem id como argumento para não utilizar books no array de dependências)
  const changeBookStatus = useCallback(async (book: BookType) => {
    try {
      // Desestruturação do objeto book separando em duas variáveis: _id e bookWithoutId
      const { _id, ...bookWithoutId } = book;

      // Atualização total com método PUT, passando o endereço exato do livro a ser atualizado no backend. Spread operator retoma todas as propriedades do objeto, mas a propriedade isRead é alternada para sua negativa
      await axios.put(`${API_URL}/${_id}`, {
        ...bookWithoutId,
        isRead: !book.isRead,
      });
      // Atualização otimista do estado no frontend
      setBooks((prev) =>
        // Feito um map() no estado prévio de books: caso o item (b) possua _id idêntico à variável _id desestruturada utilizada para identificar o livro a ter seu estado atualizado, ele terá sua propriedade isRead também alterada no frontend. Caso contrário, o item permanece intacto quanto suas propriedades no novo array criado
        prev.map((b) => (b._id === _id ? { ...b, isRead: !b.isRead } : b)),
      );
      // Tratamento de erros
    } catch (error) {
      console.error("Falha ao atualizar o livro", error);
      alert("Não foi possível atualizar o livro.");
    }
  }, []);

  return (
    // Estilização utlizando css externo
    <div className="container">
      <h1>Catálogo de Livros</h1>
      {/* Passando a função addBook via props ao componente filho */}
      <BookForm onAddBook={addBook} />

      {/* Passando o estado (pode ser evitado utilizando um estado global) e as funções deleteBook e changeBookStatus via props ao componente filho */}
      <BookList
        books={books}
        onDeleteBook={deleteBook}
        onChangeBookStatus={changeBookStatus}
      />
    </div>
  );
}

export default App;
