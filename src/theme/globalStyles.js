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
  width: 100%;
}

.App {
  text-align: center;
  padding: 2rem;
  max-width: 1280px;
  margin: auto;
  font-size: 1.25rem;
}

.nice-dates-popover {
  width: calc(100vw - 2rem);
  left: 1rem;
}

.date-range {
  display: flex;
}

@media (min-width: 632px) {
  .nice-dates-popover {
    left: calc((100vw - 632px) / 2);
  }
}

@media (max-width: 768px) {
  .App {
    padding: 1rem;
  }

  .nice-dates-popover {
    left: 1rem;
  }
}
`;
