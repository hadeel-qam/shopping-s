


// const oldMethodInput = document.querySelector(".old-method input");

// button.addEventListener("click", () => {
//   document.documentElement.classList.toggle("show-passwords");
//   if (oldMethodInput.getAttribute("type") === "text") {
//     oldMethodInput.setAttribute("type", "password");
//   } else {
//     oldMethodInput.setAttribute("type", "text");
//   }
// });








const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

const show = () => {
  let password = document.getElementById("password");
  let visibility = document.querySelector(".visibility");
  if (password.type === "password") {
    password.type = "text";
    visibility.style.color = "rgb(128, 0, 122)";
  } else {
    password.type = "password";
    visibility.style.color = "#fff";
  }
};


// pwShowHide.forEach(eyeIcon => {
// eyeIcon.addEventListener("click", () => {
//   let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
//   pwFields.forEach(password => {
//       if(password.type === "password"){
//           password.type = "text";
//           eyeIcon.classList.replace("bx-hide", "bx-show");
//           return;
//       }
//       password.type = "password";
//       eyeIcon.classList.replace("bx-show", "bx-hide");
//   })
  
// })
// })      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})
