const name1 = prompt("Я запишу вас в куку! Пожалуйста, представьтесь!");

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

if (name1) {
  setCookie("user", name1, { secure: true, "max-age": 3600 });
} else {
  setCookie("user", "Unknown_user", { secure: true, "max-age": 3600 });
}
