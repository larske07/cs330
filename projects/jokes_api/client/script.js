'use strict;'

async function fetchData(url) {

    return await fetch(url)
    .then(response => response.json())
    .catch(error => console.error());   
}

async function getData() {

    lang = document.querySelector("#selLang").value
    category = document.querySelector("#selCat").value
    number = document.querySelector("#selNum").value

    let url = `https://jokes-api-zpxb.onrender.com/api/v1/jokes/${lang}/${category}/${number}`;
    console.log(url);

    let jokes = await fetchData(url);

    displayData(jokes.jokes);
}

function displayData(data) {
    let contentDiv = document.querySelector("#jokes");
    contentDiv.innerHTML = "";
    for (let joke of data) {
        let jokeElement = document.createElement("div");
        jokeElement.innerHTML = joke;
        jokeElement.classList.add("joke");
        contentDiv.appendChild(jokeElement);
    }
}