const elForm = document.querySelector(".form");
const elInputName = document.querySelector(".form-name");
const elInputRelation = document.querySelector(".form-relation");
const elInputPhone = document.querySelector(".form-phone");
const elBox = document.querySelector(".box");

const todos = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputName = elInputName.value;
  const inputRelation = elInputRelation.value;
  const inputPhone = elInputPhone.value;

  const contacts = {
    firstName: inputName,
    relationship: inputRelation,
    phone: inputPhone,
  };

  todos.push(contacts);

  elInputName.value = null;
  elInputRelation.value = null;
  elInputPhone.value = null;

  elBox.innerHTML = null;

  for (let item of todos) {
    const newDiv = document.createElement("div");
    const newPName = document.createElement("p");
    const newPRelation = document.createElement("p");
    const newPPhone = document.createElement("p");

    newPName.textContent = `${item.firstName}`;
    newPRelation.textContent = `${item.relationship}`;
    newPPhone.textContent = `${item.phone}`;

    newDiv.appendChild(newPName);
    newDiv.appendChild(newPRelation);
    newDiv.appendChild(newPPhone);

    elBox.appendChild(newDiv);

    newDiv.style.border = "2px solid red";
    newDiv.style.borderRadius = "2px";

    // elBox.appendChild(newPName);
    // elBox.appendChild(newPRelation);
    // elBox.appendChild(newPPhone);
  }
});
