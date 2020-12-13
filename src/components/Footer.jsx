import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="font-small py-4 text-white ">
      <Container>
        <Row className="mt-2">
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              <Col>
                <div>
                  <a href="#xx">Questions? Contact us.</a>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <a href="#ffffffffff">FAQ</a>
                </div>
                <div>
                  <a href="#ffffffffff">Investor Relations</a>
                </div>
                <div>
                  <a href="#fffffffffff">Privacy</a>
                </div>
                <div>
                  <a href="#ffffffff">Speed Test</a>
                </div>
              </Col>
              <Col>
                <div>
                  <a href="#fff">Help Center</a>
                </div>
                <div>
                  <a href="#ffffffffff">Jobs</a>
                </div>
                <div>
                  <a href="#fffffffffff">Cookie Preferences</a>
                </div>
                <div>
                  <a href="#fffffffffff">Legal Notices</a>
                </div>
              </Col>
              <Col>
                <div>
                  <a href="#fff">Account</a>
                </div>
                <div>
                  <a href="#ffffffffff">Ways to Watch</a>
                </div>
                <div>
                  <a href="#fffffffffff">Corporate Information</a>
                </div>
                <div>
                  <a href="#fffffffffff">Netfdivx Originals</a>
                </div>
              </Col>
              <Col>
                <div>
                  <a href="#fff">Media Center</a>
                </div>
                <div>
                  <a href="#ffffffffff">Terms of Use</a>
                </div>
                <div>
                  <a href="#fffffffffff">Contact Us</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
