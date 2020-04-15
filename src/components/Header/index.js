import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart, Logo } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
   return (
      <Container>
         <Logo to="/">
            <img src={logo} alt="React Shoes" />
         </Logo>
         <Cart to="/cart">
            <div>
               <strong>Meu Carrinho</strong>
               <span>3 itens</span>
            </div>
            <MdShoppingCart size={36} color="#fff" />
         </Cart>
      </Container>
   );
}
