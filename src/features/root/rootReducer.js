import { combineReducers } from "redux";
import boardReducer from "../board/components/util/board.Reducer";

const rootReducer = combineReducers({
  boardReducer,
});

export default rootReducer;
