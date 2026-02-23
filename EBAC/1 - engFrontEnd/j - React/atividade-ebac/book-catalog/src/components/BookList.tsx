import BookItem from "./BookItem";
import type { BookType } from "../types/Book";

type Props = {
  books: BookType[];
  onDeleteBook: (id: string) => void;
  onChangeBookStatus: (book: BookType) => void;
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

