const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogContainer = document.querySelector(".doggos");

function onClick() {
  const dogPromise = fetch(RANDOM_DOG_URL);

  dogPromise
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      console.log(json.message);

      const img = document.createElement("img");
      img.alt = "perrito bonito";
      img.src = json.message;

      dogContainer.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", onClick);
