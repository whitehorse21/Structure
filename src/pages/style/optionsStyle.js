import styled from "styled-components";

export const Styles = styled.div`
  .options {
    display: flex;
    align-items: center;
    .panel {
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      padding: 90px 75px;
      @media screen and (max-width: 600px) {
        padding: 20px 10px;
      }
      .options-content {
        padding: 35px 50px;
        @media screen and (max-width: 600px) {
          padding: 35px 0px;
        }
        .subtitle {
          text-align: center;
        }
      }
      .form-controls {
        display: flex;
        align-items: center;
        @media screen and (max-width: 600px) {
          display: block;
        }
        .control-item {
          padding: 0px 8px;
          @media screen and (max-width: 600px) {
            padding: 8px 0px;
          }
        }
      }
    }
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
