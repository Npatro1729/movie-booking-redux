import { combineReducers } from "redux";
import movies from "../reducers/movie-reducer"

const rootReducer = combineReducers({
    movies
})

export default rootReducer;