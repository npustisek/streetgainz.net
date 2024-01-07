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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Knežija smješten je u Zagrebu, preciznije u kvartu Knežija. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Kod zgibova je bolja situacija jer se nudi jedan &#34monkey bars&#34 te jedna malo niža samostalna šipka koja je odlična za početnike koji žele vježbati na neutralnom dijelu pokreta. U parku se nalaze još dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> ulična rasvjeta; hlad; podloga<br><strong>-</strong> blizina stambenih zgrada; crpka za vodu, prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 samostalna šipka manjih dimenzija ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/rkYZFMf3x1BFV39aA' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Srednjaci smješten je u Zagrebu, preciznije u kvartu Srednjaci. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što je klupica za trbušnjake, samostalne švedske ljestve te par šipki za sklekove mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; prostor za freestyle pokrete; ulična rasvjeta; podloga<br><strong>-</strong> crpka za vodu; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 klupica za trbušnjake <br>#4 švedske ljestve <br>#5 set od tri šipke za zgibove različitih visina <br> #6 šipke za sklekove <br>#7 set od dvije šipke za zgibove različitih visina ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dL7N1ZzrCCbyoXmR8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Gredice smješten je u Zagrebu, preciznije u kvartu Gredice. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Kod zgibova je bolja situacija jer se nudi jedan &#34monkey bars&#34 te jedna malo niža samostalna šipka koja je odlična za početnike koji žele vježbati na neutralnom dijelu pokreta. U parku se nalaze još i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; podloga<br><strong>-</strong> crpka za vodu; ulična rasvjeta; prostor za freestyle pokrete; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 samostalna šipka manjih dimenzija",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/HrZLmVUbE3EKmDb7A' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Remiza smješten je u Zagrebu, preciznije u kvartu Trešnjevka. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan set od dva para srednjih paralelnih šipki što je bolja opcija od visokih jer ovdje nema problema prilikom penjanja na njih. Dodatne stvari u parku kao što je klupica za trbušnjake može se iskoristiti za učenje statičkih elemenata te dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> prostor za freestyle pokrete; hlad;crpka za vodu; podloga<br><strong>-</strong>  ulična rasvjeta; blizina stambenih zgrada<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 paralelne šipke za propadanja različitih visina <br>#3 klupica za trbušnjake <br>#4 set od tri šipke za zgibove različitih visina <br>#5 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/6PnKpWyq9YtRmHej8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Jarun smješten je u Zagrebu, preciznije na jezeru Jarun. Ovo je jedan od dva parka na jezeru te bi ga smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Na jezeru se osim ovoga nalazi i još jedan park koji je bolji te spada među top parkove Zagreba. Ovaj park je imao nekoliko nadogradnji kroz vrijeme tako da se mogu pronaći stvarno svakakve vrste šipki (niske, visoke, debele, tanke) pa sve do šipki napravljenih od drveta. Ubrajajući sve vidljive šipke na lokaciji se može naći preko sedam šipki različitih visina i debljina za zgibove koje su u kombinaciji sa jednim &#34monkey bars&#34 odlična stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se može prebrojati tri para paralelnih šipki od kojih su dva para po meni prenisko postavljena te je šipka predebela, dok su šipke na trećem paru s druge strane pretanke te je malo neugodno kada se rade duži setovi. Ovaj park je zanimljiv i po tome što jedini u Hrvatskoj ima ručno izrađene improvizirane utege dostupne 24/7 što je odlična stvar za ljude koji žele malo otežati svoje treninge.<br><strong>+</strong> hlad; crpka za vodu; izoliranost; ulična rasvjeta<br><strong>-</strong>  prostor za freestyle pokrete; podloga<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 paralelne šipke za propadanja različitih visina <br>#3 švedske ljestve <br>#4 7+ šipki različitih visina <br>#5 improvizirani utezi",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/1suKL9hkAr3CqnN38' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Fallerovo smješten je u Zagrebu, preciznije u kvartu Trešnjevka, u sklopu Fallerovog šetališta. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Kod zgibova je bolja situacija jer se nudi jedan &#34monkey bars&#34 dok tri povezane šipke različitih visina omogućuju osim zgibova i izvođenje freestyle elemenata.<br><strong>+</strong> izoliranost; podloga; prostor za freestyle pokrete<br><strong>-</strong> hlad; crpka za vodu; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/ATCuJMVBKK6HJmwH7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Voltino smješten je u Zagrebu, preciznije u kvartu Voltino. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalaze tri para paralelnih šipki od kojih su dva niski, a jedni visoki pa tako svi mogu odabrati onu opciju koja im više odgovara. Dodatne stvari u parku kao što je klupica za trbušnjake i šipke za sklekove mogu se iskoristiti za učenje statičkih elemenata te tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> hlad; izoliranost; crpka za vodu; podloga; prostor za freestyle pokrete<br><strong>-</strong> ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 šipke za sklekove <br>#4 paralelne šipke za propadanja različitih visina <br>#5 klupica za trbušnjake <br>#6 visoke paralelne šipke za propadanja <br>#7 set od dvije šipke za zgibove različitih visina <br>#8 samostalna šipka manjih dimenzija ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/97UCaF1Ej6HjNphSA' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Ljubljanica smješten je u Zagrebu, preciznije u kvartu Ljubljanica. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Park nema &#34monkey bars&#34, ali zato nudi četiri šipke za zgibove različitih visina koje su i više nego dosta. Jedina manja zamjerka, bar meni osobno, je ta da dvije od četiri šipke nisu ravne odnosno cijela šipka se zajedno sa temeljom nagnula prema naprijed te je nekako čudan osjećaj prilikom izvođenja vježbi (posebice kod freestyle pokreta). Za propadanja se u parku nalazi samo jedan set od dva para srednjih paralelnih šipki što je bolja opcija od visokih jer ovdje nema problema prilikom penjanja na njih. Dodatne stvari u parku kao što su male švedske ljestve mogu se iskoristiti za učenje statičkih elemenata te čak pet klupica koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> prostor za freestyle pokrete; podloga;<br><strong>-</strong> ulična rasvjeta; hlad; crpka za vodu; blizina stambenih zgrada<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od dvije šipke za zgibove različitih visina <br>#2 dvije samostalne šipke manjih dimenzija <br>#3 švedske ljestve <br>#4 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/xQpTk7UG7sAwx2vv6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Trešnjevački plac smješten je u Zagrebu, preciznije u kvartu Trešnjevka. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Tri visoke šipke za zgibove jedina su opcija, no zbog različitih visina pružaju dovoljno opcija za svaku vrstu treninga. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što je klupica za trbušnjake te set od tri povezane niže šipke mogu se iskoristiti za učenje statičkih elemenata te čak četiri klupica koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu; blizina stambenih zgrada<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 visoke paralelne šipke za propadanja <br>#3 klupica za trbušnjake <br>#4 set od tri povezane niže šipke",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/iHbaNbx6Nonfzgks5' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Savica smješten je u Zagrebu, preciznije u kvartu Savica na Savskom nasipu. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Park ima &#34monkey bars&#34, no zgibove je moguće raditi samo s jedne strane jer su s druge strane od vrha do poda postavljene švedske ljestve. Osim na njemu, zgibove je moguće raditi i na dvije odvojene malo niže šipke što je odlična stvar za početnike. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što je klupica sa ručkama, klupica za trbušnjake te par šipki za sklekove mogu se iskoristiti za učenje raznih statičkih elemenata. Nedavno je ekipa koja često tamo trenira unaprijedila park sa ručno izrađenim utezima, pa se tako ovaj park kao i onaj na Jarunu ističe malo od svih ostalih.<br><strong>+</strong> izoliranost; crpka za vodu; ulična rasvjeta<br><strong>-</strong>  hlad; prostor za freestyle pokrete; podloga<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od dvije šipke za zgibove različitih visina <br>#3 šipke za sklekove <br>#4 klupica sa ručkama <br>#5 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/XshNN5s8oKUVMTu66' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Jarun 2 smješten je u Zagrebu, preciznije na jezeru Jarun. Ovo je jedan od dva parka na jezeru te bi ga smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Na jezeru se osim ovoga nalazi i još jedan park, no taj je malo lošiji. Ovaj park se ističe dosta po broju &#34monkey bars&#34 jer ih u cijelom parku ima čak tri komada, a uz njih se još mogu pronaći četiri šipke za zgibove različitih visina, kao i tri manje za vježbanje raznih progresija. Za propadanja nije baš takav šarolik izbor te je dostupan samo jedan par paralelnih šipki koji je po mojem mišljenju i prenisko postavljen te su šipke predebele. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong> izoliranost; crpka za vodu; hlad<br><strong>-</strong>  prostor za freestyle pokrete; podloga; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 četiri horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 srednje visoke paralelne šipke za propadanja <br>#4 set od tri povezane niže šipke <br>#5 4+ šipki različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/YEGKXDzSYFpwtcjT6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Rudeš smješten je u Zagrebu, preciznije u kvartu Rudeš. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su švedske ljestve i klupica za trbušnjake mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> prostor za freestyle pokrete; izoliranost; hlad; ulična rasvjeta; podloga;<br><strong>-</strong> crpka za vodu; blizina stambenih zgrada<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 švedske ljestve <br>#5 klupica za trbušnjake <br>#6 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dRE2ctPwnPD3UpYs8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Svetice smješten je u Zagrebu, preciznije u kvartu Svetice. Park je odlično postavljen te spada među top parkove Zagreba jer je jedan od rijetkih parkova koji su baš planski i temeljito izgrađeni u dogovoru sa samim vježbačima. U parku se osim &#34monkey bars&#34 nalazi i preko deset šipki za zgibove različitih duljina, debljina i visina, pa se zbog toga ovdje najčešće i organiziraju grupni treninzi, radionice i slične stvari jer stvarno velik broj ljudi može istovremeno vježbati na istom mjestu. Dva seta po tri paralelne šipke te jedan set po dvije zajedno tvore osam šipki za propadanja što je odličan omjer u odnosu na broj šipki za zgibove. Dodatne stvari u parku kao što su švedske ljestve, klupice za trbušnjake, tri niske povezane šipke, tri para niskih paralelnih šipki te dvije niže horizontalne šipke mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong> prostor za freestyle pokrete; izoliranost; crpka za vodu; ulična rasvjeta; podloga;<br><strong>-</strong>  hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 10+ šipki različitih visina <br>#3 8+ paralelnih šipki različitih visina <br>#4 švedske ljestve <br>#5 klupica za trbušnjake <br>#6 set od tri povezane niže šipke <br>#7 set od dvije povezane niže šipke <br>#8 niske paralete",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/CNgAxe692gDCrJy46' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Prečko smješten je u Zagrebu, preciznije u kvartu Prečko. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki, no napravljene su na takav način da istovremeno može samo jedna osoba raditi što nije baš praktično, posebice ako se okupi ekipa i zajedno radite trening. Dodatne stvari u parku kao što je klupica za trbušnjake, samostalne švedske ljestve, par šipki za sklekove te set od tri povezane niže šipke mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i jedna klupica koja ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 set od tri povezane niže šipke <br>#3 švedske ljestve <br>#4 horizontalne ljestve &#34monkey bars&#34 <br>#5 klupica za trbušnjake <br>#6 šipke za sklekove <br>#7 set od dvije šipke za zgibove različitih visina <br>#8 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/Dbe1sonARSKGSXJ17' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Ciglenica smješten je u Zagrebu, preciznije u kvartu Trešnjevka nasuprot starog vodocrpilišta koje je sagrađeno od cigle. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Set od tri povezane šipke različitih visina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su kombinacija te pružaju dovoljno mjesta za vježbanje i kod veće frekvencije ljudi u parku. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su klupice za trbušnjake mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; crpka za vodu; ulična rasvjeta<br><strong>-</strong>  hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije klupice za trbušnjake <br>#2 set od tri šipke za zgibove različitih visina <br>#3 horizontalne ljestve &#34monkey bars&#34 <br>#4 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/pV6aAdrAH99uWkbv7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Siget smješten je u Zagrebu, preciznije u kvartu Siget. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. U parku se nalazi set od tri povezane šipke za zgibove različitih visina, od kojih je najviša šipka po mojem mišljenju za prosječnog vježbača previsoka, dok od ostale dvije jedna je normalne visine, dok je druga dosta niža te će više biti od koristi početnicima koji vježbaju negativni dio pokreta. Mala zamjerka je da su sve šipke u parku predebele. Kod propadanja nije bolja situacija jer se nalazi jedan par paralelnih šipki koji su po meni prenisko postavljene te je šipka također predebela. Dodatne stvari u parku kao što su male paralete, niža horizontalna šipka i švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong> izoliranost; podloga; ulična rasvjeta; hlad<br><strong>-</strong>  prostor za freestyle pokrete; crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 švedske ljestve <br>#3 niske paralete <br>#4 samostalna niska šipka <br>#5 niske paralelne šipke za propadanja",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/ZsRNo65vd3HQSucm7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Trnsko smješten je u Zagrebu, preciznije u kvartu Trnsko. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Preko sedam šipki različitih visina i debljina za zgibove odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalaze dva para paralelnih šipki od kojih je jedan po mojem mišljenju postavljen prenisko te je neupotrebljiv što se tiče propadanja, dok je drugi par meni osobno idealne visine. Dodatne stvari u parku kao što su dvije malo modificirane švedske ljestve mogu se iskoristiti za učenje statičkih elemenata te dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 7+ šipki različitih visina <br>#2 švedske ljestve <br>#3 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/32YSQk3gXziYMyRP9' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "1. Street Workout park Trnover smješten je u Zagrebu, preciznije u kvartu Trnovčica. Park je odlično postavljen te spada među top parkove Zagreba jer je jedan od rijetkih parkova koji su baš planski i temeljito izgrađeni u dogovoru sa samim vježbačima. U parku se osim &#34monkey bars&#34 nalazi i preko sedam šipki za zgibove različitih duljina, debljina i visina, pa se zbog toga ovdje najčešće i organiziraju grupni treninzi, radionice i slične stvari jer stvarno velik broj ljudi može istovremeno vježbati na istom mjestu. Za propadanja su na usluzi dva para paralelnih šipki za propadanja koja čine dovoljno dobar omjer u odnosu na broj šipki za zgibove. Dodatne stvari u parku kao što su klupica za trbušnjake, dva para niskih paraleta, jedan par visokih paraleta, dve kutije za skakanje te jedna samostalna dosta niska horizontalna šipka mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong> izoliranost; podloga; ulična rasvjeta; prostor za freestyle pokrete<br><strong>-</strong>  crpka za vodu; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 7+ šipki različitih visina <br>#3 dva para niskih paraleta <br>#4 klupica za trbušnjake <br>#5 set od dvije šipke za zgibove različitih visina <br>#6 dva para visokih paralelnih šipki za propadanja <br>#7 kutije za skakanje <br>#8 visoke paralete",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/yL6GFgmvJJpbpXcw5' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Britanac smješten je u Zagrebu, preciznije u blizini Britanskog trga. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja su na usluzi dva para paralelnih šipki za propadanja različitih visina tako da odgovaraju svima. Dodatne stvari u parku kao što su švedske ljestve, niske paralete te dvije povezane horizontalne šipke nižih dimenzija mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong> podloga; prostor za freestyle pokrete; hlad<br><strong>-</strong>  crpka za vodu; blizina stambenih zgrada; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 niske paralete <br>#3 5+ šipki različitih visina <br>#4 dva para paralelni šipki za propadanja različitih visina <br>#5 set od dvije povezane niže šipke",
    parkNavigation:
      "Klikni <a href='https://g.page/street-workout-park-zagreb?share' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Špansko smješten je u Zagrebu, preciznije u kvartu Špansko. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalaze tri para paralelnih šipki od kojih su dva niski, a jedni visoki pa tako svi mogu odabrati onu opciju koja im više odgovara. U parku se nalaze još i četiri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete<br><strong>-</strong>  ulična rasvjeta; hlad; crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 paralelne šipke za propadanja različitih visina <br>#4 visoke paralelne šipke za propadanja <br>#5 visoke paralete <br>#6 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/d8fDrr4f3VxPWFPA7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Gajnice smješten je u Zagrebu, preciznije u kvartu Gajnice. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih te jedan par samostalnih paralelnih šipki koju su malo nezgodno napravljene jer istovremeno na njima može samo jedna osoba raditi što nije baš praktično, posebice ako se okupi ekipa i zajedno radite trening. Dodatne stvari u parku kao što je klupica sa ručkama i švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete<br><strong>-</strong>  crpka za vodu; ulična rasvjeta; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 set od tri šipke za zgibove različitih visina <br>#4 set od dvije šipke za zgibove različitih visina <br>#5 klupica sa ručkama <br>#6 švedske ljestve",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/kDBbQ3zn75fgTW3R9' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Klaka smješten je u Zagrebu, preciznije u kvartu Klaka. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih te jedan par samostalnih paralelnih šipki koji je malo nezgodno napravljen jer istovremeno na njima može samo jedna osoba raditi što nije baš praktično, posebice ako se okupi ekipa i zajedno radite trening. Dodatne stvari u parku kao što su švedske ljestve, dva para šipki za sklekove, klupica za trbušnjake te klupica sa ručkama mogu se iskoristiti za učenje statičkih elemenata te čak sedam klupica koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening<br><strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 šipke za sklekove <br>#4 visoke paralelne šipke za propadanja <br>#5 švedske ljestve <br>#6 klupica za trbušnjake <br>#7 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/RDpHY6TfSa15KeSa9' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Folka smješten je u Zagrebu, preciznije u kvartu Folnegovićevo naselje u sklopu Osnovne škole Lovre pl. Matačića. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Tri visoke šipke za zgibove jedina su opcija, no zbog različitih visina pružaju dovoljno opcija za svaku vrstu treninga.  Za propadanja se u parku nalazi samo jedan set od dva para srednjih paralelnih šipki što je bolja opcija od visokih jer ovdje nema problema prilikom penjanja na njih. Dodatne stvari u parku kao što su dvije klupice za trbušnjake mogu se iskoristiti za učenje statičkih elemenata.<br><strong>+</strong> izoliranost: podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  hlad; crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 dvije klupice za trbušnjake <br>#3 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/KLrg8DNDumneSwFt6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Šubićeva smješten je u Zagrebu, preciznije u kvartu Donji grad u blizini Šubićeve ulice. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Park je dosta mali pa zato jedina opcija za izvođenje zgibova je jedan &#34monkey bars&#34, a za propadanja jedan set od dva para srednjih paralelnih šipki što je bolja opcija od visokih jer ovdje nema problema prilikom penjanja na njih. U parku se nalazi i klupica koja ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening<br><strong>+</strong> izoliranost: podloga; ulična rasvjeta; hlad<br><strong>-</strong>  crpka za vodu; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/i5Hs5gbAD9URLk1t8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  tunel_sljeme: {
    lat: 45.86418245014666,
    lng: 15.981966689773946,
    parkName: "Street Workout park - Tunel Sljeme",
    parkImage: "images/tunel-sljeme.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Tunel Sljeme smješten je u Zagrebu, preciznije u kvartu Gračani odmah nakon izlaska iz poznatog tunela Sljeme u neposrednoj blizini novoizgrađene sljemenske žičare. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Za zgibove nije ništa bolji izbor jer se na lokaciji nalaze samo dvije šipke različitih visina od kojih je samo jedna dovoljna visoka za neometano izvođenje, dok je druga više od koristi početnicima koji žele vježbati negativni dio pokreta. Dodatne stvari u parku kao što je klupica s ručkama može se iskoristiti za učenje statičkih elemenata.<br><strong>+</strong> izoliranost<br><strong>-</strong>  crpka za vodu; prostor za freestyle pokrete; podloga; ulična rasvjeta; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od dvije šipke za zgibove različitih visina <br>#2 klupica sa ručkama",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/qUa6nsBR29zexnwG8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  zapadni_kolodvor: {
    lat: 45.80996716223953,
    lng: 15.949365433546706,
    parkName: "Street Workout park - Zapadni kolodvor",
    parkImage: "images/zapadni-kolodvor.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Zapadni kolodvor smješten je u Zagrebu, preciznije u kvartu Črnomerec u neposrednoj blizini zagrebačkog zapadnog kolodvora. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Kod zgibova je bolja situacija jer se nudi jedan &#34monkey bars&#34 te dvije povezane šipke različitih visina koje mogu poslužiti kao odličan alat za vježbanje na neutralnom dijelu pokreta. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje statičkih elemenata te pet klupica koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> podloga<br><strong>-</strong>  blizina stambenih zgrada; crpka za vodu; prostor za freestyle pokrete; ulična rasvjeta; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 set od dvije šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/PJvkGgF1XWom3SXf7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Sportska gimnazija smješten je u Zagrebu, preciznije u kvartu Trešnjevka u blizini Sportske gimnazije. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Za zgibove je jedina opcija jedan &#34monkey bars&#34 koji nije toliko loša opcija jer se na njemu mogu izvoditi i različite verzije zgibova, što kod samostalne šipke nije slučaj. Za propadanja se u parku nalaze tri para paralelnih šipki od kojih su dva niski, a jedni visoki pa tako svi mogu odabrati onu opciju koja im više odgovara. Dodatne stvari u parku kao što su švedske ljestve i set od tri povezane niže šipke mogu se iskoristiti za učenje statičkih elemenata te dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> podloga; izoliranost; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; prostor za freestyle pokrete; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 švedske ljestve <br>#4 paralelne šipke za propadanja različitih visina <br>#5 set od tri povezane niže šipke",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dz4u2VM9FXeU3mGL9' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Enschede smješten je u Enschedeu, u sklopu Volkspark gradskog parka. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Pet šipki različitih visina i debljina za zgibove odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par paralelnih šipki, no napravljene su na takav način da istovremeno može samo jedna osoba raditi što nije baš praktično, posebice ako se okupi ekipa i zajedno radite trening. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri velika kamena bloka koji ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> podloga; izoliranost; prostor za freestyle pokrete<br><strong>-</strong>  crpka za vodu; hlad; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>Švedske ljestve <br>#2 4+ šipki različitih visina <br>#3 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/b8afy56zJwmKfFEi7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Gronau smješten je u Gronau, u sklopu Gronau gradskog parka. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa dva &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Zbog velikog broja šipki za zgibove ovaj park je odličan za organizaciju nekih vrsta grupnih treninga, tako da bilo bi idealno kada bi se postavio još jedan set paralelnih šipki za propadanja jer ovaj trenutni nije dovoljan za takve događaje. Dodatne stvari u parku kao što su švedske ljestve te set od tri povezane niže šipke mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost<br><strong>-</strong>  crpka za vodu; hlad; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije horizontalne ljestve &#34monkey bars&#34 <br>#2 5+ šipki različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 set od tri povezane niže šipke <br>#5 švedske ljestve",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/iYL738KW3wxk3TT58' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
      "Street Workout park University of Twente smješten je u sklopu fakulteta Twente, no dostupan je široj publici. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim modificiranim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Od dva para šipki za propadanja po mojem mišljenju jedan je prenisko postavljen dok je drugi dosta kratak te jedva stanu dvije osobe istovremeno, što dosta uništava cjelokupni doživljaj parka jer su to ujedno i jedine opcije za propadanja. Dodatne stvari u parku kao što su švedske ljestve, šipka za spuštanje, dva para modificiranih ringova te tri niže samostalne šipke mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze i klupica koja ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost; crpka za vodu; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><strong>-</strong>  hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 Set ringova <br>#3 5+ šipki različitih visina <br>#4 paralelne šipke za propadanja različitih visina <br>#5 švedske ljestve <br>#6 set od tri povezane niže šipke",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/84MtJks3ZMCFLT526' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Botinec smješten je u Zagrebu, preciznije u kvartu Botinec. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalaze tri para paralelnih šipki od kojih su dva niski, a jedni visoki pa tako svi mogu odabrati onu opciju koja im više odgovara. Dodatne stvari u parku kao što je klupica za trbušnjake, samostalne švedske ljestve te par šipki za sklekove mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost; podloga; prostor za freestyle pokrete; hlad<br><strong>-</strong>  crpka za vodu; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 visoke paralelne šipke za propadanja <br>#2 šipke za sklekove <br>#3 set od dvije šipke za zgibove različitih visina <br>#4 horizontalne ljestve &#34monkey bars&#34 <br>#5 švedske ljestve <br>#6 klupica za trbušnjake <br>#7 paralelne šipke za propadanja različitih visina <br>#8 set od tri šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/LxpjXqupd84vCjNH8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Betlehem smješten je u Zagrebu, preciznije u kvartu Botinec u sklopu parka Betlehem. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Tri visoke šipke za zgibove jedina su opcija, no zbog različitih visina pružaju dovoljno opcija za svaku vrstu treninga. Dodatne stvari u parku kao što su samostalne švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost; podloga; prostor za freestyle pokrete; hlad<br><strong>-</strong>  crpka za vodu; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od tri šipke za zgibove različitih visina <br>#2 švedske ljestve ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/cAwexCnfw2bX6YR96' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Velika Gorica smješten je u Velikoj Gorici, preciznije u parku dr. Franje Tuđmana. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Set od tri povezane šipke različitih visina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su kombinacija te pružaju dovoljno mjesta za vježbanje i kod veće frekvencije ljudi u parku. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su dvije klupice za trbušnjake te šipke za sklekove mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong>  izoliranost; crpka za vodu; ulična rasvjeta<br><strong>-</strong>  hlad; podloga; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 visoke paralelne šipke za propadanja <br>#4 šipke za sklekove <br>#5 klupica za trbušnjake",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/k12jCyFdmptHrxxRA' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Boćarski dom smješten je u Zagrebu, preciznije u kvartu Cvjetno naselje u sklopu sportsko-rekreacijskog kompleksa Boćarski dom. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Dvije šipke za zgibove u kombinaciji sa malo izmijenjenim &#34monkey bars&#34 pružaju solidan izbor opcija. Dodatne stvari u parku kao što su tri švedske ljestve te klupica za trbušnjake mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong>  izoliranost; crpka za vodu; ulična rasvjeta;<br><strong>-</strong>   podloga; prostor za freestyle pokrete; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 set od dvije šipke za zgibove različitih visina <br>#4 klupica za trbušnjake",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/MALkThFo4zSnVEFh7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Bundek smješten je u Zagrebu, preciznije u kvartu Zapruđe u sklopu jezera Bundek. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. Jedina opcija za izvođenje zgibova je jedan &#34monkey bars&#34 koji je napravljen od drveta te su automatski takve i šipke, što nije baš česta pojava. Jedan set šipki za propadanja mogao je biti postavljen na malo višoj razini te je po mojem osobnom mišljenju razmak između šipki mogao biti malo manji. Dodatne stvari u parku kao što su švedske ljestve, klupica za trbušnjake te set od dvije i tri povezane niže šipke mogu se iskoristiti za učenje raznih statičkih elemenata.  U parku se nalazi još i klupica koja ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost; ulična rasvjeta;<br><strong>-</strong>   podloga; prostor za freestyle pokrete; hlad; crpka za vodu;<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 srednje visoke paralelne šipke za propadanja <br>#3 švedske ljestve <br>#4 set od tri povezane niže šipke <br>#5 set od dvije šipke za zgibove različitih visina <br>#6 klupica za trbušnjake",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/T2VyRNX14nJiwwaG9' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Kajzerica smješten je u Zagrebu, preciznije u kvartu Kajzerica. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Preko sedam šipki različitih visina i debljina za zgibove odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalaze dva para paralelnih šipki od kojih je jedan po mojem mišljenju postavljen prenisko te je neupotrebljiv što se tiče propadanja, dok je drugi par meni osobno idealne visine no razmak između šipki je mogao biti manji. Dodatne stvari u parku kao što su dvije malo modificirane švedske ljestve mogu se iskoristiti za učenje statičkih elemenata te dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  ulična rasvjeta; podloga; prostor za freestyle pokrete;<br><strong>-</strong>   hlad; crpka za vodu; blizina stambenih zgrada<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 5+ šipki različitih visina <br>#2 švedske ljestve <br>#3 srednje visoke paralelne šipke za propadanja <br>#4 set od tri šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/jzbUkXZy8xABW6wW6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Kraljičin zdenac smješten je u Zagrebu, preciznije u kvartu Šestine u sklopu jedne od mnogih planinarskih ruta na Sljemenu. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. Park je dosta mali pa zato jedina opcija za izvođenje zgibova je jedna samostalna šipka, a za propadanja jedan set od dvije paralelne šipke koje su meni osobno idealne visine no razmak između šipki je mogao biti manji. U parku se nalaze i tri klupice koja ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost<br><strong>-</strong>   hlad; crpka za vodu; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 visoke paralelne šipke za propadanja <br>#2 visoka samostalna šipka",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/MpGtpbyTJ65nvvd58' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Lanište smješten je u Zagrebu, preciznije u kvartu Lanište. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim drvenim &#34monkey bars&#34 zvuče kao odlična kombinacija, no u realnosti je upravo suprotno jer budući da je park izrađen od drveta, većina sprava se kroz vrijeme od posljedica vremenskih uvjeta dosta uništilo i raspalo. Dodatne stvari u parku kao što su dvije švedske ljestve i dvije klupice za trbušnjake mogu se iskoristiti za učenje statičkih elemenata. U parku se nalaze i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost; ulična rasvjeta<br><strong>-</strong>   hlad; crpka za vodu; podloga; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od dvije šipke za zgibove različitih visina <br>#2 visoke paralelne šipke za propadanja <br>#3 horizontalne ljestve &#34monkey bars&#34 <br>#4 švedske ljestve <br>#5 klupica za trbušnjake <br>#6 set od tri šipke za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/5iwWHHkpYrQfpG7j6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Remetinec smješten je u Zagrebu, preciznije u kvartu Remetinec u blizini zatvora Remetinec. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalaze tri para paralelnih šipki od kojih su dva niski, a jedni visoki pa tako svi mogu odabrati onu opciju koja im više odgovara. Dodatne stvari u parku kao što je klupica za trbušnjake može se iskoristiti za učenje statičkih elemenata te tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  ulična rasvjeta; podloga; izoliranost; prostor za freestyle pokrete; hlad<br><strong>-</strong>   crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 set od tri šipke za zgibove različitih visina <br>#4 paralelne šipke za propadanja različitih visina <br>#5 set od dvije šipke za zgibove različitih visina <br>#6 klupica za trbušnjake",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/N2eChP8LdVSRqirh8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Sveta Klara smješten je u Zagrebu, preciznije u kvartu Klara u blizini gradskih vrtova sv. Klara. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Za zgibove se nudi jedan &#34monkey bars&#34 te dvije povezane šipke različitih visina koje mogu poslužiti kao odličan alat za vježbanje na neutralnom dijelu pokreta. Za propadanja se u parku nalaze tri para paralelnih šipki od kojih su dva niski, a jedni visoki pa tako svi mogu odabrati onu opciju koja im više odgovara. U parku se nalaze i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  ulična rasvjeta; podloga; izoliranost; crpka za vodu<br><strong>-</strong>   hlad; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od dvije šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 paralelne šipke za propadanja različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/JgzRCCWKvy6rZypw8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
      "Street Workout park Park Stara Trešnjevka smješten je u Zagrebu, preciznije u kvartu Trešnjevka u sklopu parka Stara Trešnjevka. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. Jedina opcija za izvođenje zgibova je jedna samostalna šipka, a za propadanja jedan set od dvije paralelne šipke koje su malo nezgodno napravljene jer istovremeno na njima može samo jedna osoba raditi što nije baš praktično, posebice ako se okupi ekipa i zajedno radite trening. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje statičkih elemenata. U parku se nalaze i tri klupice koja ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  izoliranost; ulična rasvjeta; podloga; prostor za freestyle pokrete<br><strong>-</strong>   hlad; crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 visoka samostalna šipka <br>#2 švedske ljestve <br>#3 niske paralelne šipke za propadanja ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/BCW99Hjk76TGhzrm6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Savski gaj smješten je u Zagrebu, preciznije u kvartu Savski gaj. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalaze tri para paralelnih šipki od kojih su dva niski, a jedni visoki pa tako svi mogu odabrati onu opciju koja im više odgovara. U parku se nalaze i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  ulična rasvjeta; podloga; prostor za freestyle pokrete<br><strong>-</strong>   hlad; crpka za vodu; blizina stambenih zgrada<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 set od dvije šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja <br>#4 paralelne šipke za propadanja različitih visina ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/USMJrTUC97ZG6Byu8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Petrovaradinska smješten je u Zagrebu, preciznije u kvartu Prečko. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje zgibova, koji znamo da spadaju u najosnovnije pokrete našeg sporta. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su dvije klupice za trbušnjake, klupica sa ručkama te set od tri povezane niže šipke mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i četiri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  ulična rasvjeta; podloga; izoliranost<br><strong>-</strong>   crpka za vodu; prostor za freestyle pokrete; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 visoke paralelne šipke za propadanja <br>#2 dvije klupice za trbušnjake <br>#3 klupica sa ručkama",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/Waz9vGbfzi6GZfdD7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Baška smješten je na otoku Krku, preciznije u naselju Baška. Park je odlično postavljen te spada među top parkove Hrvatske jer je jedan od rijetkih parkova koji su baš planski i temeljito izgrađeni u dogovoru sa samim vježbačima. U parku se osim dva &#34monkey bars&#34 nalazi i preko sedam šipki za zgibove različitih duljina, debljina i visina, pa se zbog toga ovdje najčešće i organiziraju grupni treninzi, radionice i slične stvari jer stvarno velik broj ljudi može istovremeno vježbati na istom mjestu. Za propadanja su na usluzi dva para paralelnih šipki za propadanja, od kojih je jedan prenisko postavljen tako da bilo bi idealno kada bi se postavio još jedan set paralelnih šipki za propadanja jer ovaj trenutni nije dovoljan za takve događaje. Dodatne stvari u parku kao što su švedske ljestve, set od tri povezane niže šipke, dvije klupice za trbušnjake, niske paralete te četiri kutije za skakanje mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i četiri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  podloga; izoliranost; prostor za freestyle pokrete<br><strong>-</strong>   crpka za vodu; hlad; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 tri horizontalne ljestve &#34monkey bars&#34 <br>#2 7+ šipki različitih visina <br>#3 dvije klupice za trbušnjake <br>#4 švedske ljestve <br>#5 set od tri povezane niže šipke <br>#6 dva para paralelnih šipki za propadanja različitih visina <br>#7 niske paralete <br>#8 kutije za skakanje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/DZ1KrMnBbJ1w42FZA' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Kamp Glavotok smješten je na otoku Krku, preciznije unutar istoimenog kampa Glavotok. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Kod zgibova je bolja situacija jer se nudi jedan &#34monkey bars&#34 te set od tri povezane šipke različitih visina omogućuju izvođenje različitih oblika zgibova. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong>  hlad<br><strong>-</strong>   podloga; izoliranost; prostor za freestyle pokrete; crpka za vodu; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 švedske ljestve ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/brMd2r7RCnJCM2Qx7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Krk smješten je na otoku Krku, preciznije u istoimenom gradu Krku. Park je odlično postavljen te ima titulu najboljeg i najljepšeg parka u cijeloj Hrvatskoj, ako ne i šire okolice. Također, jedan je od rijetkih parkova koji su baš planski i temeljito izgrađeni u dogovoru sa samim vježbačima. U parku se osim &#34monkey bars&#34 nalazi i preko deset šipki za zgibove različitih duljina, debljina i visina, pa se zbog toga ovdje najčešće i organiziraju grupni treninzi, radionice i slične stvari jer stvarno velik broj ljudi može istovremeno vježbati na istom mjestu. Jedan set po dvije paralelne šipke te jedan set od tri zajedno tvore pet šipki za propadanja što je odličan omjer u odnosu na broj šipki za zgibove. Dodatne stvari u parku kao što su švedske ljestve, klupica za trbušnjake, šipka za spuštanje, niske paralete, par ringova, kutije za skakanje te set od tri niske povezane šipke mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong>  hlad; podloga; izoliranost; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>   crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 10+ šipki različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 set od tri šipke za zgibove različitih visina <br>#4 niske paralete <br>#5 set ringova <br>#6 tri visoke paralelne šipke za propadanja <br>#7 švedske ljestve <br>#8 klupica za trbušnjake <br>#9 kutije za skakanje <br>#10 set od tri povezane niže šipke ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/C9xCu1Uc2bMcxS8N9' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Kamp Zablaće smješten je na otoku Krku, preciznije unutar kampa Zablaće u naselju Baška. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Tri visoke šipke za zgibove jedina su opcija te možda nije baš najbolja solucija jer niže šipke pružaju mogućnost višeg fokusa na negativni dio pokreta, posebice početnicima. Za propadanja se u parku nalazi samo jedan par paralelnih šipki koji je po mojem mišljenju postavljen na idealnoj visini. Dodatne stvari u parku kao što su niske paralete mogu se iskoristiti za učenje statičkih elemenata. U parku se nalaze još i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  hlad; podloga; ulična rasvjeta<br><strong>-</strong>   crpka za vodu; blizina kamp kućica; prostor za freestyle pokrete;<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 niske paralete <br>#3 srednje visoke paralelne šipke za propadanja ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/knaw3QwRsVpQ2FiP6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Komrčar smješten je na otoku Rabu, preciznije unutar park šume Komrčar u istoimenom gradu Rabu. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Preko sedam šipki različitih visina i debljina za zgibove odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja su na usluzi dva para paralelnih šipki za propadanja različitih visina tako da odgovaraju svima, no po mojem mišljenju razmak između šipki je mogao biti manji. Dodatne stvari u parku kao što su švedske ljestve te šipke za sklekove mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i klupica koja ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong>  hlad; izoliranost<br><strong>-</strong>   crpka za vodu; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 tri visoke paralelne šipke za propadanja <br>#3 šipke za sklekove <br>#4 set od tri šipke za zgibove različitih visina <br>#5 7+ šipki različitih visina  ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/yfw5ZCuzhxQN1KEbA' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Jastrebarsko smješten je u gradu Jastrebarsko, preciznije u blizini Erdödijevog parka. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Za zgibove se nudi jedan &#34monkey bars&#34 te dvije povezane šipke različitih visina koje mogu poslužiti kao odličan alat za vježbanje na neutralnom dijelu pokreta. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što je klupica za trbušnjake, švedske ljestve te klupica sa ručkama mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i klupica koja ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong>   crpka za vodu;  hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 set od dvije šipke za zgibove različitih visina <br>#4 visoke paralelne šipke za propadanja <br>#5 klupica za trbušnjake <br>#6 klupica sa ručkama  ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/RSY657ucbhD6CzH27' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Volksgarten smješten je u gradu Grazu, preciznije u sklopu Volksgarten gradskog parka. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Zbog velikog broja šipki za zgibove ovaj park je odličan za organizaciju nekih vrsta grupnih treninga, tako da bilo bi idealno kada bi se postavio još jedan set paralelnih šipki za propadanja jer ovaj trenutni nije dovoljan za takve događaje. Dodatne stvari u parku kao što su švedske ljestve te set od tri povezane niže šipke mogu se iskoristiti za učenje raznih statičkih elemenata.<br><strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong>   crpka za vodu; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 5+ šipki različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 švedske ljestve <br>#4 srednje visoke paralelne šipke za propadanja <br>#5 set od tri povezane niže šipke ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/8y6qdYUFtTSFBLDx7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Utrine smješten je u Zagrebu, preciznije u kvartu Utrine u sklopu SRC Utrine. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje zgibova, koji znamo da spadaju u najosnovnije pokrete našeg sporta. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su klupica sa ručkama te set od tri povezane niže šipke mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; podloga; ulična rasvjeta; hlad<br><strong>-</strong>   crpka za vodu; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri povezane niže šipke <br>#2 visoke paralelne šipke za propadanja <br>#3 klupica sa ručkama ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/ETPv2u1HkAXx8U3x8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Travno smješten je u Zagrebu, preciznije u kvartu Travno. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. Za zgibove su na raspolaganju jedan &#34monkey bars&#34 te jedna niža samostalna šipka koja je odlična za početnike kod vježbanja negativnog dijela pokreta. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su klupica za trbušnjake, set od tri povezane niže šipke, tri švedske ljestve te dvije modificirane visoke paralete mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost<br><strong>-</strong>   crpka za vodu; prostor za freestyle pokrete; podloga; ulična rasvjeta; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije horizontalne ljestve &#34monkey bars&#34 <br>#2 samostalna šipka manjih dimenzija <br>#3 visoke paralete <br>#4 tri švedske ljestve <br>#5 visoke paralelne šipke za propadanja <br>#6 klupica za trbušnjake <br>#7 set od tri povezane niže šipke",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dBq2Fx9nrbs1CFvk7' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Sloboština smješten je u Zagrebu, preciznije u kvartu Sloboština u sklopu Osnovne škole Otok. Četiri šipke različitih visina i debljina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što je klupica za trbušnjake te samostalne švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i klupica koje ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; prostor za freestyle pokrete; podloga; ulična rasvjeta<br><strong>-</strong>   crpka za vodu; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 set od tri šipke za zgibove različitih visina <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 samostalna šipka manjih dimenzija <br>#4 visoke paralelne šipke za propadanja <br>#5 švedske ljestve <br>#6 klupica za trbušnjake ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/euiJXdfhga93HQtWA' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Dugave smješten je u Zagrebu, preciznije u kvartu Dugave. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Kod zgibova nije ništa bolja situacija jer jedina opcija za izvođenje zgibova je jedan &#34monkey bars&#34. Dodatne stvari u parku kao što je klupica za trbušnjake te samostalne švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; podloga<br><strong>-</strong>  crpka za vodu; hlad; prostor za freestyle pokrete; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 švedske ljestve <br>#2 horizontalne ljestve &#34monkey bars&#34 <br>#3 klupica za trbušnjake",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/Ziu59TPd5PpNjS1A6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Buzin smješten je u Zagrebu, preciznije u kvartu Buzin. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. Za zgibove su na raspolaganju jedan &#34monkey bars&#34 te jedna niža samostalna šipka koja je odlična za početnike kod vježbanja negativnog dijela pokreta. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih te je po mojem mišljenju razmak između šipki mogao biti manji. U parku se nalaze još i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; podloga; hlad; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 visoke paralelne šipke za propadanja <br>#3 samostalna šipka manjih dimenzija",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/Cd9WFnDqViUs1Gq26' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Šanci smješten je u Zagrebu, preciznije u kvartu Borovje. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. Za zgibove je nažalost na raspolaganju samo jedna srednja šipka koja i nije baš najbolja opcija, posebice kod izvođenja ruskih zgibova. Za propadanja se u parku nalazi jedan set od dva para srednjih paralelnih šipki što je bolja opcija od visokih jer ovdje nema problema prilikom penjanja na njih te jedan par samostalnih paralelnih šipki koju su malo nezgodno napravljene jer istovremeno na njima može samo jedna osoba raditi što nije baš praktično, posebice ako se okupi ekipa i zajedno radite trening. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i klupica koje ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; podloga; hlad; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; prostor za freestyle pokrete<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 švedske ljestve <br>#2 samostalna šipka manjih dimenzija <br>#3 srednje visoke paralelne šipke za propadanja <br>#4 paralelne šipke za propadanja različitih visina <br>#5 dvije klupice za trbušnjake ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/BBkFRDbR2qpZCXYX6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Novi Petruševec smješten je u Zagrebu, preciznije u kvartu Peščenica. Park bi smjestio u skupinu loših parkova ponajviše zbog nedostatka bilo kakve sprave za izvođenje propadanja, koja znamo da spadaju u najosnovnije pokrete našeg sporta. Za zgibove nije ništa bolja opcija jer na izbor postoje samo dvije šipke različitih visina od kojih je samo jedna dovoljno visoka, dok je druga više od koristi početnicima za vježbanje negativnog dijela pokreta. Dodatne stvari u parku kao što je klupica za trbušnjake može se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i tri klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; podloga<br><strong>-</strong>  crpka za vodu; prostor za freestyle pokrete; hlad; ulična rasvjeta<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment: "#1 set od dvije šipke za zgibove različitih visina <br>#2 klupica za trbušnjake ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/tesg1ggoZYU25U2w8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Ban Josip Jelačić smješten je u Zaprešiću, preciznije u sklopu Srednje škole Ban Josip Jelačić. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Set od tri povezane šipke različitih visina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su kombinacija te pružaju dovoljno mjesta za vježbanje i kod veće frekvencije ljudi u parku. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što je klupica za trbušnjake može se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i klupica koje ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> izoliranost; podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 klupica za trbušnjake <br>#4 visoke paralelne šipke za propadanja ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/MZWVdWoUfBAKe5Cw5' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Zaprešić smješten je u istoimenom gradu Zaprešiću, preciznije u blizini DVD Zaprešić. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Set od tri povezane šipke različitih visina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su kombinacija te pružaju dovoljno mjesta za vježbanje i kod veće frekvencije ljudi u parku. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i klupica koje ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 set od tri šipke za zgibove različitih visina <br>#4 visoke paralelne šipke za propadanja ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/5asWs9hdGBThUEZg6' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Javorje smješten je u općini Brdovec, preciznije u naselju Javorje preko puta crkve sv. Vid. Park bi smjestio negdje u zlatnu sredinu jer je dosta dobro postavljen, no ima mjesta za napredak. Preko pet šipki različitih visina i debljina za zgibove u kombinaciji sa dva &#34monkey bars&#34 odlična su stvar jer svatko može pronaći ono što mu najbolje odgovara bez obzira bio početnik ili napredni vježbač. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što je set od tri povezane niže šipke, švedske ljestve te šipke za sklekove mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalaze još i dvije klupice koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> podloga; prostor za freestyle pokrete; ulična rasvjeta; hlad<br><strong>-</strong>  crpka za vodu<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 dvije horizontalne ljestve &#34monkey bars&#34 <br>#2 švedske ljestve <br>#3 šipke za sklekove <br>#4 visoke paralelne šipke za propadanja <br>#5 5+ šipki različitih visina ",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/jEehUa9kcUzr6nDRA' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Santiago de Compostela smješten je u istoimenom gradu, nedaleko od glavnog željezničkog kolodvora. Park je odlično postavljen te spada među top parkove cijele Španjolske jer je jedan od rijetkih parkova koji su baš planski i temeljito izgrađeni u dogovoru sa samim vježbačima. U parku se osim &#34monkey bars&#34 nalazi i preko deset šipki za zgibove različitih duljina, debljina i visina, pa se zbog toga ovdje najčešće i organiziraju grupni treninzi, radionice i slične stvari jer stvarno velik broj ljudi može istovremeno vježbati na istom mjestu. Set od tri paralelne šipke za propadanja odlična su solucija jer pružaju i više nego dovoljno mjesta za izvođenje, čak i kod takvih većih događaja. Dodatne stvari u parku kao što su švedske ljestve, klupica za trbušnjake, šipka za spuštanje, set ringova, set od dvije povezane niže šipke te jedna visoka paraleta mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i klupica koje ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> podloga; prostor za freestyle pokrete; ulična rasvjeta<br><strong>-</strong>  crpka za vodu; hlad<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 10+ šipki različitih visina <br>#2 set od dvije povezane niže šipke <br>#3 visoke paralete <br>#4 visoke paralelne šipke za propadanja <br>#5 horizontalne ljestve &#34monkey bars&#34 <br>#6 klupica za trbušnjake <br>#7 set ringova",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/zT6Ey1rqC16c353F8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Joan Oró smješten je u gradu Lleida, u sklopu Joan Oró gradskog parka. Park bi smjestio negdje pri dnu ljestvice, ali ne na samo dno jer iako je dosta loš, ima i gorih od njega. Za zgibove su na raspolaganju jedan &#34monkey bars&#34 te jedna niža samostalna šipka koja je odlična za početnike kod vježbanja negativnog dijela pokreta. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su dvije švedske ljestve te klupica za trbušnjake mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i veliki broj klupica koje ako ste kreativni mogu osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong> ulična rasvjeta; crpka za vodu<br><strong>-</strong>  hlad; podloga; prostor za freestyle pokrete;<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 klupica za trbušnjake <br>#3 dvije švedske ljestve <br>#4 samostalna šipka manjih dimenzija <br>#5 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/PT5rLesGyLRBcray8' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
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
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Tuhelj smješten je u istoimenoj općini, nedaleko od Osnovne škole Lijepa naša. Park bi smjestio negdje malo ispod prosjeka jer nije toliko loš, no ima dosta mjesta za napredak. Set od tri povezane šipke različitih visina za zgibove u kombinaciji sa jednim &#34monkey bars&#34 odlična su kombinacija te pružaju dovoljno mjesta za vježbanje i kod veće frekvencije ljudi u parku. Za propadanja se u parku nalazi samo jedan par visokih paralelnih šipki što ponekim ljudima zna biti problem jer se ne mogu popeti na njih. Dodatne stvari u parku kao što su švedske ljestve mogu se iskoristiti za učenje raznih statičkih elemenata. U parku se nalazi još i dvije klupice koje ako ste kreativni može osim za odlaganje stvari poslužiti i kao dobar alat za trening.<br><strong>+</strong><br><strong>-</strong>  crpka za vodu; podloga; prostor za freestyle pokrete; ulična rasvjeta; hlad;<br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "#1 horizontalne ljestve &#34monkey bars&#34 <br>#2 set od tri šipke za zgibove različitih visina <br>#3 visoke paralelne šipke za propadanja",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/mgLAwY2KxKvMjgqu5' target=_blank>ovdje</a> i pogledaj još slika parka kao i detaljnije upute kako doći do parka ovisno o tvojoj trenutnoj lokaciji!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },
};

setTimeout(function () {
  Object.keys(parks).forEach((park) => {
    generatePark(parks[park]);
  });
}, 500);
