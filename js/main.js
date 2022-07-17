// SCRIPT ZA NAVBAR I OSTALE ANIMACIJE
const body = document.querySelector(" body");
const navbar = document.querySelector("header");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disable-scroll");
};
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disable-scroll");
};

// JS ZA AOS ANIMACIJE
AOS.init({
  duration: 1200,
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// JQUERY ZA SCROLL
$("a.page-scroll").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top + 90,
    },
    50
  );
});

// BACK TO TOP GUMB
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  scrollFunction();
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//MAP
// Initialize and add the map
function myMap() {
  // Locations
  const center = { lat: 45.80433861364107, lng: 15.995081167936178 };
  const knezija = { lat: 45.7911392294397, lng: 15.952604868885443 };
  const srednjaci = { lat: 45.78973510257567, lng: 15.941498564478035 };
  const gredice = { lat: 45.78455230895617, lng: 15.93844974331816 };
  const remiza = { lat: 45.797268621028344, lng: 15.940003537361227 };
  const jarun = { lat: 45.776868709906765, lng: 15.937986311481682 };
  const fallerovo = { lat: 45.79998878489222, lng: 15.936072334126234 };
  const voltino = { lat: 45.79951781087857, lng: 15.929972307497897 };
  const ljubljanica = { lat: 45.7944386516236, lng: 15.93273316755646 };
  const tresnjevackiplac = { lat: 45.79779276555363, lng: 15.956932983259508 };
  const savica = { lat: 45.78991006237311, lng: 15.98913693136404 };
  const jarun2 = { lat: 45.779542797176425, lng: 15.9143274899785 };
  const rudes = { lat: 45.79825284456545, lng: 15.917527141323934 };
  const svetice = { lat: 45.818002110192815, lng: 16.013662124798774 };
  const precko = { lat: 45.795169993328244, lng: 15.901734449155944 };
  const ciglenica = { lat: 45.80528488254902, lng: 15.944970312675895 };
  const siget = { lat: 45.77674922570695, lng: 15.966980405187503 };
  const trnsko = { lat: 45.77090484005913, lng: 15.964890712441298 };
  const trnover = { lat: 45.83388731897813, lng: 16.071220495488262 };
  const britanac = { lat: 45.81193831275142, lng: 15.963523730695016 };

  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 12,
    center: center,
  });

  const knezijaMarker = new google.maps.Marker({
    position: knezija,
    map: map,
    title: "Street Workout park - Knežija",
  });

  const knezijaInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  knezijaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Knežija";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = knezijaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/rkYZFMf3x1BFV39aA' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const srednjaciMarker = new google.maps.Marker({
    position: srednjaci,
    map: map,
    title: "Street Workout park - Srednjaci",
  });

  const srednjaciInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  srednjaciMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Srednjaci";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = srednjaciInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/dL7N1ZzrCCbyoXmR8' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const grediceMarker = new google.maps.Marker({
    position: gredice,
    map: map,
    title: "Street Workout park - Gredice",
  });

  const grediceInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  grediceMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Gredice";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = grediceInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za penjanje <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/HrZLmVUbE3EKmDb7A' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const remizaMarker = new google.maps.Marker({
    position: remiza,
    map: map,
    title: "Street Workout park - Remiza",
  });

  const remizaInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  remizaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Remiza";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = remizaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Set paralelnih šipki za propadanja različitih visina <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/6PnKpWyq9YtRmHej8' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const jarunMarker = new google.maps.Marker({
    position: jarun,
    map: map,
    title: "Street Workout park - Jarun",
  });

  const jarunInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  jarunMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Jarun";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = jarunInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) s dodatkom švedskih ljestvi sa svake strane <br>Srednje visoke paralelne šipke za propadanja <br>Švedske ljestve <br>Set visokih horizontalnih šipki različitih visina <br> <br>Veliki izbor improviziranih utega u obliku betonskih blokova i automobilskih guma (prazne i pune)";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/1suKL9hkAr3CqnN38' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const fallerovoMarker = new google.maps.Marker({
    position: fallerovo,
    map: map,
    title: "Street Workout park - Fallerovo",
  });

  const fallerovoInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  fallerovoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Fallerovo";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = fallerovoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Mali fitness komplet koji se sastoji od stolice, rotirajućeg kruga i jedne vrste bicikla <br>Bicikl <br>Set od dvije stolice različitih funkcija; pull/push pokreti <br>Dvije stolice jedna nasuprot druge koje rekreiraju određenu varijantu (&#34leg press&#34) vježbe <br>Sprava za ljuljanje <br>Set od dvije sprave za ljuljanje okrenute jedna nasuprot drugoj";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/ATCuJMVBKK6HJmwH7' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const voltinoMarker = new google.maps.Marker({
    position: voltino,
    map: map,
    title: "Street Workout park - Voltino",
  });

  const voltinoInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  voltinoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Voltino";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = voltinoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set paralelnih šipki za propadanja različitih visina <br>Šipke za sklekove <br>Sprava za veslanje <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/97UCaF1Ej6HjNphSA' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const ljubljanicaMarker = new google.maps.Marker({
    position: ljubljanica,
    map: map,
    title: "Street Workout park - Ljubljanica",
  });

  const ljubljanicaInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  ljubljanicaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Ljubljanica";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = ljubljanicaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Set kotača za vrtnju <br>Set paralelnih šipki za propadanja različitih visina <br>Bicikl <br>Sprava za skijanje <br>Sprava za penjanje <br>Švedske ljestve u kombinaciji s dijelom za propadanja <br>Dvije samostalne visoke horizontalne šipke za zgibove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/xQpTk7UG7sAwx2vv6' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const tresnjevackiplacMarker = new google.maps.Marker({
    position: tresnjevackiplac,
    map: map,
    title: "Street Workout park - Trešnjevački plac",
  });

  const tresnjevackiplacInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  tresnjevackiplacMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Trešnjevački plac";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML =
      tresnjevackiplacInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od tri niske horizontalne šipke različitih visina <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za skijanje <br>Set za ljude u invalidskim kolicima koji se sastoji od dvije vježbe vrtnje i improviziranih ringova za zgibove";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/iHbaNbx6Nonfzgks5' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const savicaMarker = new google.maps.Marker({
    position: savica,
    map: map,
    title: "Street Workout park - Savica",
  });

  const savicaInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  savicaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Savica";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = savicaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Klupa s ručkama";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/XshNN5s8oKUVMTu66' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const jarun2Marker = new google.maps.Marker({
    position: jarun2,
    map: map,
    title: "Street Workout park - Jarun 2",
  });

  const jarun2Info =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  jarun2Marker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Jarun 2";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = jarun2Info;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Četiri horizontalne ljestve (&#34Monkey bar&#34) <br>Srednje visoke paralelne šipke za propadanja <br>Drveni trupci za trbušnjake <br>Švedske ljestve <br>Niz horizontalnih šipki za zgibove različitih visina";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/YEGKXDzSYFpwtcjT6' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const rudesMarker = new google.maps.Marker({
    position: rudes,
    map: map,
    title: "Street Workout park - Rudeš",
  });

  const rudesInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  rudesMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Rudeš";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = rudesInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Švedske ljestve";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/dRE2ctPwnPD3UpYs8' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const sveticeMarker = new google.maps.Marker({
    position: svetice,
    map: map,
    title: "Street Workout park - Svetice",
  });

  const sveticeInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  sveticeMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Svetice";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = sveticeInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Dvije visoke i jedne srednje visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Veliki niz od preko 8 visokih horizontalnih šipki za zgibove različitih visina <br>Dva seta niskih horizontalnih šipki različitih visina <br>Jedna samostalna srednje visoka šipka za zgibove s dodatkom konopca visokog otprilike 5m <br>Tri kompleta malih vodoravnih šipki na podu";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/CNgAxe692gDCrJy46' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const preckoMarker = new google.maps.Marker({
    position: precko,
    map: map,
    title: "Street Workout park - Prečko",
  });

  const preckoInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  preckoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Prečko";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = preckoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za propadanje <br>Set niskih horizontalnih šipki različitih visina";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/Dbe1sonARSKGSXJ17' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const ciglenicaMarker = new google.maps.Marker({
    position: ciglenica,
    map: map,
    title: "Street Workout park - Ciglenica",
  });

  const ciglenicaInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  ciglenicaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Ciglenica";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = ciglenicaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Dvije klupice za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Sprava za skijanje <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za penjanje u kombinaciji sa spravom za njihanje";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/pV6aAdrAH99uWkbv7' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const sigetMarker = new google.maps.Marker({
    position: siget,
    map: map,
    title: "Street Workout park - Siget",
  });

  const sigetInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  sigetMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Siget";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = sigetInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve u kombinaciji s mrežom za penjanje i malim umjetnim zidom za penjanje <br>Dvije horizontalne šipke za zgibove različite visine <br>Niske vodoravne šipke na podu <br>Srednje visoke paralelne šike za propadanja <br>Trupac za održavanje ravnoteže <br>Set od tri niske horizontalne šipke različitih visina";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/ZsRNo65vd3HQSucm7' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const trnskoMarker = new google.maps.Marker({
    position: trnsko,
    map: map,
    title: "Street Workout park - Trnsko",
  });

  const trnskoInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  trnskoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Trnsko";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = trnskoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Srednje visoke paralelne šipke za propadanja <br>Set od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s kratkim švedskim ljestvama i dodatkom za vježbu snage u prstima <br>Šipke za sklekove <br>Niz srednje visokih horizontalnih šike za zgibove različitih visina";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/32YSQk3gXziYMyRP9' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const trnoverMarker = new google.maps.Marker({
    position: trnover,
    map: map,
    title: "Street Workout park - Trnover",
  });

  const trnoverInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  trnoverMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Trnover";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = trnoverInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Jedan par visokih i srednje visokih paralelnih šipki za propadanja <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Niz od pet visokih horizontalnih šipki za zgibove različitih visina <br>Set od dvije visoke i dvije srednje visoke horizontalne šipke za zgibove različitih visina <br>Stalak za skakanje <br>Tri para niskih paralelnih šipki na podu";
    document.getElementById("park-link").innerHTML =
      "<a href='https://goo.gl/maps/yL6GFgmvJJpbpXcw5' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });

  const britanacMarker = new google.maps.Marker({
    position: britanac,
    map: map,
    title: "Street Workout park - Britanac",
  });

  const britanacInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  britanacMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Britanac";
    document.getElementById("park-image").src = "images/swiper-1.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = britanacInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Srednje visoke paralelne šipke za propadanja <br>Dva seta od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s kratkim švedskim ljestvama i dodatkom za vježbu snage u prstima <br>Šipke za sklekove <br>Niz srednje visokih horizontalnih šike za zgibove različitih visina";
    document.getElementById("park-link").innerHTML =
      "<a href='https://g.page/street-workout-park-zagreb?share' target=_blank>Klikni i pogledaj slike parka!</a>";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML = "Ocjena:";
    document.getElementById("park-name").scrollIntoView();
  });
}
