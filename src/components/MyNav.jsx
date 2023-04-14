import { Container, Nav } from "react-bootstrap";

function MyNavbar() {
  return (
    <Container>
      <Nav>
        <Nav.Item>
          <Nav.Link href="#">TRENDING</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">PODCAST</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">NEW RELEASES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">DISCOVER</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default MyNavbar;