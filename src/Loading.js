import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingMessage>
      <CubeGrid size="100px" color="rgba(255,255,255,0.15)" />
    </LoadingMessage>
  );
};

export default Loading;

const LoadingMessage = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  margin: auto;
  width: max-content;
`;

const CubeGrid = ({ color, size }) => {
  return (
    <Spinner size={size}>
      <Cube1 color={color} />
      <Cube2 color={color} />
      <Cube3 color={color} />
      <Cube4 color={color} />
      <Cube5 color={color} />
      <Cube6 color={color} />
      <Cube7 color={color} />
      <Cube8 color={color} />
      <Cube9 color={color} />
    </Spinner>
  );
};

const Spinner = styled.div`
  position: relative;
  margin: 100px auto;
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
`;

const grid = keyframes`
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
`;

const Cube = styled.div`
  width: 33%;
  height: 33%;
  background-color: ${props => getColor(props.color)};
  float: left;
  animation: ${grid} 1.3s infinite ease-in-out;
`;

const Cube1 = styled(Cube)`
  animation-delay: 0.2s;
`;
const Cube2 = styled(Cube)`
  animation-delay: 0.3s;
`;
const Cube3 = styled(Cube)`
  animation-delay: 0.4s;
`;
const Cube4 = styled(Cube)`
  animation-delay: 0.1s;
`;
const Cube5 = styled(Cube)`
  animation-delay: 0.2s;
`;
const Cube6 = styled(Cube)`
  animation-delay: 0.3s;
`;
const Cube7 = styled(Cube)`
  animation-delay: 0s;
`;
const Cube8 = styled(Cube)`
  animation-delay: 0.1s;
`;
const Cube9 = styled(Cube)`
  animation-delay: 0.2s;
`;

const getSize = size => size || "40px";

const getColor = color => color || "#333";
