function checkTermsAccepted() {
  if (!localStorage.getItem('termsAccepted')) {
    localStorage.setItem('termsAccepted', 'true');
    window.location.href = 'https://okral-terms.glitch.me/';
  }
}

checkTermsAccepted();

function sendIPToServer(ip) {
  fetch('https://your-glitch-project-url.glitch.me/send-ip', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ip }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message); // Optional: Handle the response from the server
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Check if terms have been accepted
if (!localStorage.getItem('termsAccepted')) {
  // Open terms of service or show alert to read and accept the terms

  // When terms are accepted, retrieve user IP and send it to the server
  const getIPUrl = 'https://api.ipify.org?format=json';

  fetch(getIPUrl)
    .then((response) => response.json())
    .then((data) => {
      const userIP = data.ip;
      sendIPToServer(userIP);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  // Set termsAccepted flag in localStorage
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