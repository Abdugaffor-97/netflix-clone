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
    console.log(this.state.searchQuery, 'this.state.searchQuery')
  }


  render() {
    return (
      <>
        <NavBar handleSearchQuery={this.updateSearchQuery} />
        {this.state.searchQuery.length > 2 ? (
          <Sliders title={this.state.searchQuery} />
        ) :
          (<>
            <Sliders title={'all'} />
            <Sliders title={'atlantic'} />
            <Sliders title={'Europe'} />
          </>
          )
        }
        <Footer />
      </>
    )
  }
}

export default MainPage
