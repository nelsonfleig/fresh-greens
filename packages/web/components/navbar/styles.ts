import styled from 'styled-components';
import { flex } from '../../theme';

export const NavHeader = styled.header`
  height: 80px;
  width: 100%;
  box-shadow: ${props => props.theme.styles.boxShadow};
  background: white;
  position: sticky;
  top: 0;
  ${flex('row', 'center', 'center')}
`;

export const NavContent = styled.nav`
  ${flex('row', 'center', 'center')}
  max-width: 1200px;
  width: 100%;
  padding: 0 ${props => props.theme.layout.section};
  & > a {
    margin-right: auto;
  }s
`;

export const NavLogo = styled.a`
  ${flex('row', 'center', 'center')}
  cursor: pointer;
  h1 {
    margin-left: 5px;
    font-weight: 600;
    color: ${props => props.theme.colors.darkGreen};
    font-family: 'Itim', sans-serif;
  }
`;

export const NavLinks = styled.ul`
  ${flex('row', 'center', 'center')}
`;

export const NavLink = styled.li`
  margin-left: 20px;
`;

export const NavLogin = styled.a`
  display: block;
  background: ${props => props.theme.colors.red};
  padding: 7px 20px;
  color: white;
  border-radius: ${props => props.theme.styles.borderRadius};
  box-shadow: ${props => props.theme.styles.boxShadow};
  transition: ${props => props.theme.styles.transition};
  &:hover {
    background: ${props => props.theme.colors.redHover};
    cursor: pointer;
  }
`;

export const NavLogout = styled.button`
  display: block;
  background: ${props => props.theme.colors.red};
  padding: 7px 20px;
  color: white;
  border-radius: ${props => props.theme.styles.borderRadius};
  box-shadow: ${props => props.theme.styles.boxShadow};
  transition: ${props => props.theme.styles.transition};
  border: none;
  &:hover {
    background: ${props => props.theme.colors.redHover};
    cursor: pointer;
  }
`;
