import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CHANGE_LANG, LIGHT_THEME } from "../constants/constants";
import { Switch } from "antd";
export default function LangSeclect() {
  const [state, setState] = useState(0);
  const [lightMode, setLightMode] = useState(false);
  const langState = useSelector((state) => state.langReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleSwitch = () => {
    setLightMode(!lightMode);
  };
  useEffect(() => {
    dispatch({ type: CHANGE_LANG, payload: state });
    dispatch({ type: LIGHT_THEME, payload: lightMode });
  }, [state, lightMode]);

  console.log(langState);
  return (
    <Select>
      <select
        style={{ backGround: `url(${langState.final.flag})` }}
        onChange={handleChange}
        className="form-select w-50"
      >
        {langState.value.lang.map((item, index) => {
          return (
            <option
              style={{ backgroundImage: `url(img/vietnam.png)` }}
              value={index}
              key={index}
            >
              {/* {} <Flag className={`fi fi-${item}`}></Flag> */}
              {item}
            </option>
          );
        })}
        {/* <option selected value="0">
          One
        </option>
        <option value="1">Two</option>
        <option value="2">Three</option> */}
      </select>
      <span id="switch" className="mr-2 d-flex flex-column">
        {
          <img
            style={{ width: "30px" }}
            src={langState.final.flags}
            alt=""
            className="img-fluid"
          />
        }
        <Switch onChange={handleSwitch} />
      </span>
    </Select>
  );
}
const Select = styled.span`
  display: flex;
  gap: 10px;
`;
