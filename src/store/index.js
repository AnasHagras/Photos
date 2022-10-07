import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers/dataReducer";
import { mainContainersReducer } from "./reducers/mainContainersReducer";

const appReducer = combineReducers({
  data: dataReducer,
  mainContainer: mainContainersReducer,
});

export const store = createStore(appReducer, applyMiddleware(thunk));
