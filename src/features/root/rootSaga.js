import { fork } from "redux-saga/effects";
import { watchBoardSaga } from "../board/components/util/board.saga";

export default function* rootSaga() {
  yield fork(watchBoardSaga);
}
