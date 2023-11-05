const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

let counter = 1;

function updateCounter() {
    counterElement.textContent = counter;
  }

function increment() {
    if (counter < 5) {
        counter++;
        updateCounter();
      }
}

function decrement() {
    if (counter > 1) {
        counter--;
        updateCounter();
      }
  }

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

updateCounter();



const modal = document.querySelector(".modal");
const mBackground = document.querySelector(".modal-b");

function openModal1() {
    console.log("testing");
    mBackground.classList.remove("hiddenmodal-b");
    modal.classList.remove("hiddenmodal");

    modalTitle.innerText = "Dickies Eisenhower Unlined Gas Jacket";
    modalPrice.innerText = "$79.00";
    modalImg.src = "imgs/img1b-prodview.webp"
}

const modalTitle = document.getElementById("modaltitle");
const modalPrice = document.getElementById("modalprice");
const modalImg = document.querySelector("#modalimg img")


function openModal2() {
    // console.log("testing2-open");
    mBackground.classList.remove("hiddenmodal-b");
    modal.classList.remove("hiddenmodal");

    modalTitle.innerText = "UO Big Corduroy Work Shirt";
    modalPrice.innerText = "$79.00";
    modalImg.src = "imgs/img2b-prodview.webp"
}

function openModal3() {
    // console.log("testing3-open");
    mBackground.classList.remove("hiddenmodal-b");
    modal.classList.remove("hiddenmodal");

    modalTitle.innerText = "BDG Blocked Canvas Jacket";
    modalPrice.innerText = "$89.00";
    modalImg.src = "imgs/img3b-prodview.webp"
}

function closeModal() {
    console.log("testing-close");
    mBackground.classList.add("hiddenmodal-b");
    modal.classList.add("hiddenmodal");
}