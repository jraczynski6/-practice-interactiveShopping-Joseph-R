// DOM elements
const form = document.getElementById("list-form");
const input = document.getElementById("item-submission");
const list = document.getElementById("shopping-list");


//Add to ul
form.addEventListener('submit', (event) => {

    // prevent page reload
    event.preventDefault();
    
    console.log("form submitted");

    const item = input.value.trim().toLowerCase();

    const li = document.createElement("li");

    li.textContent = item;

    list.appendChild(li);

    input.value = "";
});