start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
}

function onClick(_event) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  fetch(RANDOM_DOG_URL)
    .then(toJson)
    .then(function(jsonResponse) {
      const img = document.createElement("img");
      img.alt = "Perrito Bonito!";
      img.src = jsonResponse.message;

      document.querySelector(".doggos").appendChild(img);
    });
}
function toJson(apiResponse) {
  return apiResponse.json();
}
