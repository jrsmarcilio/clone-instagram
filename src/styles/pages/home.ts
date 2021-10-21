import styled from "styled-components";
import theme from "@/styles/theme";

export const HomeStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 20px;

  /* background: ${theme.palette.background.paper}; */

  .home-carousel-content {
    width: 414px;
    border-bottom: 1px solid ${theme.palette.text.disabled};
  }
`;
