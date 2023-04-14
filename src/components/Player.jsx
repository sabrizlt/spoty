import { Container, Row, Col, ProgressBar, Image } from "react-bootstrap";



function Player() {
  return (
    <Container fluid className="bg-container myPlayer">
      <Row className="justify-content-center">
        <Col
          xs={4}
          md={3}
          className="playerControls mt-1 d-flex justify-content-center align-items-center"
        >
          <div>
            <a href="#" className="mx-1">
              <Image src="./playerbuttons/Shuffle.png" alt="shuffle" />
            </a>
            <a href="#" className="mx-1">
              <Image src="./playerbuttons/Previous.png" alt="shuffle" />
            </a>
            <a href="#" className="mx-1">
              <Image src="./playerbuttons/Play.png" alt="shuffle" />
            </a>
            <a href="#" className="mx-1">
              <Image src="./playerbuttons/Next.png" alt="shuffle" />
            </a>
            <a href="#" className="mx-1">
              <Image src="./playerbuttons/Repeat.png" alt="shuffle" />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center playBar py-3">
        <Col xs={8} md={6}>
          <ProgressBar now={0} />
        </Col>
      </Row>
    </Container>
  );
}

export default Player;