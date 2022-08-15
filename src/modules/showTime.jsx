import React, { useEffect, useState } from "react";
import { fetchShowTimeApi } from "../services/movie";
import { useParams, useNavigate } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Loader from "../components/loader";
import styled from "styled-components";
import moment from "moment";
import { useSelector } from "react-redux";
export default function ShowTime() {
  const [data, setData] = useState();
  const param = useParams();
  const { final } = useSelector((state) => state.langReducer);
  const navigate = useNavigate();
  useEffect(() => {
    fetchShowTime();
  }, []);

  async function fetchShowTime() {
    const result = await fetchShowTimeApi(param.movieID);
    const data = await result.data;

    console.log("-----");
    console.log(data.content);
    setData(data.content);
  }
  return (
    <Accordion defaultActiveKey="0" className="row">
      <Wrapper>
        {data ? (
          data.heThongRapChieu?.map((item, index) => {
            const { logo, maHeThong, tenHeThongRap, cumRapChieu } = item;
            return (
              <Accordion.Item
                eventKey={index}
                key={maHeThong}
                className="col-lg-10 pr-2"
              >
                <Accordion.Header>
                  <img src={logo} alt="" srcset="" />
                  <span className="ml-2">{tenHeThongRap}</span>
                </Accordion.Header>
                <Accordion.Body>
                  {cumRapChieu.map((item, index) => {
                    const { diaChi, hinhAnh, lichChieuPhim } = item;
                    const lichChieu = lichChieuPhim.slice(0, 4);
                    return (
                      <div key={index}>
                        <img
                          className="cumRap-img"
                          src={hinhAnh}
                          alt=""
                          srcset=""
                        />
                        <br />
                        <span className="address mb-2">{diaChi}</span>
                        <ul>
                          {lichChieu.map((item) => {
                            const {
                              giaVe,
                              maLichChieu,
                              maRap,
                              ngayChieuGioChieu,
                              thoiLuong,
                            } = item;
                            return (
                              <li
                                key={maLichChieu}
                                style={{ fontSize: "19px" }}
                                className="mb-2 d-flex justify-content-between"
                              >
                                <div>
                                  {moment(ngayChieuGioChieu)
                                    .format("DD MMM YYYY")
                                    .replace("2019", new Date().getFullYear())}
                                  :{" "}
                                  <span className="text-success mr-5 d-inline-block">
                                    {thoiLuong} {final.minute}
                                  </span>
                                </div>
                                <button
                                  onClick={() =>
                                    navigate(`/booking/${maLichChieu}`)
                                  }
                                  style={{
                                    display: "inline-block",
                                    marginLeft: "auto",
                                  }}
                                  className="btn ml-5  btn-primary ml-auto"
                                >
                                  {final.book}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <Loader />
        )}
      </Wrapper>
    </Accordion>
  );
}
const Wrapper = styled.div`
  .cumRap-img {
    width: 15rem !important;
    height: 100px; 
    object-fit: cover;
  }
  .span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 19px;
  }
  img {
    width: 75px !important;
    height: 75px !important;
    border: none !important;
  }
  .address {
    font-size: 15px;
  }
`;
