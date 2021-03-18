const filterInput = document.getElementById("filter-input");
const names = document.querySelectorAll(".list-group-item");

filterInput.addEventListener("keyup", (e) => {
  const InputValue = filterInput.value.toLowerCase();
  names.forEach(name => {
    if (name.firstElementChild.innerHTML.toLowerCase().indexOf(InputValue) === 0) {
      name.style.display = "block";
      // console.log(name.firstElementChild.innerHTML.toLowerCase().indexOf(InputValue))
    } else {
      name.style.display = "none";
    }
  });

  e.preventDefault();
});