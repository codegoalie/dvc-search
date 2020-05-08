import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body {
  font-size: 8pt;
  background-color: #282c34;
  color: white;
}

.App {
  text-align: center;
  padding: 2rem;
  max-width: 1280px;
  margin: auto;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .App {
    padding: 1rem;
  }
}
`;
