import React from "react";
import styled from "styled-components";
import CreateListButton from "./CreateListButton";
import { initializeBoardStart, selectBoardIds } from "./util/board.Reducer";
import { useSelector } from "react-redux";
import List from "./List";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;

const Board = () => {
  const listIds = useSelector(selectBoardIds);
  const dispatch = useDispatch();
  console.log(listIds);
  useEffect(() => {
    dispatch(initializeBoardStart());
  }, [dispatch]);
  return (
    <Container>
      {listIds.map((id) => (
        <List key={id} id={id} />
      ))}
      <CreateListButton />
    </Container>
  );
};

export default Board;
