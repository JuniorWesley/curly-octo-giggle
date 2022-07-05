const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const testObject = {
    "One": 1,
    "Two": 2,
    "Three": 3    
}

localStorage.setItem("testObject", JSON.stringify(testObject));

const retrievedObject = localStorage.getItem("testObject");

console.log(JSON.stringify(retrievedObject));

h1.textContent = JSON.stringify(retrievedObject);

const Person = {
    "name": "Wesley",
    "age": 21
}

localStorage.setItem("Person", JSON.stringify(Person));

const retrievedPerson = JSON.parse(localStorage.getItem("Person"));

console.log(JSON.stringify(retrievedPerson));

h2.textContent = JSON.stringify(retrievedPerson);