import styled from 'styled-components';
import { flex } from '../../../theme';

export const FileButton = styled.label`
  width: auto;
  padding: 7px 20px;
  border: 1px solid ${props => props.theme.colors.darkGreen};
  align-self: flex-start;
  border-radius: ${props => props.theme.styles.borderRadius};
  cursor: pointer;
  span {
    color: gray;
  }
`;

export const FileName = styled.span`
  margin-left: 5px;
`;

export const FileWrapper = styled.div`
  ${flex('row', 'flex-start', 'center')}
`;
