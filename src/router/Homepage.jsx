import './Homepage.css';
import { Col } from 'react-bootstrap';
import Navbar from '../components/NavElement/NavElement';
import DisplayStocks from '../components/displayData/displayStocks';

export default function Homepage() {
  return (
    <main className="mi-contenedor-con-max-width">
      <Col className="justify-content-center">
        <Navbar />
        <DisplayStocks />
      </Col>
    </main>
  );
}
