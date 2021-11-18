const url = "http://localhost:5500/api"
const newUser = {
  name: "Edimilson Braz",
  avatar: "http://lorempixel.com/400/200/",
  city: "Brasília"
}

// Trás os dados da API
function getUser() {
  axios.get(url)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}

getUser()

// Cria os dados na API
function addNewUser() {
  axios.post(url, newUser)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

addNewUser()