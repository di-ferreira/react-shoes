import React from 'react';
import { MdExpandMore, MdExpandLess, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
export default function Cart() {
   return (
      <Container>
         <ProductTable>
            <thead>
               <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <img
                        src="https://imgcentauro-a.akamaihd.net/500x500/93000902/tenis-adidas-8k-masculino-img.jpg"
                        alt="Tênis"
                     />
                  </td>
                  <td>
                     <strong>Tênis Preto Addidas</strong>
                     <span>R$129,90</span>
                  </td>
                  <td>
                     <div>
                        <button type="button">
                           <MdExpandLess size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={2} />
                        <button type="button">
                           <MdExpandMore size={20} color="#7159c1" />
                        </button>
                     </div>
                  </td>
                  <td>
                     <strong>R$ 258,80</strong>
                  </td>
                  <td>
                     <button type="button">
                        <MdDelete size={20} color="#7159c1" />
                     </button>
                  </td>
               </tr>
            </tbody>
         </ProductTable>
         <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
               <span>TOTAL</span>
               <strong>R$1920,28</strong>
            </Total>
         </footer>
      </Container>
   );
}