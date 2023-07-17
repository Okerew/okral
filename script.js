function checkTermsAccepted() {
  if (!localStorage.getItem('termsAccepted')) {
    localStorage.setItem('termsAccepted', 'true');
    window.location.href = 'https://okral-terms.glitch.me/';
  }
}

checkTermsAccepted();


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