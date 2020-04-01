function navbar(burger, menu) {
  let isActive = false;
  burger.addEventListener("click", () => {
    if (isActive) {
      menu.classList.remove("active");
      isActive = false;
    } else {
      menu.classList.add("active");
      isActive = true;
    }
  });
}
function apper(items) {
  window.addEventListener("scroll", () => {
    items.forEach(item => {
      const itemPos = item.getBoundingClientRect().top;
      const windowPos = window.innerHeight / 1.2;
      if (itemPos < windowPos) item.classList.add("apper");
      if (itemPos > windowPos) item.classList.remove("apper");
    });
  });
}
function popUp(signIn, signUp, openBtns, overlay, overlay, choise) {
  function model() {
    let whatIsActive = signIn;
    choise.forEach(n => {
      n.addEventListener("click", () => {
        if (n.id === "signUp_btn") {
          handleClose(signIn, overlay);
          handleOpen(signUp, overlay);
          whatIsActive = signUp;
        } else if (n.id === "signIn_btn") {
          handleClose(signUp, overlay);
          handleOpen(signIn, overlay);
          whatIsActive = signIn;
        }
      });
    });
    openBtns.forEach(btn =>
      btn.addEventListener("click", () => handleOpen(signIn, overlay))
    );

    overlay.addEventListener("click", () => handleClose(whatIsActive, overlay));
  }
  function handleOpen(popup, overlay) {
    popup.classList.add("active");
    overlay.classList.add("active");
  }
  function handleClose(popup, overlay) {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  }

  model();
}

function main() {
  let signIn = document.querySelector("#signIn"),
    signUp = document.querySelector("#signUp"),
    openBtns = document.querySelectorAll(".openpop"),
    overlay = document.querySelector("#overlay"),
    choise = document.querySelectorAll(".sign"),
    items = document.querySelectorAll(".hide"),
    burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu");

  navbar(burger, menu);
  apper(items);
  popUp(signIn, signUp, openBtns, overlay, overlay, choise);
}

main();
