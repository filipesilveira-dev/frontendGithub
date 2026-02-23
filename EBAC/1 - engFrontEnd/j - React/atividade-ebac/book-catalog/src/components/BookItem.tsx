import { memo } from "react";
import type { BookType } from "../types/Book";
import { Book } from 'lucide-react';
import styles from "./BookItem.module.css";

type BookItemProps = {
  book: BookType;
  onDeleteBook: (id: string) => void;
  onChangeBookStatus: (book: BookType) => void;
};

function BookItem({
  book,
  onDeleteBook,
  onChangeBookStatus,
}: BookItemProps) {
  return (
    <li className={styles.li}>
      <div className={styles["book-div"]}>
        <Book/>
        <div><span>{book.name}</span> - <span>{book.author}</span></div>
      </div>

      <div className={styles["btn-div"]}>
        <button className={styles.button} onClick={() => book._id && onChangeBookStatus(book)}>
          {book.isRead ? "Lido ✅" : "Marcar como lido"}
        </button>

        <button className={styles.button} onClick={() => book._id && onDeleteBook(book._id)}>
          Remover
        </button>
      </div>
    </li>
  );
}

export default memo(BookItem);
