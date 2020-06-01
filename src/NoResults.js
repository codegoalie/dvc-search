import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

const NoResults = props => {
  return (
    <NoteWrapper>
      <Note>
        Unable to find any stays. Please try again with more points or a shorter
        date range.
      </Note>
    </NoteWrapper>
  );
};

export default NoResults;

const NoteWrapper = styled.div`
  margin: 2rem;
`;

const Note = styled(ListItem)`
  padding: 2rem;
  text-align: center;
  background: lightyellow;
`;
