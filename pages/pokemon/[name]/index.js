import PokemonDetails  from '../../../components/PokemonDetails';
import Meta from '../../../components/Meta';

const Pokemon = ({ pokemon }) => {
  
    return (
      <>
       <Meta />
       <PokemonDetails pokemon={pokemon} />
      </> 
    );
};

export default Pokemon;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.name}`
  );
  const pokemon = await res.json();

  //fetching urls nested in objects  
  
  // const abilitiesInfo = await Promise.all(pokemon.abilities.map(ability => 
  //   fetch(ability.ability.url)
  //     .then(res => res.json())
  // ));

  return {
    props: {
      pokemon,
    },
  };
};

