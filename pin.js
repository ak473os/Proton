

let pass = prompt("Restricted Access! Enter the password to enter this site!");
let pwd = "ProtonStaff1";

if (pass === null) { // Check for canceled prompt
  location.reload(); 
} else if (pass.toLowerCase() == pwd.toLowerCase()) { 
  alert('Welcome Staff!');
} else {
  alert('Incorrect password. Access denied.'); 
  location.reload(); 
} 
