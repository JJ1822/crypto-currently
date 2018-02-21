import $ from 'jquery';

export const fetchCoinPrice = (coin_tag) => {
  return (
  $.ajax({
    type: 'GET',
    url: `https://api.coinbase.com/v2/prices/${coin_tag}-USD/spot`,
    dataType: 'json',
  })
)};
