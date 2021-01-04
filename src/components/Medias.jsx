const { Component } = require("react");
const axios = require("axios");
const {
  Container,
  Col,
  Spinner,
  Image,
  Row,
  Alert,
} = require("react-bootstrap");

class Media extends Component {
  state = {
    fetching: true,
    movies: [],
    error: false,
  };

  fetchMovies = () => {
    const url = process.env.REACT_APP_BE_URL;
    console.log("process.env.REACT_APP_BE_URL", url);
    axios
      .get("http://localhost:3001/media")
      .then((response) =>
        this.setState({ movies: response.data, fetching: false })
      )
      .catch((err) => {
        this.setState({ fetching: false, error: true });
      });
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    const { fetching, movies, error } = this.state;
    return (
      <Container style={{ minHeight: "80vh" }}>
        <Row xs={2} sm={2} md={3} lg={4} xl={5}>
          {fetching && (
            <Col>
              <Spinner animation="grow" variant="light" />
            </Col>
          )}
          {error && (
            <Alert variant="danger">
              Someting went wrong. Try to reload the page{console.log("alert")}
            </Alert>
          )}

          {movies.Response === "True" &&
            movies.Search.map((movie) => (
              // <Col key={movie.imdbID}>
              <Image
                key={movie.imdbID}
                className="image-item"
                src={movie.Poster}
                alt={movie.title}
                onClick={() =>
                  this.props.history.push("/details/" + movie.imdbID)
                }
              />
            ))}
        </Row>
      </Container>
    );
  }
}

export default Media;
