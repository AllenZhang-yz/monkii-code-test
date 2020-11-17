import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import mockData from '../assets/json/products.json';

const ProductListWrapper = styled.div`
  padding: 30px;
`;

const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectWrapper = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;
`;

const ProductCards = styled.div`
  margin-top: 30px;
  border: 1px solid #a9b0ab;
  padding: 25px 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const productsData = mockData.products.map((product) => ({
  ...product,
  imgUrl: `/images/${product.image}`,
}));

const ProductsList = () => {
  const [orderBy, setOrderBy] = useState('low-to-high');
  const [filterBy, setFilterBy] = useState('All');
  const sizes = ['All', 'S', 'M', 'L', 'XL'];

  return (
    <ProductListWrapper>
      <h1>Products</h1>
      <ProductsHeader>
        <div>{productsData.length} items</div>
        <SelectWrapper>
          <div>
            <label htmlFor="order-by-price">Order by: </label>
            <select
              name="order-by-price"
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="low-to-high">Price - Low to High</option>
              <option value="high-to-low">Price - High to Low</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-by-size">Filter by size: </label>
            <select
              name="filter-by-size"
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </SelectWrapper>
      </ProductsHeader>
      <ProductCards>
        {productsData
          .sort(
            orderBy === 'low-to-high'
              ? (a, b) => a.price - b.price
              : (b, a) => a.price - b.price
          )
          .filter((p) =>
            filterBy === 'All' ? p : p.sizes.indexOf(filterBy) > -1
          )
          .map(({ imgUrl, name, price, id }) => (
            <ProductCard
              key={id}
              id={id}
              imgUrl={imgUrl}
              name={name}
              price={price}
            />
          ))}
      </ProductCards>
    </ProductListWrapper>
  );
};

export default ProductsList;
