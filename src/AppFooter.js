import React from "react";
import styled from "styled-components";

import UnderlineLink from "./UnderlineLink";

const AppFooter = props => {
  return (
    <>
      <script
        async
        data-uid="43dd8b2749"
        src="https://lineleader.ck.page/43dd8b2749/index.js"
      ></script>
      <script
        data-goatcounter="https://lineleader.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <Footer>
        <p>&copy; {new Date().getFullYear()} LineLeader</p>
        <p>
          Crafted with care by{" "}
          <UnderlineLink href="https://codegoalie.com">
            CodeGoalie
          </UnderlineLink>
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          LineLeader is in no way affiliated with the Walt Disney Company
        </p>
      </Footer>
    </>
  );
};

export default AppFooter;

const Footer = styled.div`
  padding: 10rem 3rem 3rem;
  color: lightgrey;
  font-size: 0.8rem;
  font-family: "Overpass", sans-serif;

  p {
    margin: 0.25rem;
  }
`;
