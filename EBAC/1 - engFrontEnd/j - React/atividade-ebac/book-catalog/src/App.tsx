import "./App.css";
import { useCallback, useEffect, useState } from "react";
import type { BookType } from "./types/Book";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import axios from "axios";

function App() {
  const API_URL =
    "https://crudcrud.com/api/bff42129527f401e8f7b677cfd9710e7/books";

  const [books, setBooks] = useState<BookType[]>([]);

  // Buscar livros
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get<BookType[]>(API_URL);
        setBooks(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchBooks();
  }, []);

  // Adicionar livro
  const addBook = useCallback(async (data: BookType) => {
    try {
      const response = await axios.post<BookType>(API_URL, data);
      setBooks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  }, []);

  // Deletar livro
  const deleteBook = useCallback(async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  }, []);

  // Alterar status (sem id como argumento para não utilizar books no array de dependências)
  const changeBookStatus = useCallback(async (book: BookType) => {
    try {
      const { _id, ...bookWithoutId } = book;

      await axios.put(`${API_URL}/${_id}`, {
        ...bookWithoutId,
        isRead: !book.isRead,
      });
      // Atualização otimista do estado no frontend
      setBooks((prev) =>
        prev.map((b) => (b._id === _id ? { ...b, isRead: !b.isRead } : b)),
      );
    } catch (error) {
      console.error("Falha ao atualizar o livro", error);
      alert("Não foi possível atualizar o livro.");
    }
  }, []);

  return (
    <div className="container">
      <h1 className="">Catálogo de Livros</h1>

      <BookForm onAddBook={addBook} />

      <BookList
        books={books}
        onDeleteBook={deleteBook}
        onChangeBookStatus={changeBookStatus}
      />
    </div>
  );
}

export default App;
