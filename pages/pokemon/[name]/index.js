import { useRouter } from 'next/router';
import cardStyles from '../../../styles/Card.module.css';

const pokemon = ( {pokemon}) => {
  console.log(pokemon);

    const router = useRouter();
    const { name } = router.query

    return (
        <div className={cardStyles.Card}>
            <h3 className={cardStyles.Card_name}> Hello I am {name}</h3>
            <div className={cardStyles.Card_img}>
              <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className={cardStyles.Card_types}>
                {
                    pokemon.types.map((type, i) => {
                        return (
                            <div 
                              key={i} className={cardStyles.Card_type}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
                <div>
                    <p className="title">Weight: {pokemon.weight}</p>
                </div>
                <div>
                    <p>Height: {pokemon.height}</p>
                </div>
                <div>
                    <p>Abilities:</p>
                    {pokemon.abilities.map(ability => (
                      <p 
                        key={ability.ability.name}>
                          {ability.ability.name} 
                      </p>
                    ))}
                </div>
            </div>
    );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.name}`
  );

  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
};

export default pokemon;