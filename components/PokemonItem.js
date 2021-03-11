import Link from 'next/link';
import cardStyles from '../styles/Card.module.css';
import { StyledCard } from '../styles/styled';


const PokemonItem = ({ pokemon }) => {
    return (
        <Link href={`/pokemon/${pokemon.name}`}>
            <StyledCard main="main">
                <div className={cardStyles.Card_name}>
                    {pokemon.name}
                </div>
            </StyledCard>
        </Link>
    );
};

export default PokemonItem;
