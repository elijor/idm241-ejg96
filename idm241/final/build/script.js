const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

let counter = 1;

function updateCounter() {
    counterElement.textContent = counter;
  }

  function resetCounter() {
    // counterElement.textContent = 1;
    counter = 1;
    updateCounter();
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
const modalImg = document.querySelector("#modalimg img");


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
    // modal.classList.add("hiddenmodal");
    console.log("testing-close-before-reset");

    resetCounter();
    var sbutton1 = document.getElementById('b1');
    var sbutton2 = document.getElementById('b2');
    var sbutton3 = document.getElementById('b3');
    var sbutton4 = document.getElementById('b4');
    var sbutton5 = document.getElementById('b5');


    sbutton1.classList.remove('selected');
    sbutton2.classList.remove('selected');
    sbutton3.classList.remove('selected');
    sbutton4.classList.remove('selected');
    sbutton5.classList.remove('selected');
    console.log("testing-close-after-reset");
};

function addedtocart() {
  var textchange = document.getElementById("atc");
  textchange.classList.add("bold");
  textchange.innerText = "Added to Cart!";
  setTimeout(() => {
    mBackground.classList.add("hiddenmodal-b");
    textchange.innerText = "Add to Cart";
    textchange.classList.remove("bold");
    var sbutton1 = document.getElementById('b1');
    var sbutton2 = document.getElementById('b2');
    var sbutton3 = document.getElementById('b3');
    var sbutton4 = document.getElementById('b4');
    var sbutton5 = document.getElementById('b5');


    sbutton1.classList.remove('selected');
    sbutton2.classList.remove('selected');
    sbutton3.classList.remove('selected');
    sbutton4.classList.remove('selected');
    sbutton5.classList.remove('selected');
  }, 900);
};


// function heartLike() {
//   const heart = document.querySelector(".unliked");
//   heart.classList.add('active');
// };

document.addEventListener('DOMContentLoaded', function () {
  // Get references to the buttons
  var sbutton1 = document.getElementById('b1');
  var sbutton2 = document.getElementById('b2');
  var sbutton3 = document.getElementById('b3');
  var sbutton4 = document.getElementById('b4');
  var sbutton5 = document.getElementById('b5');




  // Add click event listener to sbutton
  sbutton1.addEventListener('click', function () {
    // Add "selected" class to sbutton
    sbutton1.classList.add('selected');

    // Remove "selected" class from sbutton2
    sbutton2.classList.remove('selected');
    sbutton3.classList.remove('selected');
    sbutton4.classList.remove('selected');
    sbutton5.classList.remove('selected');

  });

  // Add click event listener to sbutton2
  sbutton2.addEventListener('click', function () {
    // Add "selected" class to sbutton2
    sbutton2.classList.add('selected');

    // Remove "selected" class from sbutton
    sbutton1.classList.remove('selected');
    sbutton3.classList.remove('selected');
    sbutton4.classList.remove('selected');
    sbutton5.classList.remove('selected');
  });
  sbutton3.addEventListener('click', function () {
    // Add "selected" class to sbutton2
    sbutton3.classList.add('selected');

    // Remove "selected" class from sbutton
    sbutton1.classList.remove('selected');
    sbutton2.classList.remove('selected');
    sbutton4.classList.remove('selected');
    sbutton5.classList.remove('selected');
  });
  sbutton4.addEventListener('click', function () {
    // Add "selected" class to sbutton2
    sbutton4.classList.add('selected');

    // Remove "selected" class from sbutton
    sbutton1.classList.remove('selected');
    sbutton3.classList.remove('selected');
    sbutton2.classList.remove('selected');
    sbutton5.classList.remove('selected');
  });
  sbutton5.addEventListener('click', function () {
    // Add "selected" class to sbutton2
    sbutton5.classList.add('selected');

    // Remove "selected" class from sbutton
    sbutton1.classList.remove('selected');
    sbutton3.classList.remove('selected');
    sbutton4.classList.remove('selected');
    sbutton2.classList.remove('selected');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select the like button
  const likeButton = document.getElementById('likeButton');

  // Add click event listener to the like button
  likeButton.addEventListener('click', function () {
    // Check if the button has the 'unliked' class
    if (likeButton.classList.contains('unliked')) {
      likeButton.classList.add('bounce');
      setTimeout(() => {
        likeButton.classList.remove('bounce');
        likeButton.classList.add('liked');
        likeButton.classList.remove('unliked');
      }, 200);
    } else {
      likeButton.classList.toggle('shake');
      setTimeout(() => {
        likeButton.classList.remove('liked');
        likeButton.classList.remove('shake');
        likeButton.classList.add('unliked');
      }, 200);
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select the like button
  const likeButton = document.getElementById('likeButton2');

  // Add click event listener to the like button
  likeButton.addEventListener('click', function () {
    // Check if the button has the 'unliked' class
    if (likeButton.classList.contains('unliked')) {
      likeButton.classList.add('bounce');
      setTimeout(() => {
        likeButton.classList.remove('bounce');
        likeButton.classList.add('liked');
        likeButton.classList.remove('unliked');
      }, 200);
    } else {
      likeButton.classList.toggle('shake');
      setTimeout(() => {
        likeButton.classList.remove('liked');
        likeButton.classList.remove('shake');
        likeButton.classList.add('unliked');
      }, 200);
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select the like button
  const likeButton = document.getElementById('likeButton3');

  // Add click event listener to the like button
  likeButton.addEventListener('click', function () {
    // Check if the button has the 'unliked' class
    if (likeButton.classList.contains('unliked')) {
      likeButton.classList.add('bounce');
      setTimeout(() => {
        likeButton.classList.remove('bounce');
        likeButton.classList.add('liked');
        likeButton.classList.remove('unliked');
      }, 200);
    } else {
      likeButton.classList.toggle('shake');
      setTimeout(() => {
        likeButton.classList.remove('liked');
        likeButton.classList.remove('shake');
        likeButton.classList.add('unliked');
      }, 200);
    }
  });
});


// let heartElements = document.querySelectorAll('.unliked');

// heartElements.forEach(function(heart) {
//   heart.addEventListener('click', function() {
//     // Toggle the bounce class
//     this.classList.toggle('bounce');

//     setTimeout(() => {

//       this.classList.remove('bounce');
//       this.classList.remove('unliked');
//       this.classList.add('liked');
//     }, 300);
//   });
// });




// let likedElements = document.querySelectorAll('.liked');

// likedElements.forEach(function(likedele) {
//   likedele.addEventListener('click', function() {
//     // Add the 'shake' class for horizontal shake animation
//     this.classList.add('shake');

//     setTimeout(() => {
//       this.classList.remove('shake');
//       this.classList.add('unliked');
//       this.classList.remove('liked');
//     }, 400);
//   });
// });


// // document.addEventListener('DOMContentLoaded', function () {
// //   // Select the like button
//   const likeButton = document.getElementById('favorite1');

//   // Add click event listener to the like button
//   likeButton.addEventListener('click', function () {
//     // Check if the button has the 'unliked' class
//     if (likeButton.classList.contains('unliked')) {
//       // Remove 'unliked', add 'liked'
//       likeButton.classList.remove('unliked');
//       likeButton.classList.add('liked');
//       likeButton.textContent = 'Unlike';
//     } else {
//       // Remove 'liked', add 'unliked'
//       likeButton.classList.remove('liked');
//       likeButton.classList.add('unliked');
//       likeButton.textContent = 'Like';
//     }
//   });
// });





// document.addEventListener('DOMContentLoaded', function () {
//   // Assuming you have a variable "atc"
//   var atc = document.getElementById('atc'); // Replace 'atc' with the actual ID or reference of your target element

//   // Check if any element with class "size" has the class "selected"
//   var sizeElements = document.querySelectorAll('.sbch');

//   for (var i = 0; i < sizeElements.length; i++) {
//     if (sizeElements[i].classList.contains('selected')) {
//       // Add the class "activated" to the variable "atc"
//       atc.classList.add('selected');
//       break; // Assuming you want to break out of the loop after finding the first element with the class "selected"
//     }
//   }
//   closeb.addEventListener('click', function () {
//   }

// });