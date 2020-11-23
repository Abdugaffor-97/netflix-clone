import NavBar from "./Navbar";
import Footer from "./Footer";
import Sliders from "./Carousel";
import React from 'react'




class MainPage extends React.Component {
  state = {
    searchQuery: ''
  }
  updateSearchQuery = (query) => {
    this.setState({ searchQuery: query })
  }


  render() {
    return (
      <>
        <NavBar handleSearchQuery={this.updateSearchQuery} />
        {this.state.searchQuery ? (
          <Sliders title={this.state.searchQuery} />
        ) :
          (<>
            <Sliders title={'house'} />
            <Sliders title={'atlantic'} />
            <Sliders title={'magic'} />
          </>
          )
        }
        <Footer />
      </>
    )
  }
}

export default MainPage
