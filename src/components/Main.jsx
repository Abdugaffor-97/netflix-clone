import Sliders from "./Carousel";
import React from 'react'


const MainSection = (props) => {
  return (
    <>
      {props.searchQuery ? (
        <Sliders title={props.searchQuery} />
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
