// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error = document.getElementById("modal")

error.classList.add("hidden")

const emptyHearts = document.querySelectorAll('.like-glyph') 
  console.log(emptyHearts)
emptyHearts.forEach(like => {
  // Add a click event listener to the empty heart element
  like.addEventListener('click', () => {
    // Function to be executed when the user clicks on the empty heart
    mimicServerCall() // This is where the server simulation is triggered
    .then(response => {
      console.log(like)
      if (like.textContent == FULL_HEART) {
        like.textContent = EMPTY_HEART
        like.classList.remove("activated-heart")
        
      } else {
        like.textContent = FULL_HEART
        like.classList.add("activated-heart")
      }
    }) // Code to execute when the server call is successful
    .catch((e) => {
      console.log(e) // Code to execute when there is an error
      error.classList.remove("hidden")
      const modalMessage = document.getElementById("modal-message")
      modalMessage.textContent = e
      setTimeout(() => {
        error.classList.add("hidden")
      }, 3000)

    })
  });

}) 

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
