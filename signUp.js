// https://66e7e6acb17821a9d9da6f7f.mockapi.io/users


let RegstUsername =document.getElementById("RegstUsername");
let RegstPass =document.getElementById("RegstPassword")
let RegstEmail =document.getElementById("RegstEmail1")
let RegsrBtn =document.getElementById("CreatAcount")
// for regst
//   Creating a resource
RegsrBtn.addEventListener("click", () => {

    fetch('https://66e7e6acb17821a9d9da6f7f.mockapi.io/users', {
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

  })

// RegsrBtn.addEventListener("click", () => {

//   fetch('https://66e7e6acb17821a9d9da6f7f.mockapi.io/users', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
  

//   fetch('https://api.thecatapi.com/v1/images/search')
// .then(response => response.json())
// .then(data => console.log(data));
// })
// console.log(username.value)