import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import netflixIMG from '../images/netflix.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4  text-white">
      <Container fluid>
        <Row>
          <Col>
            <Link to='/'>
              <img src={netflixIMG} alt="logo" style={{ width: '60px', cursor: 'pointer' }} />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <a href="#fff">Audio and subtitles</a>
              </li>
              <li>
                <a href="#ffffffffff">Media center</a>
              </li>
              <li>
                <a href="#fffffffffff">Service code</a>
              </li>
              <li>
                <small>
                  <a href="#ffffffff">
                    Copyright 1997-2019
                    Netflix Inc.0d00fcda2fdf9c0de
                  </a>
                </small>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#fff">Audio description</a>
              </li>
              <li>
                <a href="#ffffffffff">Investor relations</a>
              </li>
              <li>
                <a href="#fffffffffff">Legacy notices</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#fff">Audio description</a>
              </li>
              <li>
                <a href="#ffffffffff">Investor relations</a>
              </li>
              <li>
                <a href="#fffffffffff">Legacy notices</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#fff">Audio description</a>
              </li>
              <li>
                <a href="#ffffffffff">Investor relations</a>
              </li>
              <li>
                <a href="#fffffffffff">Legacy notices</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer >
  );
};

export default Footer;