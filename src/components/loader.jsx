import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Loader() {
  const [notFound, setNotFound] = useState(false);
  const { final } = useSelector((state) => state.langReducer);
  useEffect(() => {
    setTimeout(() => {
      setNotFound(true);
    }, 4000);
  }, []);
  return (
    <div
      style={{ height: "30vh" }}
      className="w-100 d-flex mt-5 justify-content-center mx-auto"
    >
      {!notFound ? (
        <Wrapper>
          <div class="lds-dual-ring"></div>
        </Wrapper>
      ) : (
        <h5 className="text-danger">{final.notFound} !</h5>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
      content: " ";
      display: block;
      width: 84px;
      height: 84px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #157347;
      border-color: #157347 transparent #157347 transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
