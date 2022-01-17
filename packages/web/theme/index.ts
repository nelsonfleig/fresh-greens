import { createGlobalStyle, DefaultTheme, css } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    // Color Palette
    darkGreen: '#264653',
    lightGreen: '#73CB51',
    red: '#F57656',
    yellow: '#e9c46a',
    orange: '#f4a261',
    darkGray: '#555',
    offWhite: '#f9f9f9',
    // Hover
    redHover: '#E76F51',
    redForbidden: '#B5573F',
  },
  layout: {
    maxWidth: '1200px',
    section: '20px',
  },
  styles: {
    transition: 'all .3s ease-in-out',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  },
};

export const flex = (direction: string, justify: string, align: string) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

  }

  html,
  body,
  #__next {
    min-height: 100%;
    height: 100%;
    font-size: 15px;
  }

  button {
    font-size: 15px;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
