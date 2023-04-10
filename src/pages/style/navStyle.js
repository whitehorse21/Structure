import styled from "styled-components";

export const Styles = styled.div`
  .nav {
    .banner {
      background: #1a1a1c;
      font-family: InterMed;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #ffffff;
      padding: 10px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 22px;
        padding-left: 10px;
        cursor: pointer;
      }
    }
    .header {
      padding: 18px 130px;
      background: #f5f6f7;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 960px) {
        padding: 18px 40px;
      }
      @media screen and (max-width: 320px) {
        padding: 18px 20px;
      }
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
          height: 32px;
        }
        .logo-text {
          font-family: InterMed;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 22px;
          letter-spacing: -0.01em;
          color: #1a1a1c;
          padding-left: 8px;
        }
      }
      .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: InterMed;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: #1a1a1c;
        .item {
          padding: 0px 15px;
          cursor: pointer;
        }
      }
      .action {
        font-family: InterMed;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        display: flex;
        justify-content: center;
        align-items: center;
        .sign-up {
          color: #1a1a1c;
          padding-right: 26px;
          cursor: pointer;
        }
      }
      .sm-hide {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      .xs-hide {
        @media screen and (max-width: 600px) {
          display: none;
        }
      }
      .menu-icon {
        display: none;
        font-size: 33px;
        cursor: pointer;
        @media screen and (max-width: 600px) {
          display: block;
        }
      }
    }
    .mobile-header {
      border-top: solid 1px #c5c5c9;
      border-bottom: solid 1px #c5c5c9;
      background: #f5f6f7;
      padding: 10px;
      .mobile-menu {
        padding-top: 15px;
        .item {
          font-family: InterMed;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.01em;
          color: #1a1a1c;
          text-align: center;
          padding-bottom: 15px;
          cursor: pointer;
        }
      }
      .mobile-action {
      }
    }
  }
`;
