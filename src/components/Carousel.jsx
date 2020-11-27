import { Carousel, Spinner, Image } from 'react-bootstrap'
import React from 'react'
import { withRouter } from 'react-router-dom'


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

  fetchMovies = async () => {
    let url = `http://www.omdbapi.com/?apikey=e4c8a5bd&s=${this.props.title}`
    const currentURL = this.props.match.url
    if (currentURL === '/series') {
      url += '&type=series'
    }

    try {
      const response = await fetch(url)
      const result = await response.json()
      const movies = result.Search
      const arrOfMovies = this.chunk(movies, 5)
      this.setState({ arrOfMovies: arrOfMovies, fetching: false })

    } catch (e) {
      console.log(e)
      this.setState({ fetching: false })
    }
  }



  componentDidMount = () => {
    this.fetchMovies()
  }

  componentDidUpdate = (previousProps) => {
    if (previousProps.title !== this.props.title) {

      this.fetchMovies()
    }
  }

  render() {
    return (
      <div className="mb-5">
        <div className='text-white'>
          <h2 className='ml-5'>{this.props.title}</h2>
          {
            this.state.fetching && (
              <div className="font-bold d-flex justify-content-center">
                <Spinner animation="grow" variant="light" />
              </div>
            )
          }
        </div>
        <Carousel>
          {this.state.arrOfMovies.map((movies, index) => (
            <Carousel.Item key={index}>
              <div className='imagesContainer'>
                {movies.map((movie) => (
                  <>
                    {movie.Poster ? (
                      <Image
                        key={movie.imdbID}
                        className='image-item'
                        src={movie.Poster}
                        alt={movie.title}
                        onClick={() => this.props.history.push('/details/' + movie.imdbID)}
                      />
                    ) : (
                        <Spinner animation="grow" variant="light" />
                      )}
                  </>

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



export default withRouter(Sliders)