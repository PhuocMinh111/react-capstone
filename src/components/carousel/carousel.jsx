import React, { useState, useEffect } from "react";
import fetchBannerApi from "../../services/banner/bannerApi";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
export default function CarouselComponent({ list }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetchBanner();
  }, []);
  async function fetchBanner() {
    const result = await fetchBannerApi();
    const data = await result.data;
    setState(data.content);
  }
  return list ? (
    <Wrapper>
      <Carousel interval={400}>
        {list.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img className=" d-block" src={item.hinhAnh} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Wrapper>
  ) : (
    <Wrapper>
      <Carousel interval={800} style={{ height: "60vh" }} fade>
        {state.map((item) => (
          <Carousel.Item>
            <img className=" d-block" src={item.hinhAnh} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 60vh;
  background: #282c34;
  img {
    width: 100%;
    height: 60vh;
    object-fit: contain;
  }
`;
