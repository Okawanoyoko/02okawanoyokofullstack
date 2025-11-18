import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <div className="header">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">読書マーカー</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="Originaltext">日本書紀</Nav.Link>
              <Nav.Link href="kojiki">古事記</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
    </>
  );
}

export default Header;
