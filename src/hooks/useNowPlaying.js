import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import data from "../utils/nowPlayingDummy.json"

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    // const data = await fetch("/");
    // const jsonData = await data.json();
    const jsonData = data?.results;
    console.log(jsonData);
    dispatch(addNowPlayingMovies(jsonData));
  }

  useEffect(() => {
    getNowPlayingMovies();
  },[])

}

export default useNowPlaying