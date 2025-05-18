const toggleInput = document.querySelector(".neo-toggle-input");
const navList = document.querySelector(".nav__list");

document.addEventListener("DOMContentLoaded", () => {
  toggleInput.addEventListener("change", () => {
    handleToggleLogic();
  });
});

//* Better clean and scalable logic

const handleToggleLogic = () => {
  if (toggleInput.checked) {
    navList.classList.add("nav-visible");
    navList.classList.remove("nav-hidden");
  } else {
    navList.classList.add("nav-hidden");
    navList.classList.remove("nav-visible");
  }
};

//! Verbose logic
// const handleToggleLogic = () => {
//   if (toggleInput.checked) {
//     navList.style.visibility = "visible";
//     navList.style.transform = "translateX(0)";
//   } else {
//     navList.style.transform = "translateX(100%)";
//     setTimeout(() => {
//       navList.style.visibility = "hidden";
//     }, 400);
//   }
// };
