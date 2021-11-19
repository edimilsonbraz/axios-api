const url = "http://localhost:5500/api"
const newUser = {
  name: "Edimilson Braz",
  avatar: "http://lorempixel.com/400/200/",
  city: "Brasília"
}
const userUpdate = {
  name: "Mayk Brito da Silva",
  avatar: "http://lorempixel.com/400/200/",
  city: "Paraná"
}

// Pega os dados da API
function getUser() {
  axios.get(url)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}
getUser()


// Envia dados para API
function addNewUser() {
  axios.post(url, newUser)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}
//addNewUser()   


//Modificando dados da API
function updateUser() {
  axios.put(`${url}/4`, userUpdate) 
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}
//updateUser()


//Deletando dados da API
function deleteUser() {
  axios.delete(`${url}/3`)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}
//deleteUser()


function getOneUser() {
  axios.get(`${url}/2`)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error)) 
}
getOneUser()