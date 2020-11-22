import { Navbar, Nav, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import accountPageIMG from '../images/account-face.png'
import netflixIMG from '../images/netflix.png'
const NavBar = () => {
  return (


    <Navbar className='px-5' collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home"><img src={netflixIMG} alt="netflixIMG" className='nav-img' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" id='search' />
          <DropdownButton
            menuAlign="right"
            title={<img src={accountPageIMG} alt="accountPageIMG" className='nav-img' />}
            id="dropdown-menu-align-right"
            variant="outline-light"
          >
            <Dropdown.Item eventKey="1">Account</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}




export default NavBar;