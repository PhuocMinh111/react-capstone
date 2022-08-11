import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Table() {
  const [data, setData] = useState();
  const { final } = useSelector((state) => state.langReducer);

  useEffect(() => {}, []);

  return (
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
        <tbody>
          {data?.list.map((user, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-light" : "bg-secondary"}
            >
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button
                  // onClick={() => dispatch({ type: "EDIT", payload: user.id })}
                  className="btn btn-info mr-2"
                >
                  EDIT
                </button>
                <button
                  // onClick={() => dispatch({ type: "DEL", payload: user.id })}
                  className="btn btn-danger"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
