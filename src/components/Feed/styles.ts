import styled from "styled-components";

export const CarouselFeedStyle = styled.div`
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .rec-slider-container {
    padding: 0;
    margin: 0;
  }
  .rec {
    padding: 0;
    margin: 0;
  }
  .rec-dot {
    box-shadow: none;
    border: none;
    background: none;
    box-shadow: none;
  }
  .rec-item-wrapper {
    padding: 0;
    width: 80px;
  }
  .MuiTypography-h2 {
    color: #262626;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
