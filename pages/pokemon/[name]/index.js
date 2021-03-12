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

export const getStaticProps = async (context) => {
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

export const getStaticPaths = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const pokemons = await res.json();

  const names = pokemons.results.map(poke => poke.name);

  // let nextUrl = pokemons.next;

  // while (nextUrl) {
  //   const nextResult = await fetch(nextUrl)
  //   .then(res => res.json());

  //   nextUrl = nextResult.next;
  //   const allNames = nextResult.results.map(poke => poke.name);
  //   names.push(...allNames);
  // }

  const paths = names.map(pokeName => ({ 
    params:{ 
      name: pokeName 
    }
  }));

  return {
    paths,
    fallback: false,
  };
};
