import { useRouter } from 'next/router';
import PokemonDetails  from '../../../components/PokemonDetails';

const Pokemon = ( {pokemon, abilitiesInfo}) => {

  console.log({abilitiesInfo})

    return (
       <PokemonDetails pokemon={pokemon} />
    );
};

export default Pokemon;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.name}`
  );
  const pokemon = await res.json();
  
  const abilitiesInfo = await Promise.all(pokemon.abilities.map(ability => 
    fetch(ability.ability.url)
      .then(res => res.json())
  ));
//whith this we can fetch urls nested in objects

  return {
    props: {
      pokemon,
      abilitiesInfo
    },
  };
};

