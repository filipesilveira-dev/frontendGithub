import { useState } from "react";
import type { Book } from "../types/Book";

type BookFormProps = {
  onAddBook: (book: Book) => void;
};

export const BookForm = ({ onAddBook }: BookFormProps) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !author) return;

    onAddBook({
      name,
      author,
      isRead: false,
    });

    setName("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do livro"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
};