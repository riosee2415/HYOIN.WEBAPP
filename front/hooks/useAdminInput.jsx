import { Button, Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Wrapper } from "../components/commonComponents";

const UseAdminInput = ({
  init, // 초기값
  REQUEST_TARGET, // 리듀서
  DATA_TARGET, // 리듀서 데이터
  placeholder, // placeholder
  isNum, // input number
}) => {
  const [value, setValue] = useState(init);

  const dispatch = useDispatch();

  const changeHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const updateHandler = useCallback(() => {
    for (let item in DATA_TARGET) {
      if (DATA_TARGET[item] === init) {
        DATA_TARGET[item] = value;
      }
    }

    dispatch({
      type: REQUEST_TARGET,
      data: {
        ...DATA_TARGET,
      },
    });
  }, [value]);

  return (
    <Wrapper dr={`row`} ju={`space-between`}>
      <Input
        size="small"
        style={{ width: `calc(100% - 45px)` }}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
        type={isNum && `number`}
      />

      <Button size="small" type="primary" onClick={updateHandler}>
        수정
      </Button>
    </Wrapper>
  );
};

export default UseAdminInput;
