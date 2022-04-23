import { combineReducers, createStore } from "redux";
import { BaiTapDatVeReducer } from "./reducers/BaiTapDatVeReducer";
const rootReducer = combineReducers({
	BaiTapDatVeReducer: BaiTapDatVeReducer,
});
const store = createStore(rootReducer);
export default store;
