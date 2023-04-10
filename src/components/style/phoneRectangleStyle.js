import styled from "styled-components";

export const Styles = styled.div`
  .phone-rectangle {
    width: 276px;
    height: 598px;
    border: 2px solid #1a1a1c;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
    border-radius: 28px;
    @media screen and (min-width: 1040px) {
      width: 295px;
      height: 639px;
    }
    @media screen and (max-width: 740px) {
      width: 280px;
      height: 575px;
    }
  }
`;
