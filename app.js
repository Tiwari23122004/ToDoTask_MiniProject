let btn = document.querySelector("button[type='submit']");
let inp = document.querySelector("#task-input");
let ul = document.querySelector("#task-list");

// ✅ Add Task
btn.addEventListener("click", function (e) {
  e.preventDefault(); // stop form refresh
  if (inp.value.trim() === "") return; // prevent empty items

  let item = document.createElement("li");
  item.className =
    "flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200 transition-all duration-200 ease-in-out";
  item.innerText = inp.value;

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "ml-4 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-200";

  item.appendChild(delBtn);
  ul.appendChild(item);

  inp.value = "";
});

// ✅ Event Delegation for delete
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
