window.addEventListener("scroll", function(){
    const header = document.querySelector('.header')
    header.classList.toggle('rolagem', window.scrollY > 20)
});


window.sr = ScrollReveal({ reset: true });

sr.reveal('.products', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});
sr.reveal('.content', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});


sr.reveal('footer', {
  rotate: { x: 0, y: 80, z: 0},
  duration: 3000
});

sr.reveal('.container-final', {
  rotate: { x: 0, y: 80, z: 0},
  duration: 3000
});

sr.reveal('.accessor', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
});
sr.reveal('.sub-titulo',
 { duration: 3000});

sr.reveal('.btn',
 { duration: 3000});

 sr.reveal('.ajuda',
 { duration: 3000});

 const btn = document.querySelector(".button");

 btn.onmousemove = function(e){
    const x = e.pagex - btn.offsetLeft;
    const y = e.pagey - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px') 
 }

 

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  
  small.innerText = message;

 
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}










const initSlider = () => { 

  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  scrollbarThumb.addEventListener("mousedown", (e) => {
     const startX = e.clientX;
     const thumbPosition = scrollbarThumb.offsetLeft;

     const handleMouseMove = (e) => {
         const deltaX = e.clientX - startX;
         const newThumbPosition = thumbPosition + deltaX;
         const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

         const boundedPosition = Math.max(0, Math.min( maxThumbPosition, newThumbPosition));
         const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

         scrollbarThumb.style.left = `${boundedPosition}px`;
         imageList.scrollLeft = scrollPosition;
     }

     const handleMouseUp = () => {
     document.removeEventListener("mousemove", handleMouseMove);
     document.removeEventListener("mouseup", handleMouseUp);
     }

     document.addEventListener("mousemove", handleMouseMove);
     document.addEventListener("mouseup", handleMouseUp);
  });



slideButtons.forEach(button => {
     button.addEventListener("click", () => {
     const direction = button.id === "prev-slide" ? -1 : 1;
     const scrollAmount = imageList.clientWidth * direction;
     imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
 });
});

const handleSlidedeButtons = () => {
 slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
 slideButtons[1].style.display = imageList.scrollLeft >=  maxScrollLeft ? "none" : "block";
}

const updateScrollThumbPosition = () => {
 const scrollPosition = imageList.scrollLeft;
 const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
 scrollbarThumb.style.left = `${thumbPosition}px`;
}

imageList.addEventListener("scroll", () => {
 handleSlidedeButtons();
 updateScrollThumbPosition();
});

} 

window.addEventListener("load", initSlider);