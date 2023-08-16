import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/NavElement/NavElement';

export default function Detailpage() {
  const {
    symbol, name, price, change, dayLow, dayHigh, marketCap, volume, exchange,
  } = useParams();
  return (
    <main>
      <Navbar />
      <Container
        className="d-flex"
        style={{
          height: '80vh', backgroundColor: 'orange', color: 'white', fontSize: '2rem',
        }}
      >
        <Col md={8}>
          <Row className="d-flex row-cols-2" style={{ backgroundColor: '#5788e4', width: '' }}>
            <div className="d-flex row-col-2" style={{ height: '8rem' }}>
              <h2 style={{ margin: 'auto' }}>Stock Detail</h2>
            </div>
            <div style={{ margin: 'auto' }}>
              <h3>{name}</h3>
              <h3>
                Ticker:
                {' '}
                {symbol}
              </h3>
            </div>
          </Row>
          <Row className="d-flex justify-content-center">
            <p>
              Price:
              {' '}
              {price}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p>
              Daily change:
              {' '}
              {change}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p>
              Min value today:
              {' '}
              {dayLow}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p>
              Max value today:
              {' '}
              {dayHigh}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p>
              Market Cap:
              {' '}
              {marketCap}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p>
              Vol:
              {' '}
              {volume}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p>
              Exchange:
              {' '}
              {exchange}
            </p>
          </Row>
          <Link to="/" className="d-flex justify-content-center">
            <Button type="submit" variant="secondary" className="mt-3"> &crarr; Close</Button>
          </Link>
        </Col>
      </Container>
    </main>
  );
}
