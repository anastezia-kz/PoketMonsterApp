import styled, { css }  from 'styled-components';
import { typeStyles } from './typeStyles';

export const StyledCard = styled.div`
  display: flex;
  background: white;
  justify-content: space-around;
  flex-direction: column;
  border: 2px solid red;
  border-radius: 10px;
  padding: 15px;
  margin: 50px 50px 0 50px;
  box-shadow: 0 10px 10px rgba(0,0,0,0.15);

  ${({main}) => main==='main' && css`
    cursor: pointer;
    position: relative;
    transition: box-shadow 500ms;

    &:hover {
      box-shadow: 10px 15px 15px 10px rgba(0,0,0,0.3);
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
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
