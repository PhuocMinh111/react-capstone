import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CHANGE_LANG } from "../constants/constants";

export default function LangSeclect() {
  const [state, setState] = useState(0);
  const langState = useSelector((state) => state.langReducer);
  const dispatch = useDispatch();
  console.log(langState);

  const handleChange = (e) => {
    setState(e.target.value);
  };
  useEffect(() => {
    dispatch({ type: CHANGE_LANG, payload: state });
  }, [state]);

  console.log(state);
  return (
    <Select>
      <select
        style={{ backGround: `url(${langState.final.flag})` }}
        onChange={handleChange}
        className="form-select w-70"
      >
        {langState.value.lang.map((item, index) => {
          return (
            <Option value={index}>
              {item} <img src={langState.value.flag[index]} alt="" />
            </Option>
          );
        })}
        {/* <option selected value="0">
          One
        </option>
        <option value="1">Two</option>
        <option value="2">Three</option> */}
      </select>
    </Select>
  );
}
const Select = styled.span``;
const Option = styled.option`
  /* background:blue; */
  position: relative;
`;
