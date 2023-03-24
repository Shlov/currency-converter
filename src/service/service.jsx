export const getUserInfo = ({latitude, longitude}) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;
  return fetch(urlPosition).then(response => response.json());
};


var myHeaders = new Headers();
myHeaders.append("apikey", "Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj");
// my key
// myHeaders.append("apikey", "QyClMc2RdQVlFaq5AsenCSKeB6swSSsS");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


export const exChange = (to, from, amount) => {
  return   fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.json())

};

export const getExchangeRates = (currency='USD') => {
  const AK = 'ec385bd0b15a447aae764ec6825a4d'+'64';
  const url = `https://openexchangerates.org/api/latest.json?app_id=${AK}&base=${currency}`;
  return fetch(url)
    .then(response => response.json());
  
}