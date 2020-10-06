import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { createListStart } from "./util/board.Reducer";

const Container = styled.div`
  width: 272px;
  height: 40px;
  padding: 10px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
`;

const CreateListButton = () => {
  const dispatch = useDispatch();
  const [onCreate, setOnCreate] = useState(false);
  const [title, setTitle] = useState("");
  function onClick() {
    setOnCreate(true);
  }
  function onBlur() {
    setOnCreate(false);
  }

  function createList() {
    const newId = uuid();
    dispatch(createListStart(newId, title));
    setTitle("");
    setOnCreate(false);
  }

  function onChange(e) {
    setTitle(e.target.value);
  }

  return (
    <Container onClick={onClick}>
      {onCreate ? (
        <input
          autoFocus
          onBlur={onBlur}
          onChange={onChange}
          value={title}
          onKeyPress={(e) => {
            e.key === "Enter" && createList();
          }}
        ></input>
      ) : (
        <span>List 추가하기</span>
      )}
    </Container>
  );
};

export default CreateListButton;
