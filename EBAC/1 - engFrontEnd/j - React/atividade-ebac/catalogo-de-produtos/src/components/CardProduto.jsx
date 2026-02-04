import { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
    padding: .75rem;
    background-color: #e2e8f0;
    border-radius: 6px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
              0 1px 2px -1px rgba(0, 0, 0, 0.1);
    margin-left: auto;
    margin-right: auto;
    width: 100%
    height: 100%;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ItemImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
`;

const ItemTitle = styled.h5`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const AddToCart = styled.button`
  background-color: ${props => props.adicionado? '#198754':'#6c757d'}; 
  padding: 0.25rem; 
  border-radius: 0.375rem; 
  color: #ffffff; 
  font-size: 0.875rem; 
  line-height: 1.25rem; 
  border: none;

  &:hover {
    background-color: #64748b; 
    cursor: pointer; 
  }
`;

const PriceContainer = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const BoldTopic = styled.span`
  font-weight: 700;
`;

const DescriptionContainer = styled(PriceContainer)`
  text-align: justify;
`;

function ProdutoCard(props) {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <ItemContainer>
      <Item>
        <ItemImg src={props.img} alt="..." />
        <ItemContent>
          <ItemTitle>{props.title}</ItemTitle>
          <PriceContainer className="text-xs">
            <BoldTopic>Preço:</BoldTopic> R$ {Number(props.price)}
          </PriceContainer>
          <DescriptionContainer>
            <BoldTopic>Descrição:</BoldTopic> {props.description}
          </DescriptionContainer>
          <AddToCart
            adicionado={adicionado}
            onClick={() => setAdicionado(prev => !prev)}
          >
            {adicionado? "Adicionado!" : "Adicionar ao Carrinho"}
          </AddToCart>
        </ItemContent>
      </Item>
    </ItemContainer>
  );
}
export default ProdutoCard;
