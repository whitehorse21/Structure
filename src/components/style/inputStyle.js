import styled from "styled-components";

export const Styles = styled.div`
  input {
    background: #f5f6f7;
    border-radius: 8px;
    padding: 17px 20px;
    outline: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    border: 1px solid #f5f6f7;
    width: calc(100% - 40px);
    &::placeholder {
      color: #1a1a1c;
    }
    &:focus {
      border: 1px solid #2f70b5;
      &::placeholder {
        color: #8b939e;
      }
    }
  }
  .error {
    border: 1px solid #db5940;
  }
`;
