import './displayStocks.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { incrementCount, stocksData } from '../../redux/stocks/stockSlice';

export default function DisplayStocks() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);
  const [searchStock, setSearchStock] = useState('');

  useEffect(() => {
    if (!stocks.length) {
      dispatch(stocksData());
    }
  }, [dispatch, stocks.length]);

  const filteredStocks = stocks.filter((stock) => stock.name
    .toLowerCase().includes(searchStock.toLowerCase()));

  const middleIndex = Math.ceil(filteredStocks.length / 2); // Calculate the middle index

  const handleIncrementViews = (symbol) => {
    setTimeout(() => {
      dispatch(incrementCount({ symbol }));
    });
  };

  return (
    <Container>
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          placeholder="search stock"
          value={searchStock}
          onChange={(e) => setSearchStock(e.target.value)}
        />
      </div>

      <Row>
        <Col className="p-0">
          {/* Render column 1 */}
          <ul className="list-group">
            {filteredStocks.slice(0, middleIndex).map((stock, index) => (
              <li key={stock.symbol} className={`list-group-item p-0 ${index % 2 === 0 ? 'even' : 'odd'}`}>
                <Link
                  to={`/detail/${stock.symbol}/${stock.name}/${stock.price}/${stock.change}/${stock.dayLow}/${stock.dayHigh}/${stock.marketCap}/${stock.volume}/${stock.exchange}`}
                >
                  <button type="submit" onClick={() => handleIncrementViews(stock.symbol)} className="stocks-btn">
                    {stock.symbol}
                    {' '}
                    -
                    {stock.price}
                    {' '}
                    Views:
                    {stock.views}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </Col>

        <Col className="p-0">
          {/* Render column 2 */}
          <ul className="list-group">
            {filteredStocks.slice(middleIndex).map((stock, index) => (
              <li key={stock.symbol} className={`list-group-item p-0 ${index % 2 !== 0 ? 'even' : 'odd'}`}>
                <Link
                  to={`/detail/${stock.symbol}/${stock.name}/${stock.price}/${stock.change}/${stock.dayLow}/${stock.dayHigh}/${stock.marketCap}/${stock.volume}/${stock.exchange}`}
                >
                  <button type="submit" onClick={() => handleIncrementViews(stock.symbol)} className="stocks-btn">
                    {stock.symbol}
                    {' '}
                    -
                    {stock.price}
                    {' '}
                    Views:
                    {stock.views}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
