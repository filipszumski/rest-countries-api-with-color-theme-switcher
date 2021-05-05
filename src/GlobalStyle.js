import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.homepageItems}px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  margin: 0px auto;
  padding: 15px 30px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 15px 20px;
  } 
}
`;