import { useState } from "react";

type Color = {
  text: string;
  bg: string;
};

export const colors = [
    { text: "text-black", bg: "bg-white" },
    { text: "text-red-500", bg: "bg-black" },
    { text: "text-green-500", bg: "bg-yellow-200" },
    { text: "text-blue-500", bg: "bg-green-200" },
  ];

export const useStyleSwitcher = (initialColors: Color[])=>{
    const [currentStyle, setCurrentStyle] = useState<Color>(initialColors[0])

  const changeStyle = () => {
    let newIndex;

    // O "do" executa pelo menos uma vez
    do {
      newIndex = Math.floor(Math.random() * colors.length);
      // O "while" checa: se a cor for igual à atual, repete o sorteio
    } while (colors[newIndex].text === currentStyle.text);

    // Atualiza o estado com a cor escolhida
    setCurrentStyle(colors[newIndex]);
  };
    return {currentStyle, changeStyle}
}