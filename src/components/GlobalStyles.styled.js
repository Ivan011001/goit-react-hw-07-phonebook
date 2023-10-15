import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
      display: flex;
      justify-content: center;
      background-color: floralwhite;
    }
    button {
      background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
      border: 0;
      border-radius: 12px;
      color: #FFFFFF;
      font-weight: 500;
      outline: transparent;
      padding: 8px 16px;
      text-align: center;
      transition: box-shadow .2s ease-in-out;
      
      &:focus, &:hover {
         box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
      }
    }
    input{
      padding: 4px 12px;
    }
`;
