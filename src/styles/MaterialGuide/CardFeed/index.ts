import styled from "styled-components";
import Card from "@material-ui/core/Card";

export default styled(Card)`
  && {
    width: 100%;
    height: 600px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: column;

    margin: 10px;

    box-shadow: none;
    .MuiTypography-body2 {
      color: #262626;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 5 px;
      margin-left: -5 px;
    }
    .MuiCardHeader-root {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      padding-right: 0;
      padding-left: 0;
    }
    .MuiCardHeader-content {
      flex: 0;
    }
    .MuiCardHeader-action {
      flex: 1 1 auto;
      margin-right: -20px;
    }
    .MuiCardContent-root {
      padding: 0;
    }
    .MuiCardMedia-img {
      padding: 0;
      margin: 0;
    }
    .MuiCardActions-root {
      width: 100%;

      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      padding: 0;
      margin: 10px 0 0 0;
      section {
        svg {
          margin-right: 15px;
          font-size: 26px;
        }
      }
    }

    .MuiCheckbox-root {
      padding: 0;
      margin: 0;
    }
    /* 414
    510 */

    .profile-picture {
      width: 60px;
      height: 60px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      margin-bottom: 5px;

      background: #f09433;
      background: -moz-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );

      img {
        border-radius: 50%;
      }
    }

    @media screen and (max-width: 767px) {
    }
  }
`;
