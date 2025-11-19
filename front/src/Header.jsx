import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <div className="header">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">My annotation</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="Originaltext">Songs</Nav.Link>
              <Nav.Link href="kojiki">Buy</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
    </>
  );
}

export default Header;
