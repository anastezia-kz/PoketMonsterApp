import Link from 'next/link';
import cardStyles from '../styles/Card.module.css';

const PokemonItem = ({ pokemon }) => {
    return (
        <Link href={`/pokemon/${pokemon.name}`}>
            <a className={cardStyles.Card}>
            <div className={cardStyles.Card_name}>
                {pokemon.name}
            </div>
            </a>
        </Link>
    );
};

export default PokemonItem;
