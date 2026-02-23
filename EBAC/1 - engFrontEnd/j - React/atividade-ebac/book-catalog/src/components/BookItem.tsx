import { memo } from "react";
import type { Book } from "../types/Book";

type BookItemProps = {
  book: Book;
  onDeleteBook: (id: string) => void;
  onChangeBookStatus: (id: string) => void;
};

function BookItem({
  book,
  onDeleteBook,
  onChangeBookStatus,
}: BookItemProps) {
  return (
    <li>
      <span>{book.name}</span> - <span>{book.author}</span>

      <div>
        <button onClick={() => book._id && onChangeBookStatus(book._id)}>
          {book.isRead ? "Lido ✅" : "Marcar como lido"}
        </button>

        <button onClick={() => book._id && onDeleteBook(book._id)}>
          Remover
        </button>
      </div>
    </li>
  );
}

export default memo(BookItem);
