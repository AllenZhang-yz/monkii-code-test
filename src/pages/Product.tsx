import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { productsData } from './ProductsList';

type IdParamType = {
  id: string;
};

const ProductWrapper = styled.div`
  padding: 30px;
  display: flex;
`;

const Img = styled.img`
  width: 400px;
  height: 500px;
  margin-right: 30px;
`;

const Price = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
`;

const SingleProduct = () => {
  const { id } = useParams<IdParamType>();
  const currentProduct = productsData.find((p) => p.id === parseInt(id));
  if (!currentProduct) {
    return <div>Sorry, no such product available!</div>;
  }
  const { imgUrl, sizes, price, name } = currentProduct;
  console.log(currentProduct);
  return (
    <ProductWrapper>
      <Img src={imgUrl} alt={name} />
      <div>
        <h1>{name}</h1>
        <Price>Price: ${price}</Price>
        <div>
          Available Sizes:{' '}
          {sizes.map((size) => (
            <span key={size}>{size} &nbsp;</span>
          ))}
        </div>
      </div>
    </ProductWrapper>
  );
};

export default SingleProduct;
