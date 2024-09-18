// let url =fetch("http://api.aladhan.com/v1/timings/{date}")

// console.log(url)

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2905ef34acd91c3b581d338b554e89ca')
  .then((response) => response.json())
  .then((json) => json

);


let test = document.getElementById("test")
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2905ef34acd91c3b581d338b554e89ca', {
    method: 'POST',
    body: JSON.stringify({
      username: RegstUsername.value,
      password:RegstPass.value,
      email:RegstEmail.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })




  
 

  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2905ef34acd91c3b581d338b554e89ca/clouds')
  .then((response) => response.json())
  .then((json) => console.log(json));