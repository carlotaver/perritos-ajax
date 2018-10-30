// fetch :: String => Promise
// then :: Function =>???
//json :: nada=> Promise

const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

document.querySelector(".add-doggo").addEventListener("click", onClick);

function onClick(_event) {
  fetch(RANDOM_DOG_URL)
    .then(function(apiResponse) {
      return apiResponse.json();
    })
    .then(function(jsonResponse) {
      const img = document.createElement("img");
      img.alt = "Perrito Bonito!";
      img.src = jsonResponse.message;

      document.querySelector(".doggos").appendChild(img);
    });
}
