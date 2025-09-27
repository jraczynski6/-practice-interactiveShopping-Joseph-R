// DOM elements
const form = document.getElementById("list-form");
const input = document.getElementById("item-submission");
const list = document.getElementById("shopping-list");


//Add to ul
form.addEventListener('submit', (event) => {

    // prevent page reload
    event.preventDefault();

    const item = input.value.trim().toLowerCase();
    if (item === "") return;

    const li = document.createElement("li");

    //create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.type = "button";

    //remove button behavior
    removeBtn.addEventListener("click", function() {
        li.remove();
    });


    li.textContent = item;

    li.appendChild(removeBtn);

    list.appendChild(li);

    input.value = "";

    console.log("form submitted");
});