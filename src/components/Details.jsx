import React from "react";
import BeautyStars from "beauty-stars";

import {
  Button,
  Col,
  Container,
  Row,
  Spinner,
  Image,
  Alert,
  Form,
} from "react-bootstrap";

class MovieDetails extends React.Component {
  state = {
    movieInfo: null,
    comments: [],
    fetchingComments: true,
    fetching: true,
    error: false,
    errorComments: false,
    starValue: 0,
  };

  componentDidMount = async () => {
    const movieId = this.props.match.params.id;
    try {
      const response = await fetch(
        process.env.REACT_APP_BE_URL + "/media/" + movieId
      );
      console.log(process.env.REACT_APP_BE_URL + "/media/" + movieId);
      const movieInfo = await response.json();

      this.setState({ movieInfo: movieInfo, fetching: false, error: false });
    } catch (e) {
      console.log(e);
      this.setState({ fetching: false, error: true });
    }
  };

  render() {
    const {
      // comments,
      error,
      fetching,
      fetchingComments,
      movieInfo,
      errorComments,
      starValue,
    } = this.state;

    return (
      <Container className="my-2 text-white py-4" style={{ minHeight: "80vh" }}>
        {error && (
          <Alert variant="danger">
            Something went wrong. Try to refresh the page
          </Alert>
        )}
        <Row>
          {movieInfo && (
            <>
              <Col>
                <h1>
                  <b>{movieInfo.Title}</b>
                </h1>
                <div>
                  <b className="mx-1">{movieInfo.Year}</b>
                  <b className="mx-1">{movieInfo.Rated}</b>
                  <b className="mx-1">{movieInfo.Runtime}</b>
                  <p>{movieInfo.Plot}</p>
                  <Button className="mx-1" variant="light">
                    <i className="fas fa-check"></i>Play
                  </Button>
                  <Button className="mx-1" variant="secondary">
                    My List
                  </Button>
                  <div>
                    <b>Genres: </b>
                    {movieInfo.Genre}
                  </div>
                  <div>
                    <b>Actors: </b>
                    {movieInfo.Actors}
                  </div>
                  <div>
                    <b>Awards: </b>
                    {movieInfo.Awards}
                  </div>
                </div>
              </Col>
              <Col>
                <Image src={movieInfo.Poster} alt={movieInfo.Title} />
              </Col>
            </>
          )}
          {fetching && <Spinner className="text-center" animation="grow" />}
        </Row>
        <Row className="mt-5">
          <Col>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Form.Label column="sm" lg={2}>
                    Name:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      required
                      size="sm"
                      type="text"
                      placeholder="Your Name"
                    />
                  </Col>
                </Form.Row>
                <br />

                <Form.Row>
                  <Form.Label column="sm" lg={2}>
                    Comment:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      required
                      size="sm"
                      type="text"
                      placeholder="Your Name"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row style={{ backgroundColor: "green" }}>
                  <Form.Label column="sm" lg={2}>
                    Rate:
                  </Form.Label>
                  <BeautyStars
                    value={starValue}
                    onChange={(starValue) => this.setState({ starValue })}
                  />
                </Form.Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h4>Comments:</h4>
            {errorComments && (
              <Alert variant="danger">
                Something went wrong. Try to refresh the page
              </Alert>
            )}
            {fetchingComments && (
              <Spinner className="text-center" animation="border" />
            )}
            {/* {comments.length&&} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieDetails;
