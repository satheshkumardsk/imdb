//fetch tmdb apis for movies using axios
import axios from "axios";

const TMDB_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTllOGY0NmExNTE0NGEyYjFlMjI1ZGNmOWY4ZDIzOCIsIm5iZiI6MTczNjEwMDUxOC45MzI5OTk4LCJzdWIiOiI2NzdhY2FhNjhmZDZmNTEwOWQ3MmI4MTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.if-z9XAX649veIM5bw4iRMxitB1oxGp7UG4n1w4PTi0' ;

export const movieAPIInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${TMDB_API_KEY}`,
  }
});

