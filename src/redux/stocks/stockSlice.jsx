import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const myUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,AMZN,MSFT,GOOGL,BRK.A,JNJ,JPM,PG,V,NVDA,META,INTC,TSLA,RIVN,AAL,AXP,T,AVT_p,BA,7751,CVX,C,KO,DOW,XOM,GE,GM,IBM,MA,MET,MU,NFLX,NKE,OXY,PYPL,PEP,PFE,GS,SBUX,UNA,WMT,WFC,?apikey=53bb981d8d215ae37819960394ac7247';

export const stocksData = createAsyncThunk(
  'stocks/stocksData',
  async () => {
    try {
      const response = await axios.get(myUrl);
      const { data } = response;
      return data;
    } catch (error) {
      return Promise.reject(error.message ? error.message : error);
    }
  },
);

const initialState = {
  stocks: [],
  isLoading: false,
  error: false,
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      const { symbol } = action.payload;
      const stock = state.stocks.find((stock) => stock.symbol === symbol);
      if (stock) {
        stock.views += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(stocksData.fulfilled, (state, action) => ({
        ...state,
        stocks: action.payload.map((stock) => ({
          symbol: stock.symbol,
          name: stock.name,
          price: stock.price,
          change: stock.change,
          dayLow: stock.dayLow,
          dayHigh: stock.dayHigh,
          marketCap: stock.marketCap,
          volume: stock.volume,
          exchange: stock.exchange,
          views: 0,
        })),
      }));
  },
});

export const { incrementCount } = stockSlice.actions;
export default stockSlice.reducer;
