// ## API сервера

// - GET (https://cats.petiteweb.dev/api/single/:user/show) - отобразить всех котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/ids) - отобразить все возможные айди котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/show/:id) - отобразить конкретного котика
// - POST (https://cats.petiteweb.dev/api/single/:user/add) - добавить котика
// - PUT (https://cats.petiteweb.dev/api/single/:user/update/:id) - изменить информацию о котике
// - DELETE (https://cats.petiteweb.dev/api/single/:user/delete/:id)- удалить котика из базы данных

// const CONFIG_API = {
//   url: "https://cats.petiteweb.dev/api/single/:user",
//   headers: {
//     "Content-type": "aplication/json",
//   },
// };

// class API {
//   constructor(config) {
//     this._url = config.url;
//     this._headers = config.headers;
//   }

//   _onResponse(res) {
//     return res.ok
//       ? res.json()
//       : Promise.reject({ ...res, message: "Error server" });
//   }

//   getAllCats() {
//     return fetch(`${this._url}/show`, {
//       method: "GET",
//     }).then(this._onResponse);
//   }

//   addNewCat(data) {
//     return fetch(`${this._url}/add`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: this._headers,
//     }).then(this._onResponse);
//   }
// }

// const api = new API(CONFIG_API);
const url = "https://cats.petiteweb.dev/api/single/:user"; // our link api

const listCats = document.querySelector(".list__cats"); // list cats for card
const templateCardCat = document.querySelector("#card-template"); // template card cats
let cardImg, cardName, cardDescription, cardYear, cardRating;

// function for request and add data for card
async function fetchHandler() {
  // do error checking with try catch
  try {
    const response = await fetch(`${url}/show`);
    const data = await response.json();

    data.forEach((element) => {
      let contentCatsCard = templateCardCat.content
        .querySelector(".card")
        .cloneNode(true);

      // transfer data for our tag
      cardImg = templateCardCat.content.querySelector(".card__img img");
      //add attribute data for lazy load
      // cardImg.setAttribute("data", element.image);
      // console.log(cardImg);
      cardImg.src = element.image;

      cardName = templateCardCat.content.querySelector(".card__name");
      cardName.textContent = element.name;

      cardDescription =
        templateCardCat.content.querySelector(".card__description");
      cardDescription.textContent = element.description;

      cardYear = templateCardCat.content.querySelector(".card__year");
      cardYear.textContent = element.age + " years";

      cardRating = templateCardCat.content.querySelector(".card__rating");
      cardRating.textContent = element.rate + "/10";

      listCats.append(contentCatsCard);
    });
  } catch (error) {
    console.log(error);
  }

  // POST API
  // let fetchData = {
  //   method: "POST",
  //   body: data,
  //   headers: new Headers(),
  // };

  // try {
  //   const newCat = await fetch(`${url}/add`, fetchData);
  //   const dataCat = await newCat.json();
  // } catch (error) {
  //   console.log(error);
  // }
}

fetchHandler();
