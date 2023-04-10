import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  .coin-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 15px 10px;
    height: calc(100% - 30px);
    .main {
      display: flex;
      .coin {
        img {
          width: 45px;
        }
        padding-right: 8px;
      }
      .coin-title {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: #1a1a1c;
      }
      .price {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #5b616e;
      }
    }
    .status {
      display: flex;
      .status-icon {
        color: #1a1a1c;
        padding-right: 10px;
      }
      .percentage {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: #1a1a1c;
      }
    }
  }
`;
