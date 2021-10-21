import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
  }
  html{
    scroll-behavior: smooth;
  }
  body {
    background: ${theme.palette.background.paper};
    font-family: 'Inter', sans-serif;
    color: ${theme.palette.text.primary};
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  input {
  font-size: 14px !important;
  }
  label {
    font-size: 14px !important;
  }
`;
