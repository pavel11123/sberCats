const form = document.getElementById("popup-form-cat");
const formFields = form.elements;
const submit = form.querySelector('[type="submit"]');

submit.addEventListener("click", clearStorage);

function clearStorage() {
  localStorage.clear();
}

function changeHandler() {
  if (this.type !== "checkbox") {
    console.log("Запись в localStorage: " + this.name, this.value);
    localStorage.setItem(this.name, this.value);
  } else {
    console.log("Запись в localStorage: " + this.name, this.checked);
    localStorage.setItem(this.name, this.value);
  }
}

function checkStorage() {
  for (let i = 0; i < formFields.length; i++) {
    if (formFields[i].type !== "submit") {
      if (formFields[i].type !== "checked") {
        formFields[i].checked = localStorage.getItem(formFields[i].name);
      } else {
        formFields[i].value = localStorage.getItem(formFields[i].name);
      }
    }
  }
  attachEvents();
}

function attachEvents() {
  for (let i = 0; i < formFields.length; i++) {
    formFields[i].addEventListener("change", changeHandler);
  }
}

checkStorage();
