const button = document.querySelector(".button");

const backdrop = document.querySelector(".modal");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {

  const target = e.target.closest(".btn-close-modal");

  if (!target) {

    return;

  }

  toggleModal();

});

function toggleModal() {

  backdrop.classList.toggle("is-open");

}