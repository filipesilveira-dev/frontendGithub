// Importação do componente filho
import BookItem from "./BookItem";
// Importação da interface criada
import type { BookType } from "../types/Book";
// Importação do arquivo de estilização via CSS modules
import styles from "../modules/BookList.module.css";

// Tipagem das props passadas pelo componente pai <App/>
type BookListProps = {
  // Estado books tipado como um array composto por itens de acordo com BookType
  books: BookType[];
  // Função que espera receber como argumento um id tipado como string
  onDeleteBook: (id: string) => void;
  // Função que espera receber como argumento um book tipado de acordo com BookType
  onChangeBookStatus: (book: BookType) => void;
};

// Declaração da função BookList com suas props, recebidas do compoennte pai, tipaadas de acordo com BookListProps acima
export const BookList = ({books, onDeleteBook, onChangeBookStatus}: BookListProps) => {
  // Caso não haja nenhum livro cadastrado, será retornado um parágrafo indicando que "Nenhum livro foi registrado"
  if (books.length === 0) {
    return <p>Nenhum livro foi registrado.</p>;
  }

  // Caso haja algum livro
  return (
    // Uma lista será retornada
    <ul className={styles.ul}>
      {/* Será feito um map() no estado passado via props (array books), onde, para cada item presente no array, será renderizado um componente BookItem */}
      {books.map((item) => (
        <BookItem
          // key é utilizada pela react para identificar cada item de um array
          key={item._id}
          // item (variável de escopo) representa um objeto (livro). Passado via props ao componente filho BookItem
          book={item}
          // Função passada via props (vinda de App) ao componente filho BookItem
          onDeleteBook={onDeleteBook}
           // Função passada via props (vinda de App) ao componente filho BookItem
          onChangeBookStatus={onChangeBookStatus}
        />
      ))}
    </ul>
  );
};

