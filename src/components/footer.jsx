import React from "react";
import styled from "styled-components";
import { payment, technology } from "../constants/footer";
import { useSelector } from "react-redux";
export default function Footer() {
  const { final } = useSelector((state) => state.langReducer);
  return (
    <Wrapper className="p-5 text-center">
      <div className="row mx-auto w-75">
        <h6 className="text-center mb-2 text-light">{final.technology}</h6>
        <div className="mx-auto">
          {technology.map((ele, index) => {
            return (
              <span key={index} className="mx-1">
                <img
                  style={{ width: "80px", height: "80px" }}
                  src={ele}
                  alt=""
                  srcset=""
                />
              </span>
            );
          })}
        </div>
      </div>
      <h6 className="text-light mt-3 text-center">{final.payment}</h6>
      <div
        style={{ width: "auto" }}
        className="px-5 d-flex justify-content-center mx-auto mt-3 w-50"
      >
        <div className="">
          {payment.map((ele, index) => {
            return (
              <span key={index} className="mx-1">
                <img className="img-fluid" src={ele} alt="" />
              </span>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #06081f;
  img {
    width: 55px;
    height: 55px;
  }
`;
