import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 10rem;

  margin-top: 0.5rem;
  padding: 0.35rem 0.25rem 0.25rem;
  border-radius: 0.5rem;
  border: none;

  font-size: 1rem;
  text-decoration: none;

  background: darkslateblue;
  color: floralwhite;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.25s ease-in-out;

  @media (max-width: 768px) {
    height: 3rem;
    width: 100%;
  }

  &:hover {
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    color: khaki;
  }
`;

export default Button;
