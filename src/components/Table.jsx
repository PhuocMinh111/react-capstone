import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchMovieListApi } from "../services/movie";
import { Button } from "antd";
import Loader from "./loader";
export default function Table() {
  const [data, setData] = useState();
  const { final } = useSelector((state) => state.langReducer);

  useEffect(() => {
    fetchMovieList();
  }, []);
  const deleteMovie = async () => {};
  const fetchMovieList = async () => {
    try {
      const result = await fetchMovieListApi();
      // const result = await data.result;
      setData(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  return data ? (
    <div className="card-body">
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>{final.movie}</th>
            <th>{final.img}</th>
            <th>{final.desc}</th>
            <th>{final.action}</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "1rem" }}>
          {data.map((item, index) => {
            const { maPhim, tenPhim, hinhAnh, moTa } = item;
            return (
              <tr
                key={index}
                // className={index % 2 === 0 ? "bg-light" : "bg-secondary"}
              >
                <td className="text-success">{maPhim}</td>
                <td>{tenPhim}</td>
                <td>
                  <img
                    style={{ width: "70px", height: "70px" }}
                    className="img-fluid"
                    src={hinhAnh}
                    alt="hinh anh"
                  />
                </td>
                <td>{moTa.substring(0, 30)}</td>
                <td>{}</td>
                <td>
                  <Button
                    // onClick={() => dispatch({ type: "EDIT", payload: user.id })}
                    className="btn btn-info mr-2"
                  >
                    EDIT
                  </Button>
                  <Button
                    onClick={() => deleteMovie(maPhim)}
                    className="btn btn-danger"
                  >
                    DELETE
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <Loader />
  );
}
