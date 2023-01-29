// базовый fetch с методом get для получения данных
// fetch("https://cats.petiteweb.dev/api/single/:user/show")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element);
//     });
//   });

// // Пример отправки POST запроса:
// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://cats.petiteweb.dev/api/single/:user/add", {
//   id: 907,
//   name: "Хозяин",
//   image:
//     "https://kartinkin.net/uploads/posts/2022-05/1652230618_21-kartinkin-net-p-kartinki-rizhego-kota-23.jpg",
//   age: 5,
//   rate: 6,
//   description: "Я хозяин в этом доме",
// }).then((data) => {
//   console.log(data); // JSON data parsed by `response.json()` call
// });

const url = "https://cats.petiteweb.dev/api/single/:user"; // our link api

const listCats = document.querySelector(".list__cats"); // list cats for card
const templateCardCat = document.querySelector("#card-template"); // template card cats
let contentCatsCard,
  cardImg,
  cardName,
  cardDescription,
  cardYear,
  cardRating,
  cardFavorite;

// function for request and add data for card
async function fetchHandler() {
  // do error checking with try catch
  try {
    const response = await fetch(`${url}/show`);
    const data = await response.json();

    data.forEach((element) => {
      // transfer data for our tag
      cardImg = templateCardCat.content.querySelector(".card__img img");

      //add attribute data for lazy load
      // cardImg.setAttribute("data", element.image);

      // checking that element.rate is not empty
      if (element.image === undefined || element.image.length == 0) {
        cardImg.src = "main/img/photo/cat-1.png";
      } else {
        cardImg.src = element.image;
      }

      cardName = templateCardCat.content.querySelector(".card__name");
      // checking that element.name is not empty
      if (element.name === undefined || element.name.length == 0) {
        cardName.textContent = "Жульен";
      } else {
        cardName.textContent = element.name;
      }

      cardDescription =
        templateCardCat.content.querySelector(".card__description");
      // checking that element.age is not empty
      if (
        element.description === undefined ||
        element.description.length == 0
      ) {
        cardDescription.textContent =
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sed, dolore exercitationem quas aliquam modi facilis. Ipsum sed, dolore exercitationem quas aliquam modi facilis.";
      } else {
        cardDescription.textContent = element.description;
      }

      // checking that element.age is not empty
      cardYear = templateCardCat.content.querySelector(".card__year");
      if (element.age === undefined || element.age === null) {
        cardYear.textContent = "0 years";
      } else {
        cardYear.textContent = element.age + " years";
      }

      cardRating = templateCardCat.content.querySelector(".card__rating");
      // checking that element.rate is not empty
      if (element.rate === undefined || element.rate === null) {
        cardRating.textContent = "0/10";
      } else {
        cardRating.textContent = element.rate + "/10";
      }

      cardFavorite = templateCardCat.content.querySelector(".card__heart img");
      if (element.favorite === true) {
        templateCardCat.content.querySelector(".card__heart").style.display =
          "block";
      } else {
        templateCardCat.content.querySelector(".card__heart").style.display =
          "none";
      }

      contentCatsCard = templateCardCat.content
        .querySelector(".card")
        .cloneNode(true);

      listCats.append(contentCatsCard);
      console.log(element);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchHandler();

// Пример отправки POST запроса:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // if (response.status !== 400) {
  //   location.reload();
  // } else {
  //   console.log(response.status);
  // }
  return await response.json();
}

const formElement = document.querySelector(".form"); // извлекаем элемент формы
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  postData("https://cats.petiteweb.dev/api/single/:user/add", {
    id: Number(formData.get("id")),
    age: formData.get("age"),
    name: formData.get("name"),
    rate: formData.get("rate"),
    description: formData.get("description"),
    favorite: formData.get("favorite"),
    image: formData.get("image"),
  }).then((data) => {
    alert(data.message);
    console.log(data);
    location.reload();
  });
});
