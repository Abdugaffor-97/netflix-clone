import Sliders from "./Carousel";
const { Row, Col, Container } = require("react-bootstrap");

const Shows = (props) => {
  return (
    <>
      <Container>
        <Row className="text-white ml-4 mt-5">
          <Col>
            <h1>
              <b>TV Shows</b>
            </h1>
            <p>
              These days, the small screen has some very big things to offer.
              From sitcoms to dramas to travel and talk shows, these are all the
              best programs on TV.
              <a className="text-white text-light border-bottom" href="#aa">
                {" "}
                Watch now for free
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      {props.searchQuery ? (
        <Sliders title={props.searchQuery} />
      ) : (
        <>
          <Sliders title="The Crown" />
          <Sliders title="hundred" />
          <Sliders title="big sky" />
          <Sliders title="Grey's Anatomy" />
        </>
      )}
    </>
  );
};

export default Shows;
