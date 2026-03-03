import Title from "@/app/components/Title";

// Componente que será renderizado ao ser clicado no link do menu de navegação (navbar) "Populares"
const FilmesPopulares = () => {
  return (
    <>
        {/* Componente Title reaproveitado */}
      <Title title="Filmes Populares" />
    </>
  );
};

export default FilmesPopulares;
