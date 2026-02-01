import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constant"

//this is fetching the movietrailerid and updating the redux store's slice
const useMovieTrailer = (movieId) => {
  const dispatch  = useDispatch();
  const getTrailerVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    const trailerData = jsonData?.results;
    const trailer = trailerData.filter(t => t.type === "Trailer");
    const trailerVideo = trailer ? trailer[0] : trailerData[0];
    dispatch(addTrailerVideo(trailerVideo))
  }

  useEffect(() => {
      getTrailerVideo();
  }, [])
}

export default useMovieTrailer;