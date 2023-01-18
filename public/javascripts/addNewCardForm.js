let addCardBtn = document.getElementById('add-card-btn');
addCardBtn.addEventListener('click', addNewCardForm);
let cardSetId = cardSet._id;
// let cardForms = document.getElementById("card-forms");

function addNewCardForm() {
    // create the form element
    let form = document.createElement("form");
    form.className = "card-form mb-3 validated-form row";
    form.action = "/cardSets/" + cardSetId + "/cards"
    form.method = "POST";
    form.setAttribute("novalidate", true);

    // create the input fields
    let frontInput = document.createElement("input");
    // frontInput.type = "text";
    frontInput.className= "form-control ms-3 col";
    frontInput.name = "card[front]";
    frontInput.placeholder = "Front of Card";
    form.appendChild(frontInput);

    let backInput = document.createElement("input");
    backInput.name = "card[back]";
    backInput.className = "form-control ms-3 col";
    backInput.placeholder = "Back of Card";
    form.appendChild(backInput);

    // create the submit button
    let submitBtn = document.createElement("button");
    // submitBtn.type = "submit";
    // submitBtn.value = "Submit";
    submitBtn.innerHTML= "Submit"
    submitBtn.className = "btn btn-success ms-3 me-3 col"
    form.appendChild(submitBtn);
    // add the form to the container
    document.getElementById("card-forms").appendChild(form);
    // add the onsubmit event to handle the form submission
    // form.addEventListener("submit", function (e) {
    //     // e.preventDefault();
    //     form.parentNode.removeChild(form);
    // });
}

// function handleCardFormSubmit(e) {
//     e.preventDefault();
//     let form = e.target;
//     // your code here to handle the form submission
    
// }

