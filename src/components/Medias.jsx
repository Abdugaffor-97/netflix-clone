const { Component } = require("react")
const axios = require("axios")
const { Container, Col, Spinner, Image, Row } = require("react-bootstrap")

class Media extends Component {
  state = {
    fetching: true,
    movies: [],
  }

  fetchMovies = () => {
    const url =
      process.env.NODE_ENV === "development"
        ? process.env.BE_URL_DEV
        : process.env.BE_URL_PROD
    console.log("url", url)
    console.log("process.env.NODE_ENV", process.env.NODE_ENV)
    axios
      .get("http://localhost:3001/media")
      .then((response) =>
        this.setState({ movies: response.data, fetching: false })
      )
      .catch((error) => console.log(error))
  }

  componentDidMount = () => {
    this.fetchMovies()
  }

  render() {
    const { fetching, movies } = this.state
    return (
      <Container style={{ minHeight: "80vh" }}>
        <Row xs={2} sm={2} md={3} lg={4} xl={5}>
          {fetching ? (
            <Col>
              <Spinner animation="grow" variant="light" />
            </Col>
          ) : (
            movies.map((movie) => (
              <Col key={movie.imdbID}>
                <Image
                  className="image-item"
                  src={movie.Poster}
                  alt={movie.title}
                  onClick={() =>
                    this.props.history.push("/details/" + movie.imdbID)
                  }
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    )
  }
}

export default Media
