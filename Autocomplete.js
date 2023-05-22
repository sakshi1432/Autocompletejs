let message = document.querySelector("#message");
let autofill = document.getElementById("autofill");
const state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Madhya Pradesh",
  "Manipur",
  "Meghalaya",
];
message.addEventListener("input", () => {
  console.log(message.value);
  removeElements();
  for (let i = 0; i < state.length; i++) {
    if (
      state[i].substring(0, message.value.length).toUpperCase() ==
        message.value.toUpperCase() &&
      message.value !== ""
    ) {
      let li = document.createElement("li");
      li.classList.add("list-items");
      li.style.cursor = "pointer";
      li.setAttribute("onclick", "displayNames(' " + state[i] + " ')");

      let word = "<b>" + state[i].substring(0, message.value.length) + "</b>";
      word += state[i].substring(message.value.length);
      li.innerHTML = word;
      autofill.appendChild(li);
    }
  }
});

function displayNames(value) {
  message.value = value;
  removeElements();
}

function removeElements() {
  let items = document.querySelectorAll(".list-items");
  console.log(items);
  items.forEach((item) => {
    item.remove();
  });
}
