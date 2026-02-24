// Importação do componente de alta ordem
import { memo } from "react";
// Importação da interface BookType
import type { BookType } from "../types/Book";
// Importação de ícone de biblioteca de ícones para React
import { Book } from 'lucide-react';
// Importação do arquivo de estilização via CSS modules
import styles from "../modules/BookItem.module.css";

// Tipagem das props recebidas em BookItem
type BookItemProps = {
  // Eseprado um item tipado de acordo com BookType
  book: BookType;
  // Esperada uma função com um argumento de id tipado como string
  onDeleteBook: (id: string) => void;
  // Esperada uma função com argumento um item do array tipado como BookType
  onChangeBookStatus: (book: BookType) => void;
};

// Declaração de BookItem com suas props tipadas de acordo com BookItem acima
function BookItem({book, onDeleteBook, onChangeBookStatus}: BookItemProps) {
  return (
    // A função retorna um <li> estilizado com CSS modules
    <li className={styles.li}>
      <div className={styles["book-div"]}>
        {/* Ícone de livro importado de biblioteca */}
        <Book/>
        {/* Título do livro e nome do autor */}
        <div><span>{book.name}</span> - <span>{book.author}</span></div>
      </div>

      <div className={styles["btn-div"]}>
        {/* Botão que chama a função passada via props para alterar status do livro */}
        <button className={styles.button} onClick={() => onChangeBookStatus(book)}>
          {/* Operador ternário verifica o status do livro: se isRead for true, então aparecerá o que está à esquerda dos pontos. Caso contrário, aparecerá o que está à direita */}
          {book.isRead ? "Lido ✅" : "Marcar como lido"}
        </button>

        {/* Botão que chama a função passada via props para deletar o livro. Filtro lógico necessário, pois, como _id? é opcional em BookType, ele pode ser "undefined", gerando erro no typescript. Com esse filtro, nos asseguramos que o _id existe */}
        <button className={styles.button} onClick={() => book._id && onDeleteBook(book._id)}>
          Remover
        </button>
      </div>
    </li>
  );
}

// Evita que o componente seja re-renderizado caso suas props não mudem
export default memo(BookItem);
