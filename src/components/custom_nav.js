import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const CustomNavbar = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as={Link} to="/island-website">Visit Taniti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/island-website'>Home</Nav.Link>
                    <NavDropdown title="Travel" id="basic-nav-dropdown">
                        <NavDropdown.Item as={HashLink} to='/travel#travel-to'>Getting To Taniti</NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to='/travel#get-around'>On Island Transportation</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Accomadation" id="basic-nav-dropdown">
                        <NavDropdown.Item as={HashLink} to='/accomadations#resort'>Resort</NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to='/accomadations#other-options'>
                            Other Options
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to='/activities'>Activities</Nav.Link>
                    <Nav.Link as={Link} to='/faq'>FAQs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default CustomNavbar;
