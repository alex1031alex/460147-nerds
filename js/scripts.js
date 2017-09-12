  var link = document.querySelector(".main-footer-btn");
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");  
  var login = popup.querySelector("[name=login]");    
  var password = popup.querySelector("[name=email]");  
  var storage = localStorage.getItem("login");

  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");   
    if (storage) {
  login.value = storage;
  } else { 
  login.focus();                                   
  }
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  }); 
  form.addEventListener("submit", function (evt) {        
    if (!login.value || !email.value) {                                   
  evt.preventDefault();
  console.log("Нужно ввести логин и пароль");    
  } else {
    localStorage.setItem("login", login.value);  
  }
  }); 
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
  });
 