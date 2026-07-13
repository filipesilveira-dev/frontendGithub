interface MessageProps {
  textColorClass?: string;
}

export default function Message({ textColorClass }: MessageProps) {
  return (
    <div className="flex flex-col justify-between items-center gap-2">
      <h1 className={`font-bold text-2xl ${textColorClass}`}>Exemplo DevOps</h1>
      <p className={`text-center ${textColorClass}`}>
        Exercício criado para exemplificar o funcionamento de um Pipeline CI/CD.
        O projeto contém:
      </p>
      <ul className={`text-center ${textColorClass}`}>
        <li>
          - <strong>Custom Hook:</strong> contém uma função que altera
          estilização de elementos HTML
        </li>
        <li>
          - <strong>Teste do hook:</strong> teste realizado para verificar o
          funcionamento do custom hook
        </li>
        <li></li>
      </ul>
    </div>
  );
}
