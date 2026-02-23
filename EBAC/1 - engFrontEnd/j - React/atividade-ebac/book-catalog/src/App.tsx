import "./App.css";
import { useCallback, useEffect, useState } from "react";
import type { Book } from "./types/Book";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import axios from "axios";

function App() {
  const API_URL =
    "https://crudcrud.com/api/bff42129527f401e8f7b677cfd9710e7/books";

  const [books, setBooks] = useState<Book[]>([]);

  // Buscar livros
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get<Book[]>(API_URL);
        setBooks(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchBooks();
  }, []);

  // Adicionar livro
  const addBook = useCallback(async (data: Book) => {
    try {
      const response = await axios.post<Book>(API_URL, data);
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

  // Alterar status
  const changeBookStatus = useCallback(async (id: string) => {
  const bookToUpdate = books.find((b) => b._id === id);
  if (!bookToUpdate) return;

  // ❗ Remove o _id antes de enviar
  const { _id, ...bookWithoutId } = bookToUpdate;

  const updatedBook = {
    ...bookWithoutId,
    isRead: !bookToUpdate.isRead,
  };

  try {
    await axios.put(`${API_URL}/${id}`, updatedBook);

    setBooks((prev) =>
      prev.map((book) =>
        book._id === id
          ? { ...book, isRead: !book.isRead }
          : book
      )
    );
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
  }
}, [books]);

  return (
    <div>
      <h1>Catálogo de Livros</h1>

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