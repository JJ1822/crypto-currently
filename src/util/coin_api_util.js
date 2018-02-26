import $ from 'jquery';

export const fetchCoinPrice = (coin_tag) => (
  $.ajax({
    type: 'GET',
    url: `https://api.coinbase.com/v2/prices/${coin_tag}-USD/spot`,
    dataType: 'json',
  })
);

export const fetchPastCoinPrices = () => (
  $.ajax({
    type: 'GET',
    url: `https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG`,
    dataType: 'json',
  })
);
