import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import { 
  LinkContainer
 } from 'react-router-bootstrap'

import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser
} from "react-icons/fa";

import {
  useNavigate
} from "react-router-dom";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  logout,
  reset
} from "../features/auth/authSlice"


function NavigationBar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          navbar
        </Navbar.Brand>
        <Nav className="me-auto">

          <Navbar.Toggle aria-controls="navbar-dark-example" />

            <LinkContainer to="/">
              <Nav.Link>
                  Home
              </Nav.Link>
            </LinkContainer>
            
        </Nav>

          {
            user ? (
              <>
              <Nav>
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={user.data.username}
                      menuVariant="dark"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>
                          <FaUser /> Profile
                        </NavDropdown.Item>
                      </LinkContainer>

                      <NavDropdown.Divider />

                      <NavDropdown.Item onClick={onLogout}>
                        <FaSignOutAlt /> Logout
                      </NavDropdown.Item>
                    
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Nav>
              </>
            ) : (
              <>
              <Nav>

                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaSignInAlt /> Login
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Nav.Link>
                    <FaUser /> Register
                  </Nav.Link>
                </LinkContainer>

              </Nav>
              </>
            )
          }

      </Container>
    </Navbar>
  )
}

export default NavigationBar