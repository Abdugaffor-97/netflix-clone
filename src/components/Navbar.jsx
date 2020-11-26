import { Navbar, Nav, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import accountPageIMG from '../images/account-face.png'
import netflixIMG from '../images/netflix.png'
import { Link, withRouter } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <Navbar className='px-5' collapseOnSelect expand="md" variant="dark">
      <Link to='/'>
        <Navbar.Brand ><img src={netflixIMG} alt="netflixIMG" style={{ width: '100px' }} /></Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className={props.location.pathname === '/series' && 'active'}
            as={Link} to='/series'
          >Tv Shows
          </Nav.Link>
        </Nav>
        <Nav>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            id='search'
            onChange={(e) => props.handleSearchQuery(e.target.value)}
          />
        </Nav>
        <DropdownButton
          menuAlign="right"
          title={<img src={accountPageIMG} alt="accountPageIMG" className='nav-img' />}
          id="dropdown-menu-align-right"
          variant="outline-light"
        >
          <Dropdown.Item as={Link} to='/account' eventKey="1">Account</Dropdown.Item>
          <Dropdown.Item as={Link} to='/payment' eventKey="2">Payment</Dropdown.Item>
        </DropdownButton>
      </Navbar.Collapse>

    </Navbar >
  )
}




export default withRouter(NavBar);