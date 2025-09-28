// DOM elements
const form = document.getElementById("list-form");
const input = document.getElementById("item-submission");
const list = document.getElementById("shopping-list");


//Add to ul
form.addEventListener('submit', (event) => {

    // prevent page reload
    event.preventDefault();

    // trim input
    const item = input.value.trim().toLowerCase();
    if (item === "") return;

    // create li element
    const li = document.createElement("li");

    //create span
    const span = document.createElement("span");

    span.textContent = item;

    //create remove button
    // TODO: Change button alignment behavior
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.type = "button";

    //remove button behavior
    removeBtn.addEventListener("click", function() {
        li.remove();
    });
    
    //create edit button
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "Edit";

    //edit button behavior
    editBtn.addEventListener("click", function() {
        if (editBtn.textContent === "Edit") {
            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.value = li.firstChild.textContent;
            li.replaceChild(inputEdit, li.firstChild);
            inputEdit.focus();
            editBtn.textContent = "Save";
        } else {
            const editText = li.querySelector("input").value.trim();
            const textNode = document.createTextNode(editText);
            li.replaceChild(textNode, li.firstChild);
            editBtn.textContent = "Edit";
        }
    });

    //create button column
    const buttonColumn = document.createElement("div");

    buttonColumn.appendChild(removeBtn);
    buttonColumn.appendChild(editBtn);
 
    li.appendChild(span);
    li.appendChild(buttonColumn);

    list.appendChild(li);


    input.value = "";

    console.log("form submitted");
});