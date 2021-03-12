import cardStyles from '../styles/Card.module.css';
import { StyledCard, StyledIntro, PokemonType } from '../styles/styled';

const PokemonDetails = ({ pokemon }) => {
   return (
    <StyledCard>
        <StyledIntro>
            <h3 className={cardStyles.Card_name}> Hello, I am {pokemon.name} </h3>
            <div className={cardStyles.Card_img}>
                <img src={pokemon.sprites.front_default} alt="" />
                <img src={pokemon.sprites.back_default} alt="" />
            </div>
        </StyledIntro>
        <div className={cardStyles.Card_types}>
          {
            pokemon.types.map((type, i) => {
                return (
                    <PokemonType typeName={type.type.name} key={i} >
                        {type.type.name}
                    </PokemonType>
                )
            })
          }
        </div>
        <StyledIntro>
            <p>Weight: {pokemon.weight}</p>
        
            <p>Height: {pokemon.height}</p>
        </StyledIntro>    
        <div>
              <p>Abilities:</p>
              {pokemon.abilities.map(ability => (
                <ul 
                  key={ability.ability.name}>
                    <li>{ability.ability.name}</li> 
                </ul>
              ))}
        </div>
      </StyledCard>
   )
};

export default PokemonDetails;