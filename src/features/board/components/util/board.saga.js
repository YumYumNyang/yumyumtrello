import { all, put, call, select, takeEvery } from "redux-saga/effects";
import {
  createListStart,
  initializeBoardStart,
  initializeBoardSuccess,
  selectBoardIds,
  selectBoards,
} from "./board.Reducer";

function save(ids, entities) {
  localStorage.setItem("ids", JSON.stringify(ids));
  localStorage.setItem("entities", JSON.stringify(entities));
}

function load() {
  const ids = localStorage.getItem("ids");
  const entities = localStorage.getItem("entities");
  return {
    ids: JSON.parse(ids),
    entities: JSON.parse(entities),
  };
}

export function* syncBoard() {
  const ids = yield select(selectBoardIds);
  const entities = yield select(selectBoards);
  yield call(save, ids, entities);
}

export function* loadBoard() {
  const { ids, entities } = yield call(load);
  if (!ids || !entities) return;
  yield put(initializeBoardSuccess(ids, entities));
}

export function* watchBoardSaga() {
  yield all([
    takeEvery(createListStart.type, syncBoard),
    takeEvery(initializeBoardStart.type, loadBoard),
  ]);
}
