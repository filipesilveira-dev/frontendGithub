import BookItem from "./BookItem";
import type { Book } from "../types/Book";

type Props = {
  books: Book[];
  onDeleteBook: (id: string) => void;
  onChangeBookStatus: (book: Book) => void;
};

export const BookList = ({
  books,
  onDeleteBook,
  onChangeBookStatus,
}: Props) => {
  if (books.length === 0) {
    return <p>Nenhum livro foi registrado.</p>;
  }

  return (
    <ul>
      {books.map((item) => (
        <BookItem
          key={item._id}
          book={item}
          onDeleteBook={onDeleteBook}
          onChangeBookStatus={onChangeBookStatus}
        />
      ))}
    </ul>
  );
};

