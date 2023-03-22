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

  }