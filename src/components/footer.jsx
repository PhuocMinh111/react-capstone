import React from "react";
import styled from "styled-components";
import { payment, technology, social, license } from "../constants/footer";
import { useSelector } from "react-redux";

export default function Footer() {
  const { final } = useSelector((state) => state.langReducer);
  return (
    <Wrapper className="py-3 text-center">
      <div className="row mx-auto w-75">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-6 col-md-12">
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
          <h6 className="text-light mt-3 text-center">{final.payment}</h6>
          <div style={{ width: "auto" }} className="px-0 mx-auto mt-3">
            <div className="mx-auto">
              {payment.map((ele, index) => {
                return (
                  <span key={index} className="mx-1">
                    <img className="img-fluid" src={ele} alt="" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <h5 className="text-light">{final.social}</h5>
          {social.map((ele) => (
            <img
              key={ele}
              src={ele}
              alt=""
              className="social mx-1 img-fluid w-70"
            />
          ))}
          <img
            id="license"
            src={license}
            className="img-fluid mt-2"
            alt=""
            srcset=""
          />
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
  .social {
    object-fit: contain;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  #license {
    width: auto;
    background-size: 100%;
  }
`;
