import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Dolce Tentazioni</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Tortas">Tortas</Nav.Link>
            <Nav.Link href="#Postres">Postres</Nav.Link>
            <Nav.Link href="#Finas">Finas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CartWidget/>
    </>
  );
}

export default NavBar;