import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">BLOG</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <NavDropdown title="Blog" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Afficher tous</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Ajouter un article</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Chercher</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about">A propos</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;