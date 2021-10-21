import theme from "@/styles/theme";
import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 414px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${theme.palette.background.default};
  border-bottom: 1px solid ${theme.palette.text.disabled};
`;
