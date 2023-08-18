import './NavElement.css';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header className="header">
        <Container className="d-flex justify-content-center" bordered="true">
          <Col className="d-flex justify-content-center">
            <nav className="navInner">
              <Link to="/" className="d-flex justify-content-center" style={{ margin: 'auto' }}>
                <button type="submit" className="button-back">
                  <BsFillArrowLeftCircleFill />
                </button>
              </Link>
              <h2>Stock Prices</h2>
              <h2>by NYSE</h2>
            </nav>
          </Col>
        </Container>
      </header>
    </>
  );
}
