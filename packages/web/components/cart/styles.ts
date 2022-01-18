import styled from 'styled-components';
import { flex } from '../../theme';

export const CartColumn = styled.div`
  flex: 1;
  position: relative;
`;

export const CartWrapper = styled.div`
  /* margin-top: 10px; */
  top: 90px;
  margin-top: 10px;
  background: white;
  box-shadow: ${props => props.theme.styles.boxShadow};
  padding: ${props => props.theme.layout.section};
  position: sticky;
`;

export const CartTitle = styled.h3`
  font-size: 18px;
  color: ${props => props.theme.colors.darkGreen};
`;

export const CartItems = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  width: 100%;
  color: ${props => props.theme.colors.darkGreen};
  padding: 5px 0;
  h4 {
    margin-left: 10px;
    flex: 1;
    font-weight: 600;
  }
`;

export const CartEmptyMsg = styled.h4`
  color: ${props => props.theme.colors.darkGreen};
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
`;

export const CartRemove = styled.button`
  ${flex('row', 'center', 'center')};
  border: none;
  margin-left: 10px;
  cursor: pointer;
  background: none;
  svg {
    color: ${props => props.theme.colors.red};
  }
`;

export const CartShippingInfo = styled.p`
  text-align: right;
  color: ${props => props.theme.colors.darkGreen};
  margin-right: 25px;
  ${flex('row', 'space-between', 'center')}
  span {
  }
`;

export const CartCheckoutText = styled.span`
  margin-right: 10px;
`;
