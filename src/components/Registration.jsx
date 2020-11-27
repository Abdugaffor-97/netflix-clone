import { withRouter } from "react-router-dom"
import React from 'react'


const { Row, Col, Form, Button, Container, Alert } = require("react-bootstrap")

class Register extends React.Component {
  state = {
    form: {
      name: '',
      surname: '',
      email: '',
      password1: '',
      password2: '',
      dirthDate: '',
      address: '',
      city: '',
      zipCode: '',
      creditCard: '',
    },
    alerts: {
      name: '',
      surname: '',
      email: '',
      password: '',
      dirthDate: '',
      zipCode: '',
      creditCard: '',
    }
  }


  updateForm = (e) => {
    let form = this.state.form
    const currentID = e.currentTarget.id

    if (form[currentID] === 'creditCard') {
      form[currentID] = e.currentTarget.value
    } else {
      form[currentID] = e.currentTarget.value
    }
    this.setState({ form: form })
  }

  submitForm = (e) => {
    e.preventDefault()
    const alerts = this.state.alerts
    const numbers = /^[0-9]+$/;
    const strings = /^[a-zA-Z]+$/;

    if (this.state.form.name.length < 3) {
      alerts.name = "Name can't be letss than 2 characters"
    }

    if (this.state.form.name.length < 3) {
      alerts.surname = "Name can't be letss than 3 characters"
    }

    if (this.state.form.password1.length < 9) {
      alerts.password = "Password should contain at least 8 chars"
    } else if (!this.state.form.password1.match(numbers)) {
      alerts.password = 'Password should contain at least 1 digit'
    } else if (!this.state.form.password1.match(strings)) {
      alerts.password = 'Password should contain at least 1 letter'
    }

    if (this.state.form.date.split('-')[0] < 1910) {
      alerts.dirthDate = "Year of Birth - Required - from 1910"
    }

    if (this.state.form.zipCode < 6) {
      alerts.name = "Postal Code - Required - Numeric 5 digits"
    }

  }




  render() {
    return (

      <Row className='mt-5' >

        <Col md={{ span: 6, offset: 5 }}>
          <Container>
            <Form className='text-white' onSubmit={this.submitForm}>
              <h4>User Registration form</h4>
              <Form.Group >
                <Form.Label>
                  Name
                    {this.state.alerts.name && (
                    <Alert variant='danger'>
                      {this.state.alerts.name}
                    </Alert>)}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  id='name'
                  required
                  value={this.state.form.name}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Surname
                  {this.state.alerts.surname && (
                    <Alert variant='danger'>
                      {this.state.alerts.surname}
                    </Alert>)}
                </Form.Label>
                <Form.Control
                  type="text"
                  id='surname'
                  placeholder="Doe"
                  required
                  value={this.state.form.surname}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email address
                  {this.state.alerts.email && (
                    <Alert variant='danger'>
                      {this.state.alerts.email}
                    </Alert>
                  )}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john@example.com"
                  required
                  id='email'
                  value={this.state.form.email}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password
                  {this.state.alerts.password && (
                    <Alert variant='danger'>
                      {this.state.alerts.email}
                    </Alert>
                  )}
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  required
                  id='password1'
                  value={this.state.form.password1}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm your password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  required
                  id='password2'
                  value={this.state.form.password2}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Date of birth
                  {this.state.alerts.dirthDate && (
                    <Alert variant='danger'>
                      {this.state.alerts.dirthDate}
                    </Alert>
                  )}
                </Form.Label>
                <Form.Control
                  type="date"
                  required
                  id='date'
                  value={this.state.form.date}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street Address"
                  required
                  id='address'
                  value={this.state.form.address}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  required
                  id='city'
                  value={this.state.form.city}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Postal code
                  {this.state.alerts.zipCode && (
                    <Alert variant='danger'>
                      {this.state.alerts.zipCode}
                    </Alert>
                  )}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="zip code"
                  required
                  id='zipCode'
                  value={this.state.form.zipCode}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Credit card</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Credit card"
                  required
                  id='creditCard'
                  value={this.state.form.creditCard}
                  onChange={this.updateForm}
                />
              </Form.Group>

              <Button type='submit'>Submit</Button>
            </Form>
          </Container>
        </Col>
      </Row>
    )
  }
}



export default withRouter(Register)