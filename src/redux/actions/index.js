// actions/index.js
import axios from "axios";
import { GET_MOVIES, BOOK_MOVIES } from "../constants/action-types";

export async function getMovies() {
  const url = "http://localhost:4200/movies";
  const movieRecords = await axios.get(url).then((response) => response.data);
  return {
    type: GET_MOVIES,
    payload: movieRecords,
  };
}

export async function bookMovies(bookingData) {
  const url = "http://localhost:4200/bookings";
  const res = await axios
    .post(url, bookingData)
    .then((response) => response.data);
  return {
    type: BOOK_MOVIES,
    payload: res,
  };
}
