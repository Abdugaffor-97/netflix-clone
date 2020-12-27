import Sliders from "./Carousel"
import React from "react"

const MainSection = (props) => {
  return (
    <div className="mt-5" style={{ minHeight: "90vh" }}>
      {props.searchQuery ? (
        <Sliders title={props.searchQuery} />
      ) : (
        <>
          <Sliders title={"Panda"} />
          <Sliders title={"titanic"} />
          <Sliders title={"little prince"} />
        </>
      )}
    </div>
  )
}

export default MainSection
