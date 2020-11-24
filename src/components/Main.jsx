import Sliders from "./Carousel";
import React from 'react'


const MainSection = ({ searchQuery }) => {
  return (
    <>
      {searchQuery ? (
        <Sliders title={searchQuery} />
      ) :
        (<>
          <Sliders title={'house'} />
          <Sliders title={'atlantic'} />
          <Sliders title={'magic'} />
        </>
        )
      }
    </>
  )
}

export default MainSection
