import React from 'react'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
  
  useNowPlaying();

  return (
    <div>
      {/* 
        -Main Container
          -Trailer playing
        -Secondary Container
          -n x container
            - each n movies
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
