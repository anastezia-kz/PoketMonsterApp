import PokemonList from '../components/PokemonList';
import Meta from '../components/Meta';

const Home = ({ pokemons }) => {

  return (
    <>
      <Meta />
      <PokemonList pokemons={pokemons} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const pokemons = await res.json();
    
    return {
      props: {
        pokemons,
      }
    };
};