import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  min-height: 500px;
  padding: ${props => props.theme.layout.section};
`;

export const HeroContent = styled.div`
  flex: 1;
  width: 50%;
  align-self: center;
  justify-self: center;
  h2 {
    font-family: 'Abril Fatface', cursive;
    font-size: 64px;
    color: ${props => props.theme.colors.lightGreen};
    margin-bottom: 10px;
  }
  h3 {
    color: ${props => props.theme.colors.darkGreen};
    font-size: 24px;
    font-weight: 500;
  }
`;
export const HeroImage = styled.div`
  flex: 1;
  width: 50%;
  position: relative;
`;
