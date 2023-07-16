if (!localStorage.getItem('termsAccepted')) {
  window.open('https://okral-terms.glitch.me/', '_blank');
  alert('Please read and accept the terms of service');
  localStorage.setItem('termsAccepted', 'true');
}


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