import styled from 'styled-components';
import { flex } from '../../theme';

export const OrderDetailsWrapper = styled.div`
  background: white;
  box-shadow: ${props => props.theme.styles.boxShadow};
  color: ${props => props.theme.colors.darkGreen};
  padding: 20px 0;
  text-align: center;
  h2 {
    font-weight: 500;
    font-size: 28px;
  }
`;

export const ProductsSummary = styled.div`
  border-top: 1px solid #ccc;

  max-width: 500px;

  margin: 0 auto;
`;

export const ProductSummaryItem = styled.div`
  ${flex('row', 'space-between', 'center')};
  padding: 5px 0;
  color: ${props => props.theme.colors.darkGray};
`;

export const OrderTotal = styled.div`
  font-weight: 500;
  padding-top: 5px;
  border-top: 1px solid #ccc;
  ${flex('row', 'space-between', 'center')};
`;

export const AddressInfo = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  h4 {
    font-weight: 600;
  }
  p {
    color: ${props => props.theme.colors.darkGray};
  }
`;

export const OrderSeller = styled.div`
  ${flex('column', 'center', 'center')};
  margin: 0 auto;
  max-width: 200px;
  padding: 20px 0;
  & > span {
    border-radius: 50%;
  }
  & > h4 {
    font-size: 22px;
    font-weight: 500;
    color: ${props => props.theme.colors.darkGreen};
  }
  & > h5 {
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.colors.darkGray};
  }
`;
