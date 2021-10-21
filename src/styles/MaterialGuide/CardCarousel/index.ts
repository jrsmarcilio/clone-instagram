import styled from "styled-components";
import Card from "@material-ui/core/Card";

export default styled(Card)`
  && {
    width: 90px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    box-shadow: none;

    .MuiCardContent-root {
      padding: 0;
    }

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
