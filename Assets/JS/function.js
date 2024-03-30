function toggleSignup(){
  document.getElementById("login-toggle").style.backgroundColor="#fff";
  document.getElementById("login-toggle").style.color="#222";
  document.getElementById("signup-toggle").style.backgroundColor="#57b846";
  document.getElementById("signup-toggle").style.color="#fff";
  document.getElementById("login-form").style.display="none";
  document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
  document.getElementById("login-toggle").style.backgroundColor="#57B846";
  document.getElementById("login-toggle").style.color="#fff";
  document.getElementById("signup-toggle").style.backgroundColor="#fff";
  document.getElementById("signup-toggle").style.color="#222";
  document.getElementById("signup-form").style.display="none";
  document.getElementById("login-form").style.display="block";
}


function signUp() {

  const firstName = document.querySelector('#signup-form input[placeholder="First name"]').value;
  const lastName = document.querySelector('#signup-form input[placeholder="Last name"]').value;
  const email = document.querySelector('#signup-form input[placeholder="Enter your email"]').value;
  const password = document.querySelector('#signup-form input[placeholder="Password"]').value;
  const confirmPassword = document.querySelector('#signup-form input[placeholder="Confirm Password"]').value;
  const termsAccepted = document.getElementById('check').checked;


  if (!termsAccepted) {
      alert("Please accept the Terms of Use and Privacy Policy.");
      return;
  }

  const userData = `
      <h2>These are the data from the Sign Up Form. Thank you!</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p><strong>Confirm Password:</strong> ${confirmPassword}</p>
  `;
  const newUserWindow = window.open('', 'New User Information', 'width=400,height=400');
  newUserWindow.document.body.innerHTML = userData;
}


const signupButton = document.querySelector('.signup');
signupButton.addEventListener('click', signUp);
