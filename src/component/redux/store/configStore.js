import { createStore } from "redux";
import indexReducer from "../reducers";

// create store and export it
const configStore = () => (
  createStore(
    indexReducer
  )
)

export default configStore;