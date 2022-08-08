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
    delay: 5000,
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
  const spansko = { lat: 45.800536496435996, lng: 15.898664952412943 };
  const gajnice = { lat: 45.81736288334762, lng: 15.876114131361767 };
  const klaka = { lat: 45.83679250143254, lng: 16.0541721524014 };

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
    "Street Workout park Knežija smješten je u Zagrebu, preciznije u kvartu Knežija po kojem je i dobio ime. Park je jako loše postavljen jer osim &#34Monkey bar&#34 i jedne samostalne šipke nema potrebnih sprava za kvalitetan trening pogotovo što se tiče push dijela jer nema šipki za propadanja niti sklekove. Veliki plus ovog parka prema ostalima je što veliku većinu dana prostor parka u hladu zbog gustog drveća pa je ugodno za trenirati pogotovo u ljetnm razdoblju.";

  knezijaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Knežija";
    document.getElementById("park-image").src = "images/knezija.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = knezijaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/rkYZFMf3x1BFV39aA' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const srednjaciMarker = new google.maps.Marker({
    position: srednjaci,
    map: map,
    title: "Street Workout park - Srednjaci",
  });

  const srednjaciInfo =
    "Street Workout park Srednjaci smješten je u Zagrebu, preciznije u kvartu Srednjaci po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i park je u sklopu velikog parka za djecu i između Osnovne škole Josipa Račića i dječjeg vrtića Srednjaci";

  srednjaciMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Srednjaci";
    document.getElementById("park-image").src = "images/srednjaci.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = srednjaciInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/dL7N1ZzrCCbyoXmR8' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const grediceMarker = new google.maps.Marker({
    position: gredice,
    map: map,
    title: "Street Workout park - Gredice",
  });

  const grediceInfo =
    "Street Workout park Gredice smješten je u Zagrebu, preciznije u kvartu Gredice po kojem je i dobio ime. Park je jako loše postavljen jer osim &#34Monkey bar&#34 i jedne samostalne šipke nema potrebnih sprava za kvalitetan trening pogotovo što se tiče push dijela jer nema šipki za propadanja niti sklekove. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka.";

  grediceMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Gredice";
    document.getElementById("park-image").src = "images/gredice.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = grediceInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za penjanje <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/HrZLmVUbE3EKmDb7A' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const remizaMarker = new google.maps.Marker({
    position: remiza,
    map: map,
    title: "Street Workout park - Remiza",
  });

  const remizaInfo =
    "Street Workout park Remiza smješten je u Zagrebu, preciznije u kvartu Vurovčica.  Kvart je dosta mali i s obzirom da većinu toga prostora zahvaća Remiza ZET-a onda se tokom vremena među ljudima uobičajilo ime „Remiza“ po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Park je zanimljiv jer je dosta niži u odnosu na razinu ulice, pa nije toliko vidljiv slučajnim prolaznicima. Ovisno o periodu dana na velikom dijelu parka je hlad što je veliki plus tokom ljetnog razdoblja. Dodatan plus je i mogućnost dopune vode u podrumu obližnje zgrade. Jedina mala zamjerka je ta da se u sklopu parka nalazi i parkić za djecu.";

  remizaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Remiza";
    document.getElementById("park-image").src = "images/remiza.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = remizaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Set paralelnih šipki za propadanja različitih visina <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/6PnKpWyq9YtRmHej8' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const jarunMarker = new google.maps.Marker({
    position: jarun,
    map: map,
    title: "Street Workout park - Jarun",
  });

  const jarunInfo =
    "Street Workout park Jarun smješten je u Zagrebu, preciznije na jezeru Jarun po kojem je i dobio ime. Na cijelom jezeru nalaze se dva parka i oba parka su odlično postavljena, među boljima u Zagrebu. Park je zanimljiv jer ima mix starih old school šipki i novih tako da malo je problem debljina šipki jer su jedne predebele dok su druge pretanke. Dosta old school opreme je i malo izgubilo bitku s vremenom pa je u lošem stanju. Ovaj park je jedan od najstarijih parkova u Zagrebu i ističe se mal od drugh ne samo zbog svoje starosti nego i zbog mogućnosti treninga s dodatnim opterećenjem jer se u parku nalazi mnoštvo improviziranih utega u obliku automobilskih guma pa sve do čistih betonskih i drvenih blokova. Veliki plus ovog parka je i gusto drveće koje radi hlad većinu dana na prostoru parka pogotovo u jetnom razdoblju kao i mogućnost dopune vode na obližnjim fontama oko jezera.";

  jarunMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Jarun";
    document.getElementById("park-image").src = "images/jarun.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = jarunInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) s dodatkom švedskih ljestvi sa svake strane <br>Srednje visoke paralelne šipke za propadanja <br>Švedske ljestve <br>Set visokih horizontalnih šipki različitih visina <br> <br>Veliki izbor improviziranih utega u obliku betonskih blokova i automobilskih guma (prazne i pune)";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/1suKL9hkAr3CqnN38' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const fallerovoMarker = new google.maps.Marker({
    position: fallerovo,
    map: map,
    title: "Street Workout park - Fallerovo",
  });

  const fallerovoInfo =
    "Street Workout park Fallerovo smješten je u Zagrebu, preciznije u kvartu Trešnjevka, u sklopu Fallerovog šetališta po kojem je i dobio ime. Park je dosta loše postavljen, ima dosta nepotrebnih sprava i nema sprava za push vježbe kao što su šipke za propadanja i sklekove. Što se tiče pull vježbi, &#34Monkey bar&#34 i ostale šipke su odlične debljine i visine. Veliki plus ovog parka prema ostalima je što veliku većinu dana prostor parka u hladu zbog guste šume pa je ugodno za trenirati pogotovo u ljetnm razdoblju.";

  fallerovoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Fallerovo";
    document.getElementById("park-image").src = "images/fallerovo.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = fallerovoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Mali fitness komplet koji se sastoji od stolice, rotirajućeg kruga i jedne vrste bicikla <br>Bicikl <br>Set od dvije stolice različitih funkcija; pull/push pokreti <br>Dvije stolice jedna nasuprot druge koje rekreiraju određenu varijantu (&#34leg press&#34) vježbe <br>Sprava za ljuljanje <br>Set od dvije sprave za ljuljanje okrenute jedna nasuprot drugoj";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/ATCuJMVBKK6HJmwH7' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const voltinoMarker = new google.maps.Marker({
    position: voltino,
    map: map,
    title: "Street Workout park - Voltino",
  });

  const voltinoInfo =
    "Street Workout park Voltino smješten je u Zagrebu, preciznije u kvartu Voltino po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Veliki plus je i mogućnost dopune vode u obližnjim župnim prostorijama. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka i blizina obližnjoj crkvi sv. Leopolda Mandića pa nije baš uvijek primjereno puštati glasnu muziku, ako traje misno slavlje. ";

  voltinoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Voltino";
    document.getElementById("park-image").src = "images/voltino.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = voltinoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set paralelnih šipki za propadanja različitih visina <br>Šipke za sklekove <br>Sprava za veslanje <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/97UCaF1Ej6HjNphSA' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const ljubljanicaMarker = new google.maps.Marker({
    position: ljubljanica,
    map: map,
    title: "Street Workout park - Ljubljanica",
  });

  const ljubljanicaInfo =
    "Street Workout park Ljubljanica smješten je u Zagrebu, preciznije u kvartu Ljubljanica po kojem je i dobio ime. Park je solidno postavljen, debljina i visina šipki također dobra i sadrži sve potrebne sprave za kvalitetan trening. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i oba dvije šipke za zgibove se malo naginju na jednu stranu tj. nisu ravne.";

  ljubljanicaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Ljubljanica";
    document.getElementById("park-image").src = "images/ljubljanica.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = ljubljanicaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Set kotača za vrtnju <br>Set paralelnih šipki za propadanja različitih visina <br>Bicikl <br>Sprava za skijanje <br>Sprava za penjanje <br>Švedske ljestve u kombinaciji s dijelom za propadanja <br>Dvije samostalne visoke horizontalne šipke za zgibove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/xQpTk7UG7sAwx2vv6' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const tresnjevackiplacMarker = new google.maps.Marker({
    position: tresnjevackiplac,
    map: map,
    title: "Street Workout park - Trešnjevački plac",
  });

  const tresnjevackiplacInfo =
    "Street Workout park Trešnjevački plac smješten je u Zagrebu, preciznije u kvartu Trešnjevka u blizini trešnjevačkog placa po kojem je i dobio ime. Park je solidno postavljen, debljina i visina šipki je taman i sadrži sve potrebne sprave za kvalitetan trening. Park se nalazi odmah pored Osnovne škole Julija Klovića i u sklopu je kompleksa doma za starije osobe. Veliki plus ovog parka prema ostalima je što veliku većinu dana prostor parka u hladu zbog velikog drveća pa je ugodno za trenirati pogotovo u ljetnm razdoblju. Jedina mala zamjerka u parku je da je na nekim dijelovima teren malo neravan tj. nije ravan pa je nezgodno raditi handstand i slične stvari.";

  tresnjevackiplacMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Trešnjevački plac";
    document.getElementById("park-image").src = "images/plac.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML =
      tresnjevackiplacInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od tri niske horizontalne šipke različitih visina <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za skijanje <br>Set za ljude u invalidskim kolicima koji se sastoji od dvije vježbe vrtnje i improviziranih ringova za zgibove";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/iHbaNbx6Nonfzgks5' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const savicaMarker = new google.maps.Marker({
    position: savica,
    map: map,
    title: "Street Workout park - Savica",
  });

  const savicaInfo =
    "Street Workout park Savica smješten je u Zagrebu, preciznije u kvartu Savica po kojem je i dobio ime. Park je dosta loše postavljen jer ima mali izbor šipki za zgibove. Horizontalne ljestve tj. &#34Monkey bar&#34 ima predebele šipke i samo s jedne strane mogućnost izvedbe zgibova jer su s druge strane švedske ljestve. Ostale dvije šipke za zgibove imaju dobar hvat no neprikladne su visine pa nisu naročito korisne pogotovo za neke vježbe kao što su ruski zgibovi. Park se nalazi na uređenom savskom nasipu te je dobar za usputni trening uz neki cardio ili obrnuto. Prednost mu je i mogućnost dopune vode na obližnoj crpki. Mala zamjerka je da tokom ljetnog perioda nema hlada na prostoru parka.";

  savicaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Savica";
    document.getElementById("park-image").src = "images/savica.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = savicaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Klupa s ručkama";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/XshNN5s8oKUVMTu66' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const jarun2Marker = new google.maps.Marker({
    position: jarun2,
    map: map,
    title: "Street Workout park - Jarun 2",
  });

  const jarun2Info =
    "Street Workout park Jarun 2 smješten je u Zagrebu, preciznije na jezeru Jarun po kojem je i dobio ime. Na cijelom jezeru nalaze se dva parka i oba parka su odlično postavljena, među boljima u Zagrebu. Park je zanimljiv jer ima mix starih old school šipki i novih. Old school šipke su malo predebele, no novi dio parka je taman što se tiče debljine i visine šipki i sadrži sve potrebne sprave za kvalitetan trening no ovaj park se također ističe i po velikom izboru različitih šipki i ostalih sprava što ga čini idealnim izborom kada se organizira bilo kakav grupni trening. Veliki plus ovog parka je mogućnost dopune vode na obližnjim fontama oko jezera.";

  jarun2Marker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Jarun 2";
    document.getElementById("park-image").src = "images/jarun2.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = jarun2Info;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Četiri horizontalne ljestve (&#34Monkey bar&#34) <br>Srednje visoke paralelne šipke za propadanja <br>Drveni trupci za trbušnjake <br>Švedske ljestve <br>Niz horizontalnih šipki za zgibove različitih visina";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/YEGKXDzSYFpwtcjT6' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const rudesMarker = new google.maps.Marker({
    position: rudes,
    map: map,
    title: "Street Workout park - Rudeš",
  });

  const rudesInfo =
    "Street Workout park Rudeš smješten je u Zagrebu, preciznije u kvartu Rudeš po kojem je i dobio ime. Park je solidno postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Dodatan plus ovog parka je njegova pozicija jer je okružen zgradama sa svih strana pa nije toliko vidljiv za slučajne prlaznike. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka i blizina Osnovne škole Rudeš i dječjeg vrtića Grigor Vitez.";

  rudesMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Rudeš";
    document.getElementById("park-image").src = "images/rudes.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = rudesInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Švedske ljestve";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/dRE2ctPwnPD3UpYs8' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const sveticeMarker = new google.maps.Marker({
    position: svetice,
    map: map,
    title: "Street Workout park - Svetice",
  });

  const sveticeInfo =
    "Street Workout park Svetice smješten je u Zagrebu, preciznije u kvartu Svetice po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening no ovaj park se također ističe i po velikom izboru različitih šipki i ostalih sprava što ga čini idealnim izborom kada se organizira bilo kakav grupni trening. Park se nalazi u sklopu jedne vrste sportsko rekreacijskog centra gdje još djeluju dva atletska kluba Svetice i Dinamo Zrinjevac, malo dalje je smješten i kompleks bazena Svetice, ali glavna stvar je stadion Maksimir. Dodatan plus je i mogućnost dopune vode i odlaska na obližnji WC. Ovaj park zajedno s još dva parka Trnover i Britanac spada u najbolje parkove Zagreba, a usudili bi se reći i Hrvatske. Sva tri parka su planski izgrađena u dogovoru s lokalnom zajednicom i zbog toga se dosta ističu od šablonski postavljenih parkova koji prevladavaju u ostatku Zagreba. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka i dosta mali razmak između sprava s obzirom koliko još mjesta ima na raspolaganju.";

  sveticeMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Svetice";
    document.getElementById("park-image").src = "images/svetice.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = sveticeInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Dvije visoke i jedne srednje visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Veliki niz od preko 8 visokih horizontalnih šipki za zgibove različitih visina <br>Dva seta niskih horizontalnih šipki različitih visina <br>Jedna samostalna srednje visoka šipka za zgibove s dodatkom konopca visokog otprilike 5m <br>Tri kompleta malih vodoravnih šipki na podu";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/CNgAxe692gDCrJy46' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const preckoMarker = new google.maps.Marker({
    position: precko,
    map: map,
    title: "Street Workout park - Prečko",
  });

  const preckoInfo =
    "Street Workout park Prečko smješten je u Zagrebu, preciznije u kvartu Prečko po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening no dost je veliki razmak između sprava što je mali minus jer je dosta prostora ne iskorišteno. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka i blizina dječjeg vrtića Prečko.";

  preckoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Prečko";
    document.getElementById("park-image").src = "images/precko.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = preckoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za propadanje <br>Set niskih horizontalnih šipki različitih visina";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/Dbe1sonARSKGSXJ17' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const ciglenicaMarker = new google.maps.Marker({
    position: ciglenica,
    map: map,
    title: "Street Workout park - Ciglenica",
  });

  const ciglenicaInfo =
    "Street Workout park Ciglenica smješten je u Zagrebu, preciznije u kvartu Trešnjevka. Pored parka se nalazi staro vodocrpilište koje je svo u ciglama pa je park po tome i dobio ime. Park je odlično postavljen jedan od boljih u Zagrebu, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Dodatan plus je i mogućnost dopune vode u obližnjem parku za pse. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka.";

  ciglenicaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Ciglenica";
    document.getElementById("park-image").src = "images/ciglenica.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = ciglenicaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Dvije klupice za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Sprava za skijanje <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za penjanje u kombinaciji sa spravom za njihanje";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/pV6aAdrAH99uWkbv7' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const sigetMarker = new google.maps.Marker({
    position: siget,
    map: map,
    title: "Street Workout park - Siget",
  });

  const sigetInfo =
    "Street Workout park Siget smješten je u Zagrebu, preciznije u kvartu Siget po kojem je i dobio ime. Park je solidno postavljen, no problem je debljina  i visina šipki jer je jedna previsoka za nekog prosječne visine, dok je druga preniska za određene vježbe kao što su ruski zgibovi pa onda ostaje samo jedna korisna šipka u parku, a sličan problem je i s visinom šipki za propadanja koje su preniske. Veliki plus ovog parka prema ostalima je što veliku većinu dana prostor parka u hladu zbog guste šume pa je ugodno za trenirati pogotovo u ljetnm razdoblju. Ovaj park je u sklopu jedne vrste trim staze koja je postavljena u obliku šetnjice kroz park pa ima raznih sprava od grede za hodanje do različitih prepreka za preskakanje i klupica za trbušnjake.";

  sigetMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Siget";
    document.getElementById("park-image").src = "images/siget.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = sigetInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve u kombinaciji s mrežom za penjanje i malim umjetnim zidom za penjanje <br>Dvije horizontalne šipke za zgibove različite visine <br>Niske vodoravne šipke na podu <br>Srednje visoke paralelne šike za propadanja <br>Trupac za održavanje ravnoteže <br>Set od tri niske horizontalne šipke različitih visina";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/ZsRNo65vd3HQSucm7' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const trnskoMarker = new google.maps.Marker({
    position: trnsko,
    map: map,
    title: "Street Workout park - Trnsko",
  });

  const trnskoInfo =
    "Street Workout park Trnsko smješten je u Zagrebu, preciznije u kvartu Trnsko po kojem je i dobio ime. Park je solidno postavljen, debljina i visina šipki dobra možda bi bilo super kad bi bio malo veći izbor viših šipki za ruske zgibove. Po dizajnu i izgledu se razlikuje od ostalih parkova jer ima i zanimljive dodatke kao što je ploča za penjanje tj. za razvijanje snage u prstiju dosta česta oprema u dvoranama za penjanje. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka.";

  trnskoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Trnsko";
    document.getElementById("park-image").src = "images/trnsko.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = trnskoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Srednje visoke paralelne šipke za propadanja <br>Set od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s kratkim švedskim ljestvama i dodatkom za vježbu snage u prstima <br>Šipke za sklekove <br>Niz srednje visokih horizontalnih šike za zgibove različitih visina";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/32YSQk3gXziYMyRP9' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const trnoverMarker = new google.maps.Marker({
    position: trnover,
    map: map,
    title: "Street Workout park - Trnover",
  });

  const trnoverInfo =
    "Street Workout park Trnover smješten je u Zagrebu, preciznije u kvartu Trnovčica po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Park se nalazi odmah pored Osnovne škole Antuna Branka Šimića pa često zna biti dosta mladih u parku. Ovaj park zajedno s još dva parka Svetice i Britanac spadaju u najbolje parkove Zagreba, a usudili bi se reći i Hrvatske. Sva tri parka su planski izgrađena u dogovoru s lokalnom zajednicom i zbog toga se dosta ističu od šablonski postavljenih parkova koji prevladavaju u ostatku Zagreba. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka.";

  trnoverMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Trnover";
    document.getElementById("park-image").src = "images/trnover.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = trnoverInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Jedan par visokih i srednje visokih paralelnih šipki za propadanja <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Niz od pet visokih horizontalnih šipki za zgibove različitih visina <br>Set od dvije visoke i dvije srednje visoke horizontalne šipke za zgibove različitih visina <br>Stalak za skakanje <br>Tri para niskih paralelnih šipki na podu";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/yL6GFgmvJJpbpXcw5' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const britanacMarker = new google.maps.Marker({
    position: britanac,
    map: map,
    title: "Street Workout park - Britanac",
  });

  const britanacInfo =
    "Street Workout park Britanac smješten je u Zagrebu, preciznije u blizini Britanskog trga po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman kao i veliki izbor šipki, a također sadrži i sve potrebne sprave za kvalitetan trening. Veliki plus ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog okolnih zgrada pa je ugodno za trenirati posebice u ljetnom periodu. Ovaj park zajedno s još dva parka Svetice i Trnover spada u najbolje parkove Zagreba, a usudili bi se reći i Hrvatske. Sva tri parka su planski izgrađena u dogovoru s lokalnom zajednicom i zbog toga se dosta ističu od šablonski postavljenih parkova koji prevladavaju u ostatku Zagreba. Jedina mala zamjerka je pošto je okružen stambenim zgradama nije baš poželjno puštati preglasno muziku zbog okolnih stanara.";

  britanacMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Britanac";
    document.getElementById("park-image").src = "images/britanac.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = britanacInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Jedan par visokih i srednje visokih paralelnih šipki za propadanja <br>Dva seta od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s švedskim ljestvama <br>Set od dvije niske horizontalne šipke različitih visina <br>Set malih vodoravnih šipki na podu";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://g.page/street-workout-park-zagreb?share' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const spanskoMarker = new google.maps.Marker({
    position: spansko,
    map: map,
    title: "Street Workout park - Špansko",
  });

  const spanskoInfo =
    "Street Workout park Špansko smješten je u Zagrebu, preciznije u kvartu Špansko po kojem je i dobio ime. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Dodatan plus je i mogućnost dopune vode pored obližnjim terena nogometnog kluba Špansko. Park se nalazi u sklopu jedne vrste sportsko rekreacijskog centra gdje još djeluju teniski klub Špansko i nogometni klub Špansko.  Jedina zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i blizina Osnovne škole Tituša Brezovačkog i dječjeg vrtića Špansko.";

  spanskoMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Špansko";
    document.getElementById("park-image").src = "images/spansko.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = spanskoInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Jedan par visokih paralelnih šipki za propadanja <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set paralelnih šipki za propadanja različitih visina <br>Klupica za trbušnjake <br>Sprava za veslanje <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Bicikl <br>Set od dvije stolice različitih funkcija; pull/push pokreti <br>Set od dvije sprave za ljuljanje okrenute jedna nasuprot drugoj";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/d8fDrr4f3VxPWFPA7' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const gajniceMarker = new google.maps.Marker({
    position: gajnice,
    map: map,
    title: "Street Workout park - Gajnice",
  });

  const gajniceInfo =
    "Street Workout park Gajnice smješten je u Zagrebu, preciznije u kvartu Gajnice po kojem je i dobio ime. Park je solidno postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka.";

  gajniceMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Gajnice";
    document.getElementById("park-image").src = "images/gajnice.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = gajniceInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Jedan par visokih paralelnih šipki za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Klupa s ručkama <br>Sprava za propadanje";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/kDBbQ3zn75fgTW3R9' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });

  const klakaMarker = new google.maps.Marker({
    position: klaka,
    map: map,
    title: "Street Workout park - Klaka",
  });

  const klakaInfo =
    "Street Workout park Klaka smješten je u Zagrebu, preciznije kvart Klaka po kojem je i dobio ime. Park je dobro postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening no sadrži i nekolicinu nepotrebnih sprava pa stoga mali minus no unatoč tomu jedan je od boljih parkovau Zagrebu. Park se također nalazi u sklopu sportsko rekreacijskog centra Klaka koji ima puno toga za ponuditi od atletske staze do različith terena i podloga.Jedina mala zamjerka je tokom ljetnog perioda nedostatak hlada na prostoru parka.";

  klakaMarker.addListener("click", () => {
    document.getElementById("park-name").innerHTML =
      "Street Workout park - Klaka";
    document.getElementById("park-image").src = "images/klaka.webp";
    document.getElementById("park-image").style.border = "2px solid red";
    document.getElementById("park-image").style.marginBottom = "20px";
    document.getElementById("subtitle").innerHTML = "StreetGainZ opis parka";
    document.getElementById("park-description").innerHTML = klakaInfo;
    document.getElementById("eq-subtitle").innerHTML = "Popis sprava u parku: ";
    document.getElementById("park-equipment").innerHTML =
      "Jedan par visokih paralelnih šipki za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za skijanje <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Klupa s ručkama <br>Sprava za veslanje <br>Sprava za propadanje <br>Dva seta šipki za sklekove <br>Sprava za njihanje s dodatkom dva rotirajuća kruga za različite vježbe <br>Švedske ljestve";
    document.getElementById("park-link").innerHTML =
      "Klikni <a href='https://goo.gl/maps/RDpHY6TfSa15KeSa9' target=_blank>ovdje</a> i pogledaj slike parka!";
    document.getElementById("park-link").style.textDecorationStyle = "none";
    document.getElementById("park-rating").innerHTML =
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>';
    document.getElementById("park-name").scrollIntoView();
  });
}
