

let pass = prompt("Restricted Access! Enter the password to enter this site!");
let pwd = "ProtonTester";

if (pass === null) { // Check for canceled prompt
  location.reload(); 
} else if (pass.toLowerCase() == pwd.toLowerCase()) { 
  alert('Welcome Staff!');
} else {
  alert('Incorrect password. Access denied.'); 
  location.reload(); 
} 
