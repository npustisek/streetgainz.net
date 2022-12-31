// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvFyb4i0wxQudl1DDn5XUGhS5LGZap60M",
  authDomain: "streetgainzform.firebaseapp.com",
  databaseURL:
    "https://streetgainzform-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "streetgainzform",
  storageBucket: "streetgainzform.appspot.com",
  messagingSenderId: "14841499325",
  appId: "1:14841499325:web:feb4e8dd15a6535d39f1d4",
  measurementId: "G-Z86PKWFL4Z",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
//reference emails collection

//newsletter
//Listen for form submit
document
  .getElementById("newsletterForm")
  .addEventListener("submit", submitFormNewsletter);

//submit form
function submitFormNewsletter(e) {
  e.preventDefault();

  //get values
  var email = e.target.querySelector(".email-newsletter").value;

  //save email
  saveNewsletter(email);

  document.getElementById("email-newsletter").value =
    "Vaš e-mail je uspješno poslan!!";
}

//save emails to firebase
function saveNewsletter(email) {
  const newPostKey = push(child(ref(database), "Newsletter")).key;
  set(ref(database, "Newsletter/" + newPostKey), { email: email });
}

//index-form
//Listen for form submit
const colForm = document.querySelector("#collaborationForm");
if (colForm) {
  colForm.addEventListener("submit", submitFormCollaboration);
}

//submit form
function submitFormCollaboration(e) {
  e.preventDefault();

  //get values
  var name = e.target.querySelector(".name-collaboration").value;
  var email = e.target.querySelector(".email-collaboration").value;
  var message = e.target.querySelector(".message-collaboration").value;

  //save collaboration
  saveCollaboration(name, email, message);

  e.target.querySelector(".name-collaboration").value =
    "Vaš podaci su uspješno poslani!";
  e.target.querySelector(".email-collaboration").value = "";
  e.target.querySelector(".message-collaboration").value = "";
}

//save collaboration to firebase
function saveCollaboration(name, email, message) {
  const newPostKey = push(child(ref(database), "Collaboration")).key;
  set(ref(database, "Collaboration/" + newPostKey), {
    name: name,
    email: email,
    message: message,
  });
}

//park-form
//Listen for form submit
const parkForm = document.querySelector("#parkMap");
if (parkForm) {
  parkForm.addEventListener("submit", submitFormParkMap);
}

//submit form
function submitFormParkMap(e) {
  e.preventDefault();

  //get values
  var firstname = e.target.querySelector(".user-park-firstname").value;
  var lastname = e.target.querySelector(".user-park-lastname").value;
  var email = e.target.querySelector(".user-park-email").value;
  var parkName = e.target.querySelector(".user-park-name").value;
  var parkBio = e.target.querySelector(".user-park-bio").value;

  //save park
  saveParkMap(firstname, lastname, email, parkName, parkBio);

  e.target.querySelector(".user-park-firstname").value =
    "Vaš podaci su uspješno poslani!";
  e.target.querySelector(".user-park-lastname").value = "";
  e.target.querySelector(".user-park-email").value = "";
  e.target.querySelector(".user-park-name").value = "";
  e.target.querySelector(".user-park-bio").value = "";
}

//save park to firebase
function saveParkMap(firstname, lastname, email, parkName, parkBio) {
  const newPostKey = push(child(ref(database), "ParkMap")).key;
  set(ref(database, "ParkMap/" + newPostKey), {
    name: firstname,
    lastname: lastname,
    email: email,
    parkName: parkName,
    parkBio: parkBio,
  });
}

//contact-form
//Listen for form submit
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", submitContactForm);
}

//submit form
function submitContactForm(e) {
  e.preventDefault();

  //get values
  var firstname = e.target.querySelector(".user-contact-firstname").value;
  var lastname = e.target.querySelector(".user-contact-lastname").value;
  var email = e.target.querySelector(".user-contact-email").value;
  var message = e.target.querySelector(".user-contact-message").value;

  //save contact
  saveContact(firstname, lastname, email, message);

  e.target.querySelector(".user-contact-firstname").value =
    "Vaš podaci su uspješno poslani!";
  e.target.querySelector(".user-contact-lastname").value = "";
  e.target.querySelector(".user-contact-email").value = "";
  e.target.querySelector(".user-contact-message").value = "";
}

//save contact to firebase
function saveContact(firstname, lastname, email, message) {
  const newPostKey = push(child(ref(database), "Contact")).key;
  set(ref(database, "Contact/" + newPostKey), {
    name: firstname,
    lastname: lastname,
    email: email,
    message: message,
  });
}
