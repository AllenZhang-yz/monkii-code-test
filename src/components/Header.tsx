import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/branding/monkii-logo.png';
import { IRootState } from '../reducers';

const HeaderWrapper = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #a9b0ab;
  padding: 0 30px;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 80px;
  height: auto;
`;

const ShoppingCart = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
  align-items: center;
`;

const TotalPrice = styled.div`
  margin-left: 10px;
  width: 140px;
`;

const Header = () => {
  const history = useHistory();
  const totalPrice = useSelector<IRootState, number>(
    (state) => state.totalPrice.totalPrice
  );
  return (
    <HeaderWrapper onClick={() => history.push('/')}>
      <Img src={logo} alt="monkii-logo" />
      <ShoppingCart>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
      </ShoppingCart>
    </HeaderWrapper>
  );
};

export default Header;
