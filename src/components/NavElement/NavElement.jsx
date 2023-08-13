import './NavElement.css';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';

export default function Navbar() {
  return (
    <>
      <header className="header">
        <Container className="d-flex justify-content-center" bordered="true">
          <Col className="d-flex justify-content-center">
            <nav>
              <h1 className="d-flex justify-content-center">Stock Prices</h1>
              <h2 className="d-flex justify-content-center"> NYSE INDEX </h2>
            </nav>
          </Col>
        </Container>
      </header>
    </>
  );
}
