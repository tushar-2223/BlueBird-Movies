import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//=== google firebase import start ===
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth"
// ===================================
import { toast } from 'react-toastify';

const Contextpage = createContext();

export function MovieProvider({ children }) {

  const [header, setHeader] = useState("Trending");
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [page, setPage] = useState(1);
  const [activegenre, setActiveGenre] = useState(28);
  const [genres, setGenres] = useState([])
  const [loader, setLoader] = useState(true);
  const [backgenre, setBackGenre] = useState(false);
  const [user, setUser] = useAuthState(auth)//=======> firebase custom hooks state
  const navigate = useNavigate();// =====> navigate page

  const APIKEY = import.meta.env.VITE_API_KEY;

  if (page < 1) {
    setPage(1)
  }

  const filteredGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${activegenre}&api_key=${APIKEY}&page=${page}`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setLoader(false);
    setHeader("Genres");
  };

  const fetchSearch = async (query) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const searchmovies = await data.json();
    setMovies(searchmovies.results);
    setLoader(false);
    setHeader(`Results for "${query}"`);
  }

  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`
    );
    const gen = await data.json();
    setGenres(gen.genres);
  }

  const fetchTrending = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&page=${page}`
    );
    const trend = await data.json();
    setTrending(trend.results);
    setLoader(false)
    setHeader("Trending Movies")
  }

  const fetchUpcoming = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=${page}`
    );
    const upc = await data.json();
    setUpcoming(upc.results)
    setLoader(false)
    setHeader("Upcoming Movies")
  }

  // creat local storage
  const GetFavorite = () => {
    setLoader(false)
    setHeader("Favorite Movies")
  }
      

  //<========= firebase Google Authentication ========>
  const googleProvider = new GoogleAuthProvider();// =====> google auth provide
  
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/")
      toast.success("Login successfully");
    } catch (err) {
      console.log(err)
      navigate("/")
    }
  }
  // <==========================================================>

  return (
    <Contextpage.Provider
      value={{
        fetchGenre,
        genres,
        setGenres,
        filteredGenre,
        header,
        setHeader,
        movies,
        setMovies,
        page,
        setPage,
        activegenre,
        setActiveGenre,
        fetchSearch,
        loader,
        setBackGenre,
        backgenre,
        setLoader,
        fetchTrending,
        trending,
        fetchUpcoming,
        upcoming,
        GetFavorite,
      
        GoogleLogin,
        user
      }}
    >
      {children}
    </Contextpage.Provider>
  );

}

export default Contextpage
