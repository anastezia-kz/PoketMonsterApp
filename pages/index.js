
import PokemonList from "../components/PokemonList";

const Home = ({ pokemons }) => {
  return (
    <PokemonList pokemons={pokemons} />
  );
}

export default Home;

export const getStaticProps = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const pokemons = await res.json();
  
    return {
      props: {
        pokemons
      }
    };
};