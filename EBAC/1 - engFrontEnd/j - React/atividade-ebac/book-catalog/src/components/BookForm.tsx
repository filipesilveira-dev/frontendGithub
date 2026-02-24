// Importação do hook
import { useState } from "react";
// Importação da interface criada BookType
import type { BookType } from "../types/Book";
// Importação da estilização CSS modules
import styles from "../modules/BookForm.module.css";

// Tipagem da props de BookForm
type BookFormProps = {
  // É esperado uma função e que ela receba como argumento book tipado de acordo com BookType
  onAddBook: (book: BookType) => void;
};

// Função BookForm recebe props (onAddBook) tipada de acordo com BookFormProps (tipagem realizada logo acima)
export const BookForm = ({ onAddBook }: BookFormProps) => {
  // Estados que recebem as informações inseridas pelo usuário (são esperadas strings)
  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  // Função criada para lidar com o comportamento padrão de um formulário ao ser enviado. É esperado um evento de submit tipado como "React.SubmitEvent<HTMLFormElement>"
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    // Previne que a página seja recarregada
    e.preventDefault();

    // Peuqena validação: caso seja enviado um formulário sem o nome do livro ou sem o nome do autor, nada será retornado
    if (!name || !author) return;

    // Executa a função passada via props onAddBook, passando como argumento dados tipados na origem da função de acordo com BookType: name, author e isRead. Se algum desses faltasse, acusaria erro (_id está em BookType referido como opcional. Caso contrário também acusaria erro aqui)
    onAddBook({
      name,
      author,
      isRead: false,
    });

    // Limpa os estados, possibilitando que outros títulos e autores sejam inseridos
    setName("");
    setAuthor("");
  };

  return (
    <form 
    // Estilização utilizando css modules
    className={styles.form}
    // ao evento de submit do formulário, chama a função handleSubmit
    onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do livro"
        // Especifica o estado name como o que receberá o que for inserido no input
        value={name}
        // ao evento de mudança no input, será atribuído ao estado determinado em value o que foi inserido nesse input
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Autor"
        // Especifica o estado author como o que receberá o que for inserido no input
        value={author}
        // ao evento de mudança no input, será atribuído ao estado determinado em value o que foi inserido nesse input
        onChange={(e) => setAuthor(e.target.value)}
      />

      {/* Estilização com css modules */}
      <button className={styles.button} type="submit">Adicionar</button>
    </form>
  );
};