import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body {
  font-size: 8pt;
  background: linear-gradient(127deg, #29323c, black);
  color: white;
  width: 100%;
  font-family: 'Kreon', serif;
  min-height: 100vh;
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

.ReactModal__Content {
  background: white;
  color: black;
  max-width: 800px;
  font-size: 1.5rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.02);
}

.ReactModal__Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transform: translateY(-40px);
  transition: all 250ms ease-in-out;
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
}

.ReactModal__Overlay--after-open{
  opacity: 1;
  transform: translateY(0px);
}

.ReactModal__Overlay--before-close{
  opacity: 0;
  transform: translateY(-40px);
}

@media (max-width: 768px) {
  .App {
    padding: 1rem;
  }

  .nice-dates-popover {
    left: 1rem;
  }

  .ReactModal__Content {
    margin: auto 1rem;
    padding: 1rem;
    font-size: 1rem;
  }
}
`;
