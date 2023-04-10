import styled from "styled-components";

export const Styles = styled.div`
  .title {
    font-family: InterMed;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: -0.03em;
    font-feature-settings: "pnum" on, "onum" on;
    color: #1a1a1c;
    padding-bottom: 20px;
    padding-top: 30px;
  }
  .subtitle {
    font-family: Neue Haas Grotesk Display Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    font-feature-settings: "pnum" on, "onum" on;
    color: #1a1a1c;
    padding-bottom: 5px;
  }
  .description {
    font-family: InterMed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #1a1a1c;
    padding-bottom: 30px;
  }
  .label {
    font-family: InterMed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #1a1a1c;
    padding-bottom: 15px;
  }
  .sign-up {
    padding: 80px 130px 60px 130px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 960px) {
      padding: 18px 40px;
    }
    @media screen and (max-width: 320px) {
      padding: 18px 20px;
    }
    .content {
      .sign-up-form {
        padding-top: 30px;
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
    }
    .rectangle {
      display: flex;
      justify-content: center;
      @media screen and (max-width: 960px) {
        display: none;
      }
    }
  }
  .assets {
    padding: 60px 130px;
    @media screen and (max-width: 1200px) {
      padding: 60px 40px;
    }
    @media screen and (max-width: 320px) {
      padding: 60px 20px;
    }
  }
  .claim {
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
    .main {
      width: 688px;
      height: 228px;
      @media screen and (min-width: 1040px) {
        width: 978px;
        height: 268px;
      }
      @media screen and (max-width: 740px) {
        width: 280px;
        height: 401px;
        display: block !important;
      }
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      img {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -1;
      }
      .image-computer {
        width: 978px;
        height: 268px;
        display: block;
        @media screen and (max-width: 1040px) {
          display: none;
        }
      }
      .image-pad {
        width: 688px;
        height: 228px;
        display: block;
        @media screen and (min-width: 1040px) {
          display: none;
        }
        @media screen and (max-width: 740px) {
          display: none;
        }
      }
      .image-mobile {
        width: 280px;
        height: 401px;
        display: block;
        @media screen and (min-width: 740px) {
          display: none;
        }
      }
      .claim-content {
        padding-left: 20px;
        max-width: 400px;
        .claim-title {
          font-family: InterMed;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          line-height: 30px;
          letter-spacing: -0.025em;
          font-feature-settings: "pnum" on, "onum" on;
          color: #1a1a1c;
          padding-top: 20px;
          padding-bottom: 10px;
        }
        .claim-description {
          font-family: InterMed;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.02em;
          color: #1a1a1c;
        }
      }
      .action {
        padding-right: 30px;
        @media screen and (max-width: 740px) {
          padding: 0px 20px;
        }
        .claim-label {
          text-align: center;
          font-family: InterMed;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.02em;
          color: #1a1a1c;
          padding-top: 30px;
        }
        .spots {
          font-family: InterMed;
          font-style: normal;
          font-weight: normal;
          font-size: 40px;
          line-height: 46px;
          text-align: right;
          letter-spacing: -0.035em;
          font-feature-settings: "pnum" on, "onum" on;
          color: #1a1a1c;
          text-align: center;
          padding-bottom: 10px;
          @media screen and (max-width: 740px) {
            padding-bottom: 40px;
          }
        }
      }
    }
  }
  .panels {
    display: flex;
    justify-content: center;
    .main {
      width: 688px;
      @media screen and (min-width: 1040px) {
        width: 978px;
      }
      @media screen and (max-width: 740px) {
        width: 280px;
      }
      .panel-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 80px;
        @media screen and (max-width: 740px) {
          display: block;
        }
        .panel-main {
          display: flex;
          @media screen and (max-width: 740px) {
            display: block;
          }
          .rphone-left {
            display: none;
            @media screen and (max-width: 1040px) {
              display: block;
            }
            margin-right: 40px;
          }
          .lphone-left {
            display: none;
            @media screen and (min-width: 1040px) {
              display: block;
            }
            @media screen and (max-width: 740px) {
              display: block;
            }
            margin-right: 40px;
          }
          .panel-content {
            max-width: 479px;
          }
        }
        .rphone-right {
          display: none;
          @media screen and (min-width: 1040px) {
            display: block;
          }
        }
        .lphone-right {
          display: block;
          @media screen and (min-width: 1040px) {
            display: none;
          }
          @media screen and (max-width: 740px) {
            display: none;
          }
        }
      }
    }
  }
  .setup {
    text-align: center;
    padding: 0px 100px 80px 100px;
    @media screen and (min-width: 1040px) {
      padding: 0px 250px 80px 250px;
    }
    @media screen and (max-width: 740px) {
      padding: 0px 20px 80px 20px;
    }
    .setup-item {
      padding-top: 60px;
      .icon {
        img {
          width: 80px;
        }
      }
      .setup-item-title {
        font-family: InterMed;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        letter-spacing: -0.025em;
        font-feature-settings: "pnum" on, "onum" on;
        color: #1a1a1c;
        padding-top: 35px;
        padding-bottom: 2px;
      }
      .setup-item-description {
        font-family: InterMed;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #1a1a1c;
      }
    }
  }
  .rest {
    padding: 0px 40px 80px 40px;
    border-radius: 12px;
    @media screen and (min-width: 1040px) {
      padding: 0px 130px 80px 130px;
    }
    @media screen and (max-width: 740px) {
      padding: 0px 20px 80px 20px;
    }
    .rest-item {
      border: solid 1px rgba(0, 0, 0, 0.15);
      padding: 40px;
      @media screen and (min-width: 1040px) {
        padding: 60px;
      }
      @media screen and (max-width: 740px) {
        padding: 20px;
      }
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img.computer {
        width: 400px;
        display: block;
        @media screen and (max-width: 740px) {
          display: none;
        }
      }
      img.mobile {
        width: 250px;
        display: none;
        @media screen and (max-width: 740px) {
          display: block;
        }
      }
    }
    .rest-title {
      font-family: InterMed;
      font-style: normal;
      font-weight: 500;
      font-size: 34px;
      line-height: 40px;
      letter-spacing: -0.035em;
      font-feature-settings: "pnum" on, "onum" on;
      color: #1a1a1c;
      padding-bottom: 30px;
    }
    .item {
      display: flex;
      align-items: center;
      padding-bottom: 25px;
      .icon {
        color: #1a1a1c;
      }
      .rest-description {
        font-family: InterMed;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: #1a1a1c;
      }
    }
  }
  .connect {
    .image {
      display: flex;
      justify-content: center;
      padding: 0px 50px 80px 130px;
      @media screen and (max-width: 992px) {
        padding: 0px 0px 80px 0px;
      }
      img {
        width: 100%;
        max-width: 480px;
        @media screen and (max-width: 992px) {
          max-width: 100%;
        }
      }
      .computer {
        display: block;
        @media screen and (max-width: 992px) {
          display: none;
        }
      }
      .pad {
        display: block;
        @media screen and (min-width: 992px) {
          display: none;
        }
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      .mobile {
        display: block;
        @media screen and (min-width: 768px) {
          display: none;
        }
      }
    }
    .connect-content {
      padding: 0px 50px 80px 50px;
      @media screen and (min-width: 992px) {
        padding: 0px 130px 80px 50px;
      }
      @media screen and (max-width: 768px) {
        padding: 0px 20px 80px 20px;
      }
    }
  }
  .signup-trading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px 80px 50px;
    @media screen and (min-width: 992px) {
      padding: 0px 130px 80px 130px;
    }
    @media screen and (max-width: 768px) {
      padding: 0px 20px 80px 20px;
      display: block;
    }
    .main {
      display: flex;
      @media screen and (max-width: 740px) {
        display: block;
      }
      .phone-left {
        display: none;
        margin-right: 40px;
        @media screen and (max-width: 1040px) {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        img {
          box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
          border-radius: 50px;
        }
      }
      .content {
        max-width: 630px;
        .sign-up-form {
          padding-top: 30px;
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
      }
    }
    .phone-right {
      display: none;
      @media screen and (min-width: 1040px) {
        display: flex;
        justify-content: center;
      }
      img {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        border-radius: 50px;
      }
    }
  }
  .about {
    background: #f5f6f7;
    padding: 50px 30px 80px 30px;
    @media screen and (min-width: 992px) {
      padding: 50px 130px 80px 130px;
    }
    @media screen and (max-width: 768px) {
      padding: 50px 20px 80px 20px;
    }
    .about-header {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1040px) {
        display: block;
      }
      .about-nav {
        display: flex;
        flex-wrap: wrap;
        .nav-item {
          font-family: InterMed;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #1a1a1c;
          padding: 15px 47px 15px 0px;
        }
      }
      .social {
        display: flex;
        .social-item {
          margin-right: 20px;
          width: 40px;
          height: 40px;
          background: #1a1a1c;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          .social-icon {
            color: white;
          }
          .facebook-icon {
            font-weight: bold;
            font-size: 28px;
          }
        }
      }
      .left {
        display: none;
        @media screen and (max-width: 1040px) {
          display: flex;
          padding-bottom: 40px;
        }
      }
      .right {
        display: none;
        @media screen and (min-width: 1040px) {
          display: flex;
        }
      }
    }
    .item {
      padding-top: 20px;
    }
    .about-description {
      font-family: InterMed;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: #1a1a1c;
    }
    .detail {
      padding-top: 40px;
    }
  }
`;
