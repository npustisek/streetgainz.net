function generatePark(options) {
  let park_lat = options["lat"];
  let park_lng = options["lng"];
  let park_name = options["parkName"];
  let park_image = options["parkImage"];
  let image_border = options["border"];
  let image_margin = options["margin-bottom"];
  let park_subtitle = options["parkSubtitle"];
  let park_bio = options["parkBio"];
  let equipment_subtitle = options["equipmentSubtitle"];
  let park_equipment = options["parkEquipment"];
  let park_navigation = options["parkNavigation"];
  let park_rating = options["parkRating"];

  const marker = new google.maps.Marker({
    position: {
      lat: park_lat,
      lng: park_lng,
    },
    map: window.map,
    title: park_name,
  });

  marker.addListener("click", () => {
    document.getElementById("park-name").innerHTML = park_name;
    document.getElementById("park-image").src = park_image;
    document.getElementById("park-image").style.border = image_border;
    document.getElementById("park-image").style.marginBottom = image_margin;
    document.getElementById("subtitle").innerHTML = park_subtitle;
    document.getElementById("park-description").innerHTML = park_bio;
    document.getElementById("eq-subtitle").innerHTML = equipment_subtitle;
    document.getElementById("park-equipment").innerHTML = park_equipment;
    document.getElementById("park-link").innerHTML = park_navigation;
    document.getElementById("park-rating").innerHTML = park_rating;
    document.getElementById("park-name").scrollIntoView();
  });
}

const parks = {
  knezija: {
    lat: 45.7911392294397,
    lng: 15.952604868885443,
    parkName: "Street Workout park - Knežija",
    parkImage: "images/knezija.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; hlad; podloga<br><strong>-</strong> blizina stambenih zgrada; crpka za vodu, prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 samostalna šipka manjih dimenzija ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/rkYZFMf3x1BFV39aA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  srednjaci: {
    lat: 45.78973510257567,
    lng: 15.941498564478035,
    parkName: "Street Workout park - Srednjaci",
    parkImage: "images/srednjaci.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; prostor za freestyle pokrete; ulična rasvjeta; podloga<br><strong>-</strong> crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 klupica za trbušnjake <br>#4 švedske ljestve <br>#5 set od tri šipke za zgibove različitih visina <br>#6 šipke za sklekove <br>#7 set od dvije šipke za zgibove različitih visina ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/dL7N1ZzrCCbyoXmR8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  gredice: {
    lat: 45.78455230895617,
    lng: 15.93844974331816,
    parkName: "Street Workout park - Gredice",
    parkImage: "images/gredice.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga<br><strong>-</strong> crpka za vodu; ulična rasvjeta; prostor za freestyle pokrete; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 samostalna šipka manjih dimenzija",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/HrZLmVUbE3EKmDb7A' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  remiza: {
    lat: 45.797268621028344,
    lng: 15.940003537361227,
    parkName: "Street Workout park - Remiza",
    parkImage: "images/remiza.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> prostor za freestyle pokrete; hlad;crpka za vodu; podloga<br><strong>-</strong>  ulična rasvjeta; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 paralelne šipke za propadanja različitih visina <br>#3 klupica za trbušnjake <br>#4 set od tri šipke za zgibove različitih visina <br>#5 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/6PnKpWyq9YtRmHej8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  jarun1: {
    lat: 45.776868709906765,
    lng: 15.937986311481682,
    parkName: "Street Workout park - Jarun 1",
    parkImage: "images/jarun1.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> hlad; crpka za vodu; izoliranost; ulična rasvjeta<br><strong>-</strong>  prostor za freestyle pokrete; podloga<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 paralelne šipke za propadanja različitih visina <br>#3 švedske ljestve <br>#4 7+ šipki različitih visina <br>#5 improvizirani utezi",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/1suKL9hkAr3CqnN38' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  fallerovo: {
    lat: 45.79998878489222,
    lng: 15.936072334126234,
    parkName: "Street Workout park - Fallerovo",
    parkImage: "images/fallerovo.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; prostor za freestyle pokrete<br><strong>-</strong> hlad; crpka za vodu; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/ATCuJMVBKK6HJmwH7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  voltino: {
    lat: 45.79951781087857,
    lng: 15.929972307497897,
    parkName: "Street Workout park - Voltino",
    parkImage: "images/voltino.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> hlad; izoliranost; crpka za vodu; podloga; prostor za freestyle pokrete<br><strong>-</strong> ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 šipke za sklekove <br>#4 paralelne šipke za propadanja različitih visina <br>#5 klupica za trbušnjake <br>#6 visoke paralelne šipke za propadanja <br>#7 set od dvije šipke za zgibove različitih visina <br>#8 samostalna šipka manjih dimenzija ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/97UCaF1Ej6HjNphSA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  ljubljanica: {
    lat: 45.7944386516236,
    lng: 15.93273316755646,
    parkName: "Street Workout park - Ljubljanica",
    parkImage: "images/ljubljanica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> prostor za freestyle pokrete; podloga;<br><strong>-</strong> ulična rasvjeta; hlad; crpka za vodu; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od dvije šipke za zgibove različitih visina <br>#2 dvije samostalne šipke manjih dimenzija <br>#3 švedske ljestve <br>#4 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/xQpTk7UG7sAwx2vv6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  tresnjevacki_plac: {
    lat: 45.79779276555363,
    lng: 15.956932983259508,
    parkName: "Street Workout park - Trešnjevački plac",
    parkImage: "images/plac.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 visoke paralelne šipke za propadanja <br>#3 klupica za trbušnjake <br>#4 set od tri povezane niže šipke",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/iHbaNbx6Nonfzgks5' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  savica: {
    lat: 45.78991006237311,
    lng: 15.98913693136404,
    parkName: "Street Workout park - Savica",
    parkImage: "images/savica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; crpka za vodu; ulična rasvjeta<br><strong>-</strong>  hlad; prostor za freestyle pokrete; podloga<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od dvije šipke za zgibove različitih visina <br>#3 šipke za sklekove <br>#4 klupica sa ručkama <br>#5 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/XshNN5s8oKUVMTu66' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  jarun2: {
    lat: 45.779542797176425,
    lng: 15.9143274899785,
    parkName: "Street Workout park - Jarun 2",
    parkImage: "images/jarun2.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; crpka za vodu; hlad<br><strong>-</strong>  prostor za freestyle pokrete; podloga; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 četiri horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 srednje visoke paralelne šipke za propadanja <br>#4 set od tri povezane niže šipke <br>#5 4+ šipki različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/YEGKXDzSYFpwtcjT6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  rudes: {
    lat: 45.79825284456545,
    lng: 15.917527141323934,
    parkName: "Street Workout park - Rudeš",
    parkImage: "images/rudes.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> prostor za freestyle pokrete; izoliranost; hlad; ulična rasvjeta; podloga;<br><strong>-</strong> crpka za vodu; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 švedske ljestve <br>#5 klupica za trbušnjake <br>#6 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/dRE2ctPwnPD3UpYs8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  svetice: {
    lat: 45.818002110192815,
    lng: 16.013662124798774,
    parkName: "Street Workout park - Svetice",
    parkImage: "images/svetice.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> prostor za freestyle pokrete; izoliranost; crpka za vodu; ulična rasvjeta; podloga;<br><strong>-</strong>  hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 10+ šipki različitih visina <br>#3 8+ paralelnih šipki različitih visina <br>#4 švedske ljestve <br>#5 klupica za trbušnjake <br>#6 set od tri povezane niže šipke <br>#7 set od dvije povezane niže šipke <br>#8 niske paralete",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/CNgAxe692gDCrJy46' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
  },

  precko: {
    lat: 45.795169993328244,
    lng: 15.901734449155944,
    parkName: "Street Workout park - Prečko",
    parkImage: "images/precko.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 set od tri povezane niže šipke <br>#3 švedske ljestve <br>#4 horizontalne ljestve &#34monkey bars&#34 <br>#5 klupica za trbušnjake <br>#6 šipke za sklekove <br>#7 set od dvije šipke za zgibove različitih visina <br>#8 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/Dbe1sonARSKGSXJ17' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  ciglenica: {
    lat: 45.80528488254902,
    lng: 15.944970312675895,
    parkName: "Street Workout park - Ciglenica",
    parkImage: "images/ciglenica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; crpka za vodu; ulična rasvjeta<br><strong>-</strong>  hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije klupice za trbušnjake <br>#2 set od tri šipke za zgibove različitih visina <br>#3 horizontalne ljestve &#34monkey bars&#34 <br>#4 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/pV6aAdrAH99uWkbv7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  siget: {
    lat: 45.77674922570695,
    lng: 15.966980405187503,
    parkName: "Street Workout park - Siget",
    parkImage: "images/siget.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; ulična rasvjeta; hlad<br><strong>-</strong>  prostor za freestyle pokrete; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 švedske ljestve <br>#3 niske paralete <br>#4 samostalna niska šipka <br>#5 niske paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/ZsRNo65vd3HQSucm7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  trnsko: {
    lat: 45.77090484005913,
    lng: 15.964890712441298,
    parkName: "Street Workout park - Trnsko",
    parkImage: "images/trnsko.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 7+ šipki različitih visina <br>#2 švedske ljestve <br>#3 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/32YSQk3gXziYMyRP9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  trnover: {
    lat: 45.83388731897813,
    lng: 16.071220495488262,
    parkName: "Street Workout park - Trnover",
    parkImage: "images/trnover.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; ulična rasvjeta; prostor za freestyle pokrete<br><strong>-</strong>  crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 7+ šipki različitih visina <br>#3 dva para niskih paraleta <br>#4 klupica za trbušnjake <br>#5 set od dvije šipke za zgibove različitih visina <br>#6 dva para visokih paralelnih šipki za propadanja <br>#7 kutije za skakanje <br>#8 visoke paralete",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/yL6GFgmvJJpbpXcw5' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
  },

  britanac: {
    lat: 45.81193831275142,
    lng: 15.963523730695016,
    parkName: "Street Workout park - Britanac",
    parkImage: "images/britanac.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; prostor za freestyle pokrete; hlad<br><strong>-</strong>  crpka za vodu; blizina stambenih zgrada; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 niske paralete <br>#3 5+ šipki različitih visina <br>#4 dva para paralelni šipki za propadanja različitih visina <br>#5 set od dvije povezane niže šipke",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/EeBkggPFAWVUVxqN9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  spansko: {
    lat: 45.800536496435996,
    lng: 15.898664952412943,
    parkName: "Street Workout park - Špansko",
    parkImage: "images/spansko.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete<br><strong>-</strong>  ulična rasvjeta; hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 paralelne šipke za propadanja različitih visina <br>#4 visoke paralelne šipke za propadanja <br>#5 visoke paralete <br>#6 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/d8fDrr4f3VxPWFPA7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  gajnice: {
    lat: 45.81736288334762,
    lng: 15.876114131361767,
    parkName: "Street Workout park - Gajnice",
    parkImage: "images/gajnice.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete<br><strong>-</strong>  crpka za vodu; ulična rasvjeta; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 set od tri šipke za zgibove različitih visina <br>#4 set od dvije šipke za zgibove različitih visina <br>#5 klupica sa ručkama <br>#6 švedske ljestve",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/kDBbQ3zn75fgTW3R9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  klaka: {
    lat: 45.83679250143254,
    lng: 16.0541721524014,
    parkName: "Street Workout park - Klaka",
    parkImage: "images/klaka.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 šipke za sklekove <br>#4 visoke paralelne šipke za propadanja <br>#5 švedske ljestve <br>#6 klupica za trbušnjake <br>#7 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/RDpHY6TfSa15KeSa9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  folka: {
    lat: 45.79503799869429,
    lng: 16.005015775340617,
    parkName: "Street Workout park - Folka",
    parkImage: "images/folka.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 dvije klupice za trbušnjake <br>#3 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/KLrg8DNDumneSwFt6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  subiceva: {
    lat: 45.809210813224205,
    lng: 15.993764739016488,
    parkName: "Street Workout park - Šubićeva",
    parkImage: "images/subiceva.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost: podloga; ulična rasvjeta; hlad<br><strong>-</strong>  crpka za vodu; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/i5Hs5gbAD9URLk1t8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  tunel_sljeme: {
    lat: 45.86418245014666,
    lng: 15.981966689773946,
    parkName: "Street Workout park - Tunel Sljeme",
    parkImage: "images/tunel_sljeme.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete; podloga; ulična rasvjeta; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od dvije šipke za zgibove različitih visina <br>#2 klupica sa ručkama",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/qUa6nsBR29zexnwG8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  zapadni_kolodvor: {
    lat: 45.80996716223953,
    lng: 15.949365433546706,
    parkName: "Street Workout park - Zapadni kolodvor",
    parkImage: "images/zapadni_kolodvor.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga<br><strong>-</strong> blizina stambenih zgrada; crpka za vodu; prostor za freestyle pokrete; ulična rasvjeta; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/PJvkGgF1XWom3SXf7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  sportska_gimnazija: {
    lat: 45.8013460731967,
    lng: 15.94572242124381,
    parkName: "Street Workout park - Sportska gimnazija",
    parkImage: "images/sportska_gimnazija.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; izoliranost; ulična rasvjeta<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 švedske ljestve <br>#4 paralelne šipke za propadanja različitih visina <br>#5 set od tri povezane niže šipke",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/dz4u2VM9FXeU3mGL9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  enschede: {
    lat: 52.218287519259825,
    lng: 6.874468577702691,
    parkName: "Street Workout park - Enschede",
    parkImage: "images/enschede.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; izoliranost; prostor za freestyle pokrete<br><strong>-</strong>  crpka za vodu; hlad; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>Švedske ljestve <br>#2 4+ šipki različitih visina <br>#3 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/b8afy56zJwmKfFEi7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  gronau: {
    lat: 52.20783718361085,
    lng: 7.025433562038313,
    parkName: "Street Workout park - Gronau",
    parkImage: "images/gronau.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong>  izoliranost<br><strong>-</strong> crpka za vodu; hlad; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije horizontalne ljestve &#34monkey bars&#34 <br>#2 5+ šipki različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 set od tri povezane niže šipke <br>#5 švedske ljestve",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/iYL738KW3wxk3TT58' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  university_of_twente: {
    lat: 52.24395309089928,
    lng: 6.852662603101373,
    parkName: "Street Workout park - University of Twente",
    parkImage: "images/twente.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "<strong>+</strong> izoliranost; crpka za vodu; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><strong>-</strong> hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 Set ringova <br>#3 5+ šipki različitih visina <br>#4 paralelne šipke za propadanja različitih visina <br>#5 švedske ljestve <br>#6 set od tri povezane niže šipke",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/84MtJks3ZMCFLT526' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  botinec: {
    lat: 45.753185870657276,
    lng: 15.93132964551552,
    parkName: "Street Workout park - Botinec",
    parkImage: "images/botinec.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; prostor za freestyle pokrete; hlad<br><strong>-</strong> crpka za vodu; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 visoke paralelne šipke za propadanja <br>#2 šipke za sklekove <br>#3 set od dvije šipke za zgibove različitih visina <br>#4 horizontalne ljestve &#34monkey bars&#34 <br>#5 švedske ljestve <br>#6 klupica za trbušnjake <br>#7 paralelne šipke za propadanja različitih visina <br>#8 set od tri šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/LxpjXqupd84vCjNH8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  betlehem: {
    lat: 45.75746713280989,
    lng: 15.9368661791493,
    parkName: "Street Workout park - Betlehem",
    parkImage: "images/betlehem.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; prostor za freestyle pokrete; hlad<br><strong>-</strong>  crpka za vodu; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od tri šipke za zgibove različitih visina <br>#2 švedske ljestve ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/cAwexCnfw2bX6YR96' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  velika_gorica: {
    lat: 45.71550012435615,
    lng: 16.06838027040958,
    parkName: "Street Workout park - Velika Gorica",
    parkImage: "images/velika_gorica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; crpka za vodu; ulična rasvjeta<br><strong>-</strong> hlad; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 visoke paralelne šipke za propadanja <br>#4 šipke za sklekove <br>#5 klupica za trbušnjake",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/k12jCyFdmptHrxxRA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  bocarski_dom: {
    lat: 45.78939618398553,
    lng: 15.963745437008566,
    parkName: "Street Workout park - Boćarski dom",
    parkImage: "images/bocarski_dom.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; crpka za vodu; ulična rasvjeta;<br><strong>-</strong> podloga; prostor za freestyle pokrete; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 set od dvije šipke za zgibove različitih visina <br>#4 klupica za trbušnjake",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/MALkThFo4zSnVEFh7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  bundek: {
    lat: 45.78395807677684,
    lng: 15.995206708701428,
    parkName: "Street Workout park - Bundek",
    parkImage: "images/bundek.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; ulična rasvjeta;<br><strong>-</strong> podloga; prostor za freestyle pokrete; hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 srednje visoke paralelne šipke za propadanja <br>#3 švedske ljestve <br>#4 set od tri povezane niže šipke <br>#5 set od dvije šipke za zgibove različitih visina <br>#6 klupica za trbušnjake",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/T2VyRNX14nJiwwaG9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  kajzerica: {
    lat: 45.78460077015906,
    lng: 15.962664108160254,
    parkName: "Street Workout park - Kajzerica",
    parkImage: "images/kajzerica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; podloga; prostor za freestyle pokrete<br><strong>-</strong> hlad; crpka za vodu; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 5+ šipki različitih visina <br>#2 švedske ljestve <br>#3 srednje visoke paralelne šipke za propadanja <br>#4 set od tri šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/jzbUkXZy8xABW6wW6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  kraljicin_zdenac: {
    lat: 45.86186211295318,
    lng: 15.948454323049926,
    parkName: "Street Workout park - Kraljičin zdenac",
    parkImage: "images/kraljicin_zdenac.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost<br><strong>-</strong> hlad; crpka za vodu; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 visoke paralelne šipke za propadanja <br>#2 visoka samostalna šipka",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/MpGtpbyTJ65nvvd58' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  laniste: {
    lat: 45.77484096270988,
    lng: 15.94716879282225,
    parkName: "Street Workout park - Lanište",
    parkImage: "images/laniste.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; ulična rasvjeta<br><strong>-</strong> hlad; crpka za vodu; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od dvije šipke za zgibove različitih visina <br>#2 visoke paralelne šipke za propadanja <br>#3 horizontalne ljestve &#34monkey bars&#34 <br>#4 švedske ljestve <br>#5 klupica za trbušnjake <br>#6 set od tri šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/5iwWHHkpYrQfpG7j6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  remetinec: {
    lat: 45.76848799094635,
    lng: 15.948916213443447,
    parkName: "Street Workout park - Remetinec",
    parkImage: "images/remetinec.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; podloga; izoliranost; prostor za freestyle pokrete; hlad<br><strong>-</strong> crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 set od tri šipke za zgibove različitih visina <br>#4 paralelne šipke za propadanja različitih visina <br>#5 set od dvije šipke za zgibove različitih visina <br>#6 klupica za trbušnjake",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/N2eChP8LdVSRqirh8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  sveta_klara: {
    lat: 45.76093970739496,
    lng: 15.965528657269719,
    parkName: "Street Workout park - Sveta Klara",
    parkImage: "images/sveta_klara.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; podloga; izoliranost; crpka za vodu<br><strong>-</strong>   hlad; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od dvije šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/JgzRCCWKvy6rZypw8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  stara_tresnjevka: {
    lat: 45.79831473427109,
    lng: 15.949958236605415,
    parkName: "Street Workout park - Park Stara Trešnjevka",
    parkImage: "images/stara_tresnjevka.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "<strong>+</strong> izoliranost; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><strong>-</strong> hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 visoka samostalna šipka <br>#2 švedske ljestve <br>#3 niske paralelne šipke za propadanja ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/BCW99Hjk76TGhzrm6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  savski_gaj: {
    lat: 45.77600790588718,
    lng: 15.954424681941205,
    parkName: "Street Workout park - Savski gaj",
    parkImage: "images/savski_gaj.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; podloga; prostor za freestyle pokrete<br><strong>-</strong> hlad; crpka za vodu; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 set od dvije šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 paralelne šipke za propadanja različitih visina ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/USMJrTUC97ZG6Byu8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  petrovaradinska: {
    lat: 45.79076106706315,
    lng: 15.905750871582157,
    parkName: "Street Workout park - Petrovaradinska",
    parkImage: "images/petrovaradinska.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; podloga; izoliranost<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 visoke paralelne šipke za propadanja <br>#2 dvije klupice za trbušnjake <br>#3 klupica sa ručkama",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/Waz9vGbfzi6GZfdD7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  baska: {
    lat: 44.96694311499472,
    lng: 14.74823671681502,
    parkName: "Street Workout park - Baška",
    parkImage: "images/baska.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; izoliranost; prostor za freestyle pokrete<br><strong>-</strong>   crpka za vodu; hlad; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 tri horizontalne ljestve &#34monkey bars&#34 <br>#2 7+ šipki različitih visina <br>#3 dvije klupice za trbušnjake <br>#4 švedske ljestve <br>#5 set od tri povezane niže šipke <br>#6 dva para paralelnih šipki za propadanja različitih visina <br>#7 niske paralete <br>#8 kutije za skakanje",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/DZ1KrMnBbJ1w42FZA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i>',
  },

  kamp_glavotok: {
    lat: 45.09330034148315,
    lng: 14.439064322536082,
    parkName: "Street Workout park - Kamp Glavotok",
    parkImage: "images/kamp_glavotok.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> hlad<br><strong>-</strong> podloga; izoliranost; prostor za freestyle pokrete; crpka za vodu; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 švedske ljestve ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/brMd2r7RCnJCM2Qx7' target=_blank><strong>OVDJE</strong></a> iza dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  krk: {
    lat: 45.024683929607974,
    lng: 14.583371299695065,
    parkName: "Street Workout park - Krk",
    parkImage: "images/krk.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> hlad; podloga; izoliranost; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong> crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 10+ šipki različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 set od tri šipke za zgibove različitih visina <br>#4 niske paralete <br>#5 set ringova <br>#6 tri visoke paralelne šipke za propadanja <br>#7 švedske ljestve <br>#8 klupica za trbušnjake <br>#9 kutije za skakanje <br>#10 set od tri povezane niže šipke ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/C9xCu1Uc2bMcxS8N9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
  },

  kamp_zablace: {
    lat: 44.96554548382319,
    lng: 14.748352998261927,
    parkName: "Street Workout park - Kamp Zablaće",
    parkImage: "images/kamp_zablace.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> hlad; podloga; ulična rasvjeta<br><strong>-</strong> crpka za vodu; blizina kamp kućica; prostor za freestyle pokrete;<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 niske paralete <br>#3 srednje visoke paralelne šipke za propadanja ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/knaw3QwRsVpQ2FiP6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  komrcar: {
    lat: 44.75972478317588,
    lng: 14.758267837897685,
    parkName: "Street Workout park - Komrčar",
    parkImage: "images/komrcar.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> hlad; izoliranost<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em><br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 tri visoke paralelne šipke za propadanja <br>#3 šipke za sklekove <br>#4 set od tri šipke za zgibove različitih visina <br>#5 7+ šipki različitih visina  ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/yfw5ZCuzhxQN1KEbA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  jastrebarsko: {
    lat: 45.669538490257395,
    lng: 15.64297888002017,
    parkName: "Street Workout park - Jastrebarsko",
    parkImage: "images/jastrebarsko.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong> crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 set od dvije šipke za zgibove različitih visina <br>#4 visoke paralelne šipke za propadanja <br>#5 klupica za trbušnjake <br>#6 klupica sa ručkama  ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/RSY657ucbhD6CzH27' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  volksgarten: {
    lat: 47.07391843798322,
    lng: 15.427889521504222,
    parkName: "Street Workout park - Volksgarten",
    parkImage: "images/volksgarten.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parkaa",
    parkBio:
      "<strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong> crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 5+ šipki različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 švedske ljestve <br>#4 srednje visoke paralelne šipke za propadanja <br>#5 set od tri povezane niže šipke ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/8y6qdYUFtTSFBLDx7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  utrine: {
    lat: 45.776898393234895,
    lng: 15.993033710978038,
    parkName: "Street Workout park - Utrine",
    parkImage: "images/utrine.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; ulična rasvjeta; hlad<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri povezane niže šipke <br>#2 visoke paralelne šipke za propadanja <br>#3 klupica sa ručkama ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/ETPv2u1HkAXx8U3x8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  travno: {
    lat: 45.77108391721745,
    lng: 15.992729788626471,
    parkName: "Street Workout park - Travno",
    parkImage: "images/travno.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete; podloga; ulična rasvjeta; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije horizontalne ljestve &#34monkey bars&#34 <br>#2 samostalna šipka manjih dimenzija <br>#3 visoke paralete <br>#4 tri švedske ljestve <br>#5 visoke paralelne šipke za propadanja <br>#6 klupica za trbušnjake <br>#7 set od tri povezane niže šipke",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/dBq2Fx9nrbs1CFvk7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  slobostina: {
    lat: 45.76630196372759,
    lng: 15.986109641581386,
    parkName: "Street Workout park - Sloboština",
    parkImage: "images/slobostina.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong> crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 samostalna šipka manjih dimenzija <br>#4 visoke paralelne šipke za propadanja <br>#5 švedske ljestve <br>#6 klupica za trbušnjake ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/euiJXdfhga93HQtWA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  dugave: {
    lat: 45.76452899212449,
    lng: 15.998958137231124,
    parkName: "Street Workout park - Dugave",
    parkImage: "images/dugave.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga<br><strong>-</strong> crpka za vodu; hlad; prostor za freestyle pokrete; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 švedske ljestve <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 klupica za trbušnjake",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/Ziu59TPd5PpNjS1A6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  buzin: {
    lat: 45.75104403248975,
    lng: 15.991334964563862,
    parkName: "Street Workout park - Buzin",
    parkImage: "images/buzin.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; hlad; ulična rasvjeta<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 samostalna šipka manjih dimenzija",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/Cd9WFnDqViUs1Gq26' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  sanci: {
    lat: 45.78710490939435,
    lng: 16.014715327081806,
    parkName: "Street Workout park - Šanci",
    parkImage: "images/sanci.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; hlad; ulična rasvjeta<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 samostalna šipka manjih dimenzija <br>#3 srednje visoke paralelne šipke za propadanja <br>#4 paralelne šipke za propadanja različitih visina <br>#5 dvije klupice za trbušnjake ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/BBkFRDbR2qpZCXYX6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  novi_petrusevec: {
    lat: 45.77867058702234,
    lng: 16.048364983121676,
    parkName: "Street Workout park - Novi Petruševec",
    parkImage: "images/novi_petrusevec.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga<br><strong>-</strong> crpka za vodu; prostor za freestyle pokrete; hlad; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od dvije šipke za zgibove različitih visina <br>#2 klupica za trbušnjake ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/tesg1ggoZYU25U2w8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  ban_josip_jelacic: {
    lat: 45.87091277924824,
    lng: 15.79379161021177,
    parkName: "Street Workout park - Ban Josip Jelačić",
    parkImage: "images/ban_josip_jelacic.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong> crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 klupica za trbušnjake <br>#4 visoke paralelne šipke za propadanja ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/MZWVdWoUfBAKe5Cw5' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  zapresic: {
    lat: 45.85655302013278,
    lng: 15.808305830752847,
    parkName: "Street Workout park - Zaprešić",
    parkImage: "images/zapresic.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 set od tri šipke za zgibove različitih visina <br>#4 visoke paralelne šipke za propadanja ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/5asWs9hdGBThUEZg6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  javorje: {
    lat: 45.861994439343135,
    lng: 15.765848128532156,
    parkName: "Street Workout park - Javorje",
    parkImage: "images/javorje.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; prostor za freestyle pokrete; ulična rasvjeta; hlad<br><strong>-</strong> crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 šipke za sklekove <br>#4 visoke paralelne šipke za propadanja <br>#5 5+ šipki različitih visina ",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/jEehUa9kcUzr6nDRA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  santiago_de_compostela: {
    lat: 42.87334104026675,
    lng: -8.542347253971478,
    parkName: "Street Workout park - Santiago de Compostela",
    parkImage: "images/santiago_de_compostela.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 10+ šipki različitih visina <br>#2 set od dvije povezane niže šipke <br>#3 visoke paralete <br>#4 visoke paralelne šipke za propadanja <br>#5 horizontalne ljestve &#34monkey bars&#34 <br>#6 klupica za trbušnjake <br>#7 set ringova",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/zT6Ey1rqC16c353F8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
  },

  joan_oro: {
    lat: 41.602868791450035,
    lng: 0.6347781710504671,
    parkName: "Street Workout park - Joan Oró",
    parkImage: "images/joan_oro.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; crpka za vodu<br><strong>-</strong> hlad; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 klupica za trbušnjake <br>#3 dvije švedske ljestve <br>#4 samostalna šipka manjih dimenzija <br>#5 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/PT5rLesGyLRBcray8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  tuhelj: {
    lat: 46.07594739655152,
    lng: 15.74810314379724,
    parkName: "Street Workout park - Tuhelj",
    parkImage: "images/tuhelj.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong><br><strong>-</strong> crpka za vodu; podloga; prostor za freestyle pokrete; ulična rasvjeta; hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://goo.gl/maps/mgLAwY2KxKvMjgqu5' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  tuskanac: {
    lat: 45.82386032103883,
    lng: 15.969366860606307,
    parkName: "Street Workout park - Tuškanac",
    parkImage: "images/tuskanac.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; ulična rasvjeta; hlad; podloga; prostor za freestyle pokrete;<br><strong>-</strong> crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 srednje visoke paralelne šipke za propadanja <br>#4 dvije švedske ljestve <br>#5 set od tri povezane niže šipke <br>#6 klupica za trbušnjake",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/s7BqXRn2ckJWY2gj8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  maksimir1: {
    lat: 45.833300977465285,
    lng: 16.015534697092146,
    parkName: "Street Workout park - Maksimir 1",
    parkImage: "images/maksimir1.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; hlad <br><strong>-</strong> crpka za vodu; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 visoka samostalna šipka <br>#2 klupica za trbušnjake <br>#3 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/fRLeKPBdQtJndvgaA' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  maksimir2: {
    lat: 45.8333290599301,
    lng: 16.024680618468828,
    parkName: "Street Workout park - Maksimir 2",
    parkImage: "images/maksimir2.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; hlad <br><strong>-</strong> crpka za vodu; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 visoka samostalna šipka <br>#2 klupica za trbušnjake <br>#3 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/3rx2MZ89mu2nDvnt7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  ivanec: {
    lat: 46.2271591848954,
    lng: 16.122326770191187,
    parkName: "Street Workout park - Ivanec",
    parkImage: "images/ivanec.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> izoliranost; crpka za vodu; ulična rasvjeta; podloga; prostor za freestyle pokrete <br><strong>-</strong> hlad<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 srednje visoke paralelne šipke za propadanja <br>#3 sprave sa utezima",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/AK8ncmWWnPFWbaaj7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  brandon_hill: {
    lat: 51.45187753362428,
    lng: -2.6069029363317022,
    parkName: "Street Workout park - Brandon Hill",
    parkImage: "images/brandon_hill.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> podloga; prostor za freestyle pokrete; hlad; izoliranost<br><strong>-</strong>  crpka za vodu; ulična rasvjeta<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 srednje visoke paralelne šipke za propadanja <br>#2 5+ šipki različitih visina <br>#3 švedske ljestve <br>#4 dvije klupice za trbušnjake",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/tDzj7ufqw4hCgq6h7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  redrow: {
    lat: 51.49966715005234,
    lng: -2.5255590988932552,
    parkName: "Street Workout park - Redrow",
    parkImage: "images/redrow.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta<br><strong>-</strong>  crpka za vodu; podloga; prostor za freestyle pokrete; hlad; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 niske paralelne šipke za propadanja",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/p9wQ8kPqggCiDBPN9' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  vis: {
    lat: 43.06317460567577,
    lng: 16.188016104650274,
    parkName: "Street Workout park - Vis",
    parkImage: "images/vis.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; izoliranost; hlad<br><strong>-</strong>  crpka za vodu; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije klupice za trbušnjake <br>#2 paralelne šipke za propadanja različitih visina <br>#3 set od tri šipke za zgibove različitih visina",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/jgCKt7GDJxWYXcco6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  varazdin: {
    lat: 46.30834858514942,
    lng: 16.32869967974064,
    parkName: "Street Workout park - Varaždin",
    parkImage: "images/varazdin.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; izoliranost; podloga; prostor za freestyle pokrete <br><strong>-</strong> hlad; crpka za vodu<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 šipke za sklekove <br>#3 švedske ljestve <br>#4 8+ šipki različitih visina",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/opm6csaQLX5FHMwj6' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  zaprude1: {
    lat: 45.78055967896935,
    lng: 15.996643484585228,
    parkName: "Street Workout park - Zapruđe 1",
    parkImage: "images/zaprude1.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; hlad; podloga; prostor za freestyle pokrete <br><strong>-</strong> crpka za vodu; blizina stambenih zgrada<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 kavez od tri horizontalne šipke u kombinaciji s horizontalnim ljestvama &#34monkey bars&#34 i švedskim ljestvama <br>#2 set od tri šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 klupice za trbušnjake <br>#5 set od tri povezane niže šipke <br>#6 šipke za sklekove <br>#7 švedske ljestve <br>#4 dva para paralelnih šipki za propadanja različitih visina",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/zCYstTfFBxkvYgZo8' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  zaprude2: {
    lat: 45.78152775360084,
    lng: 15.991414091569137,
    parkName: "Street Workout park - Zapruđe 2",
    parkImage: "images/zaprude2.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "Prednosti/Nedostatci parka",
    parkBio:
      "<strong>+</strong> ulična rasvjeta; izoliranost <br><strong>-</strong> crpka za vodu; hlad; podloga; prostor za freestyle pokrete<br><em>Objavio: Nikola Pustišek (tajnik &#34StreetGainZ&#34 udruge)</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 šipke za propadanja (PREŠIROKO POSTAVLJENE!!) u kombinaciji s malim švedskim ljestvama <br>#2 paralelne šipke za propadanja različitih visina <br>#3 klupica s ručkama",
    parkNavigation:
      "Kliknite <a href='https://maps.app.goo.gl/Nkxh1ZgmMcon92qE7' target=_blank><strong>OVDJE</strong></a> za dodatne slike parka te za pristup detaljnijim uputama kako doći do samog parka ovisno o Vašoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },
};

setTimeout(function () {
  Object.keys(parks).forEach((park) => {
    generatePark(parks[park]);
  });
}, 500);
