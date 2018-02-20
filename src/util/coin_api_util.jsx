export const fetchCoin = (coin_tag) => (
  $.ajax({
    type: 'GET',
    url: `https://api.coinbase.com/v2/prices/${coin_tag}-USD/buy`,
    dataType: 'json',
  });
);
