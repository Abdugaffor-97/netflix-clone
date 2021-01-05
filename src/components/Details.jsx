import BeautyStars from "beauty-stars";
import Moment from "react-moment";

const React = require("react");
const {
  Button,
  Col,
  Container,
  Row,
  Spinner,
  Image,
  Alert,
  Form,
} = require("react-bootstrap");

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: null,
      comments: [],
      fetchingComments: true,
      fetching: true,
      error: false,
      errorComments: false,
      form: { starValue: 0, comment: "", name: "" },
      sendingComment: false,
      errorSendingComment: null,
    };
    this.movieId = this.props.match.params.id;
    this.BE_URL = process.env.REACT_APP_BE_URL;
  }

  submitForm = async (e) => {
    e.preventDefault();
    this.setState({ sendingComment: true });
    try {
      const response = await fetch(
        this.BE_URL + `/reviews?movieId=${this.movieId}`,
        {
          method: "POST",
          body: JSON.stringify(this.state.form),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        }
      );

      if (response.ok) {
        this.setState({
          sendingComment: false,
          form: {
            starValue: 0,
            comment: "",
            name: "",
          },
        });
        this.fetchComments();
      }
    } catch (error) {
      this.setState({ sendingComment: false, errorSendingComment: true });
    }
  };

  updateForm = (e) => {
    const form = { ...this.state.form };
    if (e.currentTarget) {
      const currentId = e.currentTarget.id;
      form[currentId] = e.currentTarget.value;
    } else {
      form.starValue = e;
    }
    this.setState({ form });
    console.log(form);
  };

  fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return { data, fetching: false, error: false };
    } catch (e) {
      console.log(e);
      return { data: null, fetching: false, error: true };
    }
  };

  fetchComments = async () => {
    const status = await this.fetchData(
      this.BE_URL + `/reviews?movieId=${this.movieId}`
    );
    if (status.data) {
      this.setState({
        comments: status.data,
        fetchingComments: status.fetching,
        errorComments: status.error,
      });
    } else {
      this.setState({
        comments: status.data,
        fetchingComments: status.fetching,
        errorComments: status.error,
      });
    }
  };

  componentDidMount = async () => {
    const url = this.BE_URL + "/media/" + this.movieId;
    const status = await this.fetchData(url);
    if (status.data) {
      this.setState({
        movieInfo: status.data,
        fetching: status.fetching,
        error: status.error,
      });
    } else {
      this.setState({
        movieInfo: status.data,
        fetching: status.fetching,
        error: status.error,
      });
    }
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.movieInfo !== this.state.movieInfo) {
      this.fetchComments();
    }
  };

  render() {
    const {
      comments,
      error,
      fetching,
      fetchingComments,
      movieInfo,
      errorComments,
      form,
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
        <Row className="mt-5 py-5 bg-dark rounded">
          <Col>
            <Form onSubmit={this.submitForm}>
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
                      id="name"
                      onChange={this.updateForm}
                      value={form.name}
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
                      placeholder="Comment"
                      id="comment"
                      onChange={this.updateForm}
                      value={form.comment}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={2}>
                    Rate:
                  </Form.Label>
                  <BeautyStars
                    value={form.starValue}
                    onChange={this.updateForm}
                    id="starValue"
                  />
                </Form.Row>
                <br />
                <Button variant="outline-warning" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h4>Comments:</h4>
            {comments.length ? (
              comments.map((comment) => (
                <div key={comment._id}>
                  <p>{comment.comment}</p>
                  <div className="my-3 pb-1 border-bottom d-flex justify-content-between align-items-center">
                    <small className="d-flex align-items-center">
                      <b className="mr-1">Rate:</b>
                      <BeautyStars
                        value={comment.starValue}
                        size={12}
                        editable={false}
                        gap="5px"
                      />
                    </small>
                    <small>
                      <Moment format="YYYY/MM/DD" date={comment.createdAt} />
                    </small>
                  </div>
                </div>
              ))
            ) : (
              <p>There is no comments</p>
            )}
            {errorComments && (
              <Alert variant="danger">
                Something went wrong. Try to refresh the page
              </Alert>
            )}
            {fetchingComments && (
              <Spinner className="text-center" animation="border" />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieDetails;
