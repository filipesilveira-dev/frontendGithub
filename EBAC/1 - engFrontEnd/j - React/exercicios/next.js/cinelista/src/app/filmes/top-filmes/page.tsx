import Title from "@/app/components/Title";

// Componente que será renderizado ao ser clicado no link do menu de navegação (navbar) "Top filmes"
const TopFilmes = () => {
  return (
    <>
        {/* Componente Title reaproveitado */}
      <Title title="Top Filmes" />
    </>
  );
};

export default TopFilmes;
