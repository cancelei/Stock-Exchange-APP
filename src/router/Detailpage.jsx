import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import Navbar from '../components/NavElement/NavElement';
import './DetailPage.css'; // Importing the CSS

export default function Detailpage() {
  const {
    symbol, name, price, change, dayLow, dayHigh, marketCap, volume, exchange,
  } = useParams();

  return (
    <main className="detail-main">
      <Navbar />
      <Container className="detail-container">
        <h2 className="text-center mb-4">
          Stock Detail for
          {' '}
          {name}
          (
          {symbol}
          )
        </h2>
        <Table striped bordered hover className="detail-table">
          <tbody>
            <tr>
              <td>Price</td>
              <td>
                {price}
              </td>
            </tr>
            <tr>
              <td>Daily change</td>
              <td>
                {change}
              </td>
            </tr>
            <tr>
              <td>Min value today</td>
              <td>
                {dayLow}
              </td>
            </tr>
            <tr>
              <td>Max value today</td>
              <td>
                {dayHigh}
              </td>
            </tr>
            <tr>
              <td>Market Cap</td>
              <td>
                {marketCap}
              </td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>
                {volume}
              </td>
            </tr>
            <tr>
              <td>Exchange</td>
              <td>
                {exchange}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </main>
  );
}
