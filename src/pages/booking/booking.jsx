import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Chair from "../../modules/chair";
import { bookingTicketApi, fetchRoomListApi } from "../../services/booking";

export default function Booking() {
  const [danhSachGhe, setDanhSachGhe] = useState([]);
  const [roomList, setRoomList] = useState();
  const [success, setSucess] = useState();
  const [err, setErr] = useState();
  const params = useParams();
  const { final } = useSelector((state) => state.langReducer);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);

  useEffect(() => {
    fetchRoomList();
  }, []);

  const fetchRoomList = async () => {
    const result = await fetchRoomListApi(params.maLichChieu);

    setRoomList(result.data.content);
  };

  const handleSelect = (selectedChair) => {
    const data = [...danhSachGhe];

    const idx = data.findIndex((ele) => ele.tenGhe === selectedChair.tenGhe);

    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(selectedChair);
    }

    setDanhSachGhe(data);
  };

  const handleBookingTicket = async () => {
    const danhSachVe = danhSachGhe.map((ele) => {
      return {
        maGhe: ele.maGhe,
        giaVe: ele.giaVe,
      };
    });

    const submitData = {
      maLichChieu: params.maLichChieu,
      danhSachVe,
    };
    try {
      const result = await bookingTicketApi(submitData);
      console.log(result);
      setSucess(true);
      return;
      navigate("/");
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };

  return roomList ? (
    success ? (
      <div className="text-center">
        <h2 className="text-success">{final.success}</h2> <br />
        <h3
          style={{ color: "#FFBE3A", fontSize: "3rem" }}
          className="mb-3 check"
        >
          <FaCheck />
        </h3>
      </div>
    ) : (
      <div className="row w-75 mx-auto my-5">
        <div className="col-8">
          {roomList.danhSachGhe.map((ele, idx) => {
            return (
              // <></>
              <React.Fragment key={ele.tenGhe}>
                <Chair handleSelect={handleSelect} item={ele} />
                {(idx + 1) % 16 === 0 && <br />}
              </React.Fragment>
            );
          })}
        </div>
        <div className="col-4">
          <img
            className="img-fluid"
            src={roomList.thongTinPhim.hinhAnh}
            alt="image"
          />
          <h4>Tên phim: {roomList.thongTinPhim.tenPhim}</h4>
          <h5>Mô tả: {roomList.thongTinPhim.moTa}</h5>
          <p>
            Ghế:
            {danhSachGhe.map((ele) => (
              <span
                key={ele.tenGhe}
                className="badge text-success badge-success"
              >
                {ele.tenGhe}
              </span>
            ))}
          </p>
          <p>
            Tổng tiền:
            {danhSachGhe
              .reduce((previousValue, currentValue) => {
                previousValue += currentValue.giaVe;

                return previousValue;
              }, 0)
              .toLocaleString()}
          </p>
          <button onClick={handleBookingTicket} className="btn btn-info">
            ĐẶT VÉ
          </button>
        </div>
      </div>
    )
  ) : (
    <Loader />
  );
}
