import poster1 from "../assets/images/715751.jpg";
import poster2 from "../assets/images/6211748.jpg";

export const mockMovies = [
  { id: 1, title: "Movie One", year: "2022", genre: "Action", img: poster1 },
  { id: 2, title: "Movie Two", year: "2026", genre: "Romance", img: poster2 },
  { id: 3, title: "Movie Three", year: "2004", genre: "Romance", img: poster1 },
  { id: 4, title: "Movie Four", year: "2010", genre: "Sci-Fi", img: poster2 },
  { id: 5, title: "Movie Five", year: "2008", genre: "Action", img: poster1 },
  { id: 6, title: "Movie Six", year: "2014", genre: "Sci-Fi", img: poster2 },
  { id: 7, title: "Movie Seven", year: "2018", genre: "Drama", img: poster1 },
  { id: 8, title: "Movie Eight", year: "2020", genre: "Comedy", img: poster2 },
];

export const sections = [
  { id: 1, title: "Trending Now", movies: mockMovies.slice(0, 4) },
  { id: 2, title: "New Releases", movies: mockMovies.slice(2, 6) },
  { id: 3, title: "Top Rated", movies: mockMovies.slice(4, 8) },
];
