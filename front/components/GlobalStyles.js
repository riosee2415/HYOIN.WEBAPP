import { createGlobalStyle, css } from "styled-components";

const fontStyle = css``;

const GlobalStyles = createGlobalStyle`
  ${fontStyle}

  body {
    font-family: 'Pretendard' , sans-serif;
  }

  a {
    color : inherit;
    text-decoration : none;
  }

  textarea {
    resize: none;
    outline: none;
  }

  input {
    outline: none;
  }
  
  a:hover {
    color : inherit;
  }
  
  @media (max-width : 576px) {
    html { 
      font-size : 14px;
    }
  }
`;

export default GlobalStyles;
