import styled from "styled-components";
import theme from "@/styles/theme";

export const UserPerfilStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 20px;

  /* background: ${theme.palette.background.paper}; */
  .user-bio {
    height: 100px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
    border-bottom: 1px solid ${theme.palette.text.disabled};
  }
  .MuiTypography-h1 {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 15px;
  }
  .MuiTypography-h2 {
    font-size: 28px;
    line-height: 32px;
    margin: -5px 0 -6px;
    font-weight: 300;
  }
  .MuiTypography-h3 {
    color: #262626;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    padding: 0 15px;
    text-overflow: ellipsis;
    text-align: end;
    height: 80px;
  }
  .profile-picture {
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

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
      border-radius: 100%;
    }
  }
`;
