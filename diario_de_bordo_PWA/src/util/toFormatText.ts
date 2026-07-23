export function toFormatText(text: string) {
  if (!text) return text;
  // Transforma a primeira letra em maiúscula e mantém o restante inalterado
  return text.charAt(0).toUpperCase() + text.slice(1);
}
