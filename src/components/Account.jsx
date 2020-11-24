import { Container, Col, Row, Button } from 'react-bootstrap'


const AccountPage = () => {
  return (
    <div className='accountPage p-5'>
      <Container >
        <h1>Account</h1>
        <Row>
          <Col md={4}>
            <h4>MEMBERSHIP & BILLING</h4>
            <Button variant="outline-danger">Cancel Membership</Button>
          </Col>
          <Col md={8}>
            <Row className='border-bottom p-3'>
              <Col md={6} >
                <p>student@strive.shchool</p>
                <p>Password:********</p>
                <p>Phone: 333 333 3333 22</p>
              </Col>
              <Col md={6}>
                <p><a href="#uuu">Change account email</a></p>
                <p><a href="#u">Change Password</a></p>
                <p><a href="#u">Change Phone NUmber</a></p>
              </Col>
            </Row>
            <Row className='border-bottom p-3'>
              <Col>
                <p>Pay Pal admin@strive.school</p>
              </Col>
              <Col>
                <p>Update payment info</p>
                <p>Billing details</p>
              </Col>
            </Row>
            <Row className='border-bottom p-3'>
              <Col>
              </Col>
              <Col>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container >
          <Row className='border-bottom p-3'>
            <Col>
              <h5 style={{ display: 'inline' }}>PLAN DETAILS</h5>
            </Col>
            <Col>
              <p style={{ display: 'inline' }}>Premium
                <button >ULTRAHO</button></p>
            </Col>
            <Col>
              <p><a href="#ss">Change plan</a></p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className='border-bottom p-3'>
            <Col>
              <h5 style={{ display: 'inline' }}>SETTINGS</h5>
            </Col>
            <Col>
              <div>
                <a href="#asdfgh">Parental controls</a>
              </div>
              <div>
                <a href="#asdfgh">Test particpation</a>
              </div>
              <div>
                <a href="#asdfgh">Manage download</a>
              </div>
              <div>
                <a href="#asdfgh">Activate a device</a>
              </div>
              <div>
                <a href="#asdfgh">Recent device streaming activity</a>
              </div>
              <div>
                <a href="#asdfgh">Sign out all devices</a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container >
          <Row className='border-bottom p-3'>
            <Col md={3}>
              <h5 style={{ display: 'inline' }}>MY PROFILE</h5>
            </Col>
            <Col md={3}>
              <h4>Strive School</h4>
              <a href="#dfg">Language</a>
              <a href="#dfg">Language</a>
              <a href="#dfg">Language</a>
            </Col>
            <Col md={3}>
              <br></br>

              <a href="#dfg">Language</a>
              <a href="#dfg">Language</a>
            </Col>
            <Col md={3}>
              <br></br>
              <a href="#dfg">Manage profile</a>
              <a href="#dfg">Add profile email</a>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}



export default AccountPage