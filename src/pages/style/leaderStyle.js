import styled from "styled-components";

export const Styles = styled.div`
  .leaders {
    display: flex;
    align-items: center;
    .asset-content {
      padding: 0px 120px;
      @media screen and (max-width: 1440px) {
        padding: 0px 50px;
      }
      @media screen and (max-width: 320px) {
        padding: 20px 0px;
      }
    }
  }
`;
