import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

export const initializeBoardStart = createAction(
  "board/initializeBoardStart",
  () => {
    return { payload: null };
  }
);
export const initializeBoardSuccess = createAction(
  "board/initializeBoardSuccess",
  (ids, entities) => {
    return { payload: { ids, entities } };
  }
);

export const createListStart = createAction(
  "board/createListStart",
  (id, title) => {
    return { payload: { id, title } };
  }
);

const reducer = createReducer(initialState, {
  [initializeBoardSuccess.type]: (state, action) => {
    const { ids, entities } = action.payload;
    state.ids = ids;
    state.entities = entities;
  },

  [createListStart.type]: (state, action) => {
    const { id, title } = action.payload;
    const newList = {
      id,
      title,
      cardIds: [],
      cardEntities: {},
    };
    state.ids.push(id);
    state.entities[id] = newList;
  },
});

export default reducer;

export const selectBoardIds = (state) => state.boardReducer.ids;
export const selectBoards = (state) => state.boardReducer.entities;
