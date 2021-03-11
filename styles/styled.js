import styled, { css }  from 'styled-components';
import { typeStyles } from './typeStyles';

export const StyledCard = styled.div`
  display: flex;
  background: white;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
  margin: 50px;

  ${({main}) => main==='main' && css`
    cursor: pointer;
  `}

  @media (min-width: 600px) {
    flex-direction: row;
  }
  > * {
    padding: 20px;
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
