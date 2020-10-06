import React from "react";
import styled from "styled-components";
import { selectBoards } from "./util/board.Reducer";
import { useSelector } from "react-redux";
const Container = styled.div`
  width: 272px;
  min-height: 40px;
  background-color: grey;
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const List = ({ id }) => {
  const boards = useSelector(selectBoards);
  const { title, cardIds } = boards[id];

  return (
    <Container>
      <span>{title}</span>
    </Container>
  );
};

export default List;
