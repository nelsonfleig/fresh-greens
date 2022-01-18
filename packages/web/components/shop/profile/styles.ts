import styled from 'styled-components';
import { flex } from '../../../theme';

export const SellerProfileWrapper = styled.div`
  margin-top: 10px;
  background: white;
  box-shadow: ${props => props.theme.styles.boxShadow};
  padding: ${props => props.theme.layout.section};
  flex: 2;
`;

export const SellerImageContainer = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: ${props => props.theme.styles.borderRadius};
  border: 1px solid ${props => props.theme.colors.lightGreen};
`;

export const SellerInfo = styled.div`
  ${flex('row', 'flex-start', 'center')}
  padding-bottom: 30px;
  margin-bottom: 50px;
  border-bottom: 1px solid #ccc;
`;

export const SellerInfoContent = styled.div`
  margin-left: 20px;
  h2 {
    color: ${props => props.theme.colors.darkGreen};
    font-size: 28px;
    font-weight: 600;
  }
  p {
    color: ${props => props.theme.colors.darkGray};
    margin-bottom: 8px;
  }
  span {
    color: ${props => props.theme.colors.darkGreen};
    font-weight: 500;
  }
`;

export const SellerPageLayout = styled.div`
  display: flex;
  gap: 10px;
`;
