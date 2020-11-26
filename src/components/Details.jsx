import React from 'react'
import { Button, Col, Container, Row, Spinner, Image } from 'react-bootstrap'


class MovieDetails extends React.Component {
  state = {
    movieInfo: null,
    fetching: true
  }

  componentDidMount = async () => {
    const movieId = this.props.match.params.id
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=ad2a416a&i=' + movieId)
      const movieInfo = await response.json()
      this.setState({ movieInfo: movieInfo, fetching: false })

    } catch (e) {
      console.log(e)
      this.setState({ fetching: false })
    }

  }

  render() {
    return (
      < Container className='my-2 text-white py-4' >
        <Row>
          {this.state.movieInfo ?
            (<>
              <Col>
                <h1><b>{this.state.movieInfo.Title}</b></h1>
                <div>
                  <b className='mx-1'>{this.state.movieInfo.Year}</b>
                  <b className='mx-1'>{this.state.movieInfo.Rated}</b>
                  <b className='mx-1'>{this.state.movieInfo.Runtime}</b>
                  <p>{this.state.movieInfo.Plot}</p>
                  <Button className='mx-1' variant='light'><i className="fas fa-check"></i>Play</Button>
                  <Button className='mx-1' variant='secondary'>My List</Button>
                  <div><b>Genres: </b>{this.state.movieInfo.Genre}</div>
                  <div><b>Actors: </b>{this.state.movieInfo.Actors}</div>
                  <div><b>Awards: </b>{this.state.movieInfo.Awards}</div>
                </div>
              </Col>
              <Col>
                <Image src={this.state.movieInfo.Poster} alt={this.state.movieInfo.Title} />
              </Col>
            </>
            ) : (
              <Spinner className='text-center' animation='grow' />
            )
          }
        </Row>
      </Container >
    )
  }
}

export default MovieDetails


