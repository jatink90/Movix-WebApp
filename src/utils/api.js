import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZkOTNjN2E4OGU4MGRmMTU4YWMzNTU2ZWI5MjU4NyIsInN1YiI6IjY0YTVkNzMzOGM0NGI5MDBhZTYwYTA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7rwuIcGXbZ1XtXLCIqmwVnW_JBg3AbKHJAFAZ08T2lE";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
