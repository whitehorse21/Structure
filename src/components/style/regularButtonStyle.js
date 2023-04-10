import styled from "styled-components";

export const Styles = styled.div`
  .regular-button {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #ffffff;
    background: #1a1a1c;
    border-radius: 8px;
    padding: 18px 25px 19px 25px;
    cursor: pointer;
    border: solid 1px #1a1a1c;
    text-align: center;
    min-width: 70px;
    &:hover {
      color: #1a1a1c;
      background: #ffffff;
    }
  }
  .fit-button {
    float: left;
  }
  .sm-full-button {
    @media screen and (max-width: 992px) {
      float: none;
    }
    @media screen and (max-width: 768px) {
      float: none;
    }
  }
  .xs-full-button {
    @media screen and (max-width: 768px) {
      float: none;
    }
  }
`;
