import styled from "styled-components";

export const Styles = styled.div`
  .tabs {
    display: flex;
    padding-bottom: 25px;
    @media screen and (max-width: 600px) {
      overflow: scroll;
    }
    .tab {
      font-family: InterMed;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.025em;
      font-feature-settings: "pnum" on, "onum" on;
      color: #5b616e;
      margin-right: 40px;
      white-space: nowrap;
      cursor: pointer;
    }
    .active {
      color: #1a1a1c;
      border-bottom: solid 2px #1a1a1c;
      font-weight: 600;
    }
  }
`;
