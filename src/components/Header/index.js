import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart, Logo } from './styles';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
   return (
      <Container>
         <Logo to="/">
            <img src={logo} alt="React Shoes" />
         </Logo>
         <Cart to="/cart">
            <div>
               <strong>Meu Carrinho</strong>
               <span>{cartSize} itens</span>
            </div>
            <MdShoppingCart size={36} color="#fff" />
         </Cart>
      </Container>
   );
}
export default connect((state) => ({
   cartSize: state.cart.length,
}))(Header);
