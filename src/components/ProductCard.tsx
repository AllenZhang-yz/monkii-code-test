import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface IProductCard {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
}

const ProductCardWrapper = styled.div`
  width: 190px;
  height: 239px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 277px;
  }
`;

const Img = styled.img`
  width: 70%;
  height: 60%;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.div`
  font-size: 22px;
  align-self: flex-start;
  margin-bottom: 10px;
`;

const Price = styled.div`
  align-self: flex-start;
`;

const AdjustNum = styled.div`
  align-self: flex-end;
  display: flex;
`;
const AdjustBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: 0 5px;
  border: none;
  outline: none;
  user-select: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const NumAdded = styled.div`
  width: 25px;
  text-align: center;
`;

const ProductCard: FC<IProductCard> = ({ id, imgUrl, name, price }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [addToCartNum, setAddToCartNum] = useState(0);

  const handleAdd = () => {
    setAddToCartNum((prev) => prev + 1);
    dispatch({
      type: 'ADD',
      payload: price,
    });
  };

  const handleReduce = () => {
    setAddToCartNum((prev) => prev - 1);
    dispatch({
      type: 'REDUCE',
      payload: price,
    });
  };

  return (
    <ProductCardWrapper>
      <Img
        src={imgUrl}
        alt={name}
        onClick={() => history.push(`/product/${id}`)}
      />
      <Name>{name}</Name>
      <Price>${price}</Price>
      <AdjustNum>
        <AdjustBtn onClick={handleReduce} disabled={addToCartNum <= 0}>
          -
        </AdjustBtn>
        <NumAdded>{addToCartNum}</NumAdded>
        <AdjustBtn onClick={handleAdd}>+</AdjustBtn>
      </AdjustNum>
    </ProductCardWrapper>
  );
};

export default ProductCard;
