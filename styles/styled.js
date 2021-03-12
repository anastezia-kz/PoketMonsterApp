import styled, { css }  from 'styled-components';
import { typeStyles } from './typeStyles';

export const StyledCard = styled.div`
  display: flex;
  background: white;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
  margin: 50px 50px 0 50px;

  ${({main}) => main==='main' && css`
    cursor: pointer;
  `}

  > * {
    padding: 20px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PokemonType = styled.div`
  padding: 5px 10px;
  margin: 10px;
  border-radius: 5px;
  color: #fff;

  ${({ typeName }) =>  css`
    background: ${typeStyles[typeName]}
  `}
`;
