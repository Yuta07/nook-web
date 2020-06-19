import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: 1.5;
    letter-spacing: 0.05em;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-size: 16px;
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, Helvetica Neue,Segoe UI,Hiragino Kaku Gothic ProN,Hiragino Sans,ヒラギノ角ゴ ProN W3,Arial,メイリオ,Meiryo,sans-serif;
    color: #2f3640;
  }

  a {
    color: #2f3640;

    &:hover {
      transition: 0.3s;
    }
  }
`;
