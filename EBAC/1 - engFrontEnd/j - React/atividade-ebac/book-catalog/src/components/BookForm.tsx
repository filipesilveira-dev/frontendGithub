import { useState } from "react";
import type { BookType } from "../types/Book";
import styles from "./BookForm.module.css";

type BookFormProps = {
  onAddBook: (book: BookType) => void;
};

export const BookForm = ({ onAddBook }: BookFormProps) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
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
    <form 
    className={styles.form}
    onSubmit={handleSubmit}>
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

      <button className={styles.button} type="submit">Adicionar</button>
    </form>
  );
};