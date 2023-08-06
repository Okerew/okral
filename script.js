
const correctPassword = '*okral$15#';

function checkPassword() {
  const inputPassword = prompt('Enter the password to view the content:');
  
  if (inputPassword === correctPassword) {
    showContent();
  } else {
    alert('Incorrect password. Please try again.');
  }
}

function showContent() {
  const contentDiv = document.getElementById('content');
  contentDiv.style.display = 'block';
}

window.onload = checkPassword;



function autoclicker() {
        var x = document.getElementById("autoclicker");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
 
function spammer() {
        var x = document.getElementById("spammer");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
 
function cracks() {
        var x = document.getElementById("cracks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }