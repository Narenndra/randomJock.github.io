let jokeTextEle = document.getElementById("jokeText");
let jokeBtnEle = document.getElementById("jokeBtn");
let loadingEle = document.getElementById("spinner");

function getJoke() {
    jokeTextEle.classList.add("d-none");
    loadingEle.classList.remove("d-none");
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonText) {
            jokeTextEle.classList.remove("d-none");
            loadingEle.classList.add("d-none");
            jokeTextEle.textContent = jsonText.value;
        })
}

jokeBtnEle.addEventListener("click", getJoke);