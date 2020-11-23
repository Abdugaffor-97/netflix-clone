import { Carousel, Spinner } from 'react-bootstrap'
import React from 'react'


class Sliders extends React.Component {
  state = {
    arrOfMovies: [],
    fetching: true,
  }


  chunk = (array, number) => {
    const output = [];
    while (array.length > 0) {
      output.push(array.splice(0, number));
    }
    return output;
  }



  componentDidMount = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=ad2a416a&s=' + this.props.title)
      const result = await response.json()
      const movies = result.Search
      const arrOfMovies = this.chunk(movies, 5)
      this.setState({ arrOfMovies: arrOfMovies, fetching: false })
      console.log(this.props.title, 'this.props.title')

    } catch (e) {
      console.log(e)
      this.setState({ fetching: false })
    }
  }


  render() {
    return (
      <div className="mb-5">
        <div className='text-white'>
          <h1 className='ml-4'>{this.props.title}</h1>
          {
            this.state.loading && (
              <div className="font-bold d-flex justify-content-center">
                <Spinner animation="border" variant="success" />
              </div>
            )
          }
        </div>
        <Carousel>
          {this.state.arrOfMovies.map((movies, index) => (
            <Carousel.Item key={index}>
              <div className='imagesContainer'>
                {movies.map((movie) => (
                  <img
                    className='image-item'
                    src={movie.Poster}
                    alt={movie.title}
                  />
                ))
                }
              </div>
            </Carousel.Item>

          ))}
        </Carousel>
      </div>
    )
  }


}



export default Sliders