const apiURL = "https://jsonplaceholder.typicode.com/users"
const body = document.querySelector("body")

fetch(apiURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      const h2 = document.createElement("h2")
      const span = document.createElement("span")
      h2.innerText = data[i].name
      span.innerText =
        data[i].address.street + "-" + data[i].address.suite

      body.appendChild(h2)
      body.appendChild(span)
    }
  })

const array = [
  {
    name: "John",
    salary: 8000,
    age: 30
  },
  {
    name: "Peter",
    salary: 12000,
    age: 40
  },
  {
    name: "Mary",
    salary: 18000,
    age: 50
  },
  {
    name: "Janet",
    salary: 11000,
    age: 9
  },
  {
    name: "Jerome",
    salary: 150,
    age: 100
  },
  {
    name: "Johney",
    salary: 200,
    age: 2000
  }
]

array.forEach(function (person) {
  if (person.salary > 2000) {
    const h2 = document.createElement("h2")
    const span = document.createElement("span")
    h2.innerText = person.name
    span.innerText = person.salary
    body.append(h2, span)
  }
})
