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
      "Street Workout park Knežija smješten je u Zagrebu, preciznije u kvartu Knežija. Park je jako loše postavljen jer osim &#34Monkey bara&#34 i jedne samostalne šipke nema potrebnih sprava za kvalitetan trening pogotovo što se tiče push dijela jer nema šipki za propadanja niti sklekove. Veliki plus ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog gustog drveća pa je ugodno za trenirati posebice u ljetnom periodu.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/rkYZFMf3x1BFV39aA' target=_blank>ovdje</a> i saznaj kako doći do parka!",
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
      "Street Workout park Srednjaci smješten je u Zagrebu, preciznije u kvartu Srednjaci. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i park je u sklopu velikog parka za djecu i između Osnovne škole Josipa Račića i dječjeg vrtića Srednjaci",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dL7N1ZzrCCbyoXmR8' target=_blank>ovdje</a> i saznaj kako doći do parka!",
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
      "Street Workout park Gredice smješten je u Zagrebu, preciznije u kvartu Gredice. Park je jako loše postavljen jer osim &#34Monkey bar&#34 i jedne samostalne šipke nema potrebnih sprava za kvalitetan trening posebice što se tiče push dijela jer nema šipki za propadanja niti sklekove. Jedina zamjerka je da tokom ljetnog perioda nema hlada na prostoru parka",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za penjanje <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/HrZLmVUbE3EKmDb7A' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Remiza smješten je u Zagrebu, preciznije u kvartu Vurovčica. Kvart je dosta mali i s obzirom da većinu toga prostora zahvaća Remiza ZET-a (&#34Okretište zagrebačkog električnog tramvaja&#34) tokom vremena se među ljudima ustalilo ime „Remiza“. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Park je zanimljiv jer je dosta niži u odnosu na razinu ulice, pa nije toliko vidljiv slučajnim prolaznicima. Ovisno o periodu dana na velikom dijelu parka je hlad što je veliki plus tokom ljetnih mjeseci jer je ugodno za trenirati. Dodatan plus je i mogućnost dopune vode u podrumu obližnje zgrade. Jedina zamjerka je ta da se u sklopu parka nalazi i parkić za djecu.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Set paralelnih šipki za propadanja različitih visina <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/6PnKpWyq9YtRmHej8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  jarun1: {
    lat: 45.776868709906765,
    lng: 15.937986311481682,
    parkName: "Street Workout park - Jarun 1",
    parkImage: "images/jarun.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Jarun smješten je u Zagrebu, preciznije na jezeru Jarun. Na cijelom jezeru nalaze se dva parka i oba parka su odlično postavljena, među boljima u Zagrebu. Park je zanimljiv jer ima mix starih (old school) te novih šipki. Mali problem predstavlja debljina šipki jer su jedne predebele dok su druge pretanke. Dosta old school opreme izgubilo je bitku s vremenom pa je nešto lošijeg stanja. Ovaj park je jedan od najstarijih parkova u Zagrebu i ističe se malo od drugih ne samo zbog svoje starosti nego i zbog mogućnosti treninga s dodatnim opterećenjem jer se u parku nalazi mnoštvo improviziranih utega u obliku automobilskih guma pa sve do čistih betonskih i drvenih blokova. Veliki plus ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog gustog drveća pa je ugodno za trenirati posebice u ljetnom periodu kao i mogućnost dopune vode na obližnjim fontama oko jezera.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) s dodatkom švedskih ljestvi sa svake strane <br>Srednje visoke paralelne šipke za propadanja <br>Švedske ljestve <br>Set visokih horizontalnih šipki različitih visina <br> <br>Veliki izbor improviziranih utega u obliku betonskih blokova i automobilskih guma (prazne i pune)",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/1suKL9hkAr3CqnN38' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Fallerovo smješten je u Zagrebu, preciznije u kvartu Trešnjevka, u sklopu Fallerovog šetališta. Nalazi se između bočališta i dječjeg igrališta stoga je podosta velika frekvencija ljudi u parku. Park je dosta loše postavljen, ima dosta nepotrebnih sprava i nema sprava za push vježbe kao što su šipke za propadanja i sklekove. Što se tiče pull vježbi, &#34Monkey bar&#34 i ostale šipke su odlične debljine i visine. Velika prednost ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog gustog drveća pa je ugodno za trenirati, posebice u ljetnom periodu.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Mali fitness komplet koji se sastoji od stolice, rotirajućeg kruga i jedne vrste bicikla <br>Bicikl <br>Set od dvije stolice različitih funkcija; pull/push pokreti <br>Dvije stolice jedna nasuprot druge koje rekreiraju određenu varijantu (&#34leg press&#34) vježbe <br>Sprava za ljuljanje <br>Set od dvije sprave za ljuljanje okrenute jedna nasuprot drugoj",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/ATCuJMVBKK6HJmwH7' target=_blank>ovdje</a> i pogledaj slike parka!",
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
      "Street Workout park Voltino smješten je u Zagrebu, preciznije u kvartu Voltino. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Dodatan plus je mogućnost dopune vode u obližnjim župnim prostorijama. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i blizina obližnjoj crkvi sv. Leopolda Mandića pa nije baš uvijek primjereno puštati glasnu muziku posebice za vrijeme trajanja misnog slavlja.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set paralelnih šipki za propadanja različitih visina <br>Šipke za sklekove <br>Sprava za veslanje <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/97UCaF1Ej6HjNphSA' target=_blank>ovdje</a> i pogledaj slike parka!",
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
      "Street Workout park Ljubljanica smješten je u Zagrebu, preciznije u kvartu Ljubljanica. Park je solidno postavljen, debljina i visina šipki je također dobra i sadrži sve potrebne sprave za kvalitetan trening. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i obje šipke za zgibove se malo naginju na jednu stranu tj. nisu ravne.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set kotača za vrtnju <br>Set paralelnih šipki za propadanja različitih visina <br>Bicikl <br>Sprava za skijanje <br>Sprava za penjanje <br>Švedske ljestve u kombinaciji s dijelom za propadanja <br>Dvije samostalne visoke horizontalne šipke za zgibove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/xQpTk7UG7sAwx2vv6' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Trešnjevački plac smješten je u Zagrebu, preciznije u kvartu Trešnjevka. Park je solidno postavljen, debljina i visina šipki je taman i sadrži većinu potrebnih sprava za kvalitetan trening. Park se nalazi odmah pored Osnovne škole Julija Klovića i u sklopu je doma za starije osobe Trešnjevka. Veliki plus ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog gustog drveća pa je ugodno za trenirati posebice u ljetnom periodu. Neke zamjerke su da je u parku na nekim dijelovima teren malo neravan pa je nezgodno raditi handstand i slične stvari te u parku nedostaje &#34Monkey bar&#34 pa izvođenje nekih vrsta zgibova poput onih s neutralnim hvatom nije moguće. Također, kako je park napravljen pored doma za starije osobe nije prikladno puštati previše glasnu muziku.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od tri niske horizontalne šipke različitih visina <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za skijanje <br>Set za ljude u invalidskim kolicima koji se sastoji od dvije vježbe vrtnje i improviziranih ringova za zgibove",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/iHbaNbx6Nonfzgks5' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Savica smješten je u Zagrebu, preciznije u kvartu Savica na nasipu. Park je dosta loše postavljen jer ima mali izbor šipki za zgibove. Sadrži horizontalne ljestve (&#34Monkey bar&#34) koje imaju nešto deblji opseg šipke te je samo s jedne strane mogućnost izvedbe zgibova jer su s druge strane postavljene švedske ljestve. Ostale dvije šipke za zgibove imaju dobar hvat no neprikladne su visine pa nisu naročito korisne pogotovo za neke vježbe kao što su ruski zgibovi. Park se nalazi na uređenom savskom nasipu te je dobar za usputni trening i rekreaciju uz neki cardio ili obrnuto. Prednost mu je i mogućnost dopune vode na obližnoj crpki 50m istočno od parka. Još jedna zamjerka je da tokom ljetnog perioda nema hlada na prostoru parka te je podloga šljunčana.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Klupa s ručkama",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/XshNN5s8oKUVMTu66' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Jarun 2 smješten je u Zagrebu, preciznije na jezeru Jarun. Na cijelom jezeru nalaze se dva parka i oba parka su odlično postavljena, među boljima u Zagrebu. Park je zanimljiv jer ima mix starih (old school) te novih šipki. Old school šipke su malo predebele, no novi dio parka je taman što se tiče debljine i visine šipki i sadrži sve potrebne sprave za kvalitetan trening no ovaj se park također ističe i po velikom broju različitih šipki i ostalih sprava što ga čini idealnim izborom kada se organizira bilo kakav grupni trening. Dodatan plus ovog parka je mogućnost dopune vode na obližnjim fontama oko jezera.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Četiri horizontalne ljestve (&#34Monkey bar&#34) <br>Srednje visoke paralelne šipke za propadanja <br>Drveni trupci za trbušnjake <br>Švedske ljestve <br>Niz horizontalnih šipki za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/YEGKXDzSYFpwtcjT6' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Rudeš smješten je u Zagrebu, preciznije u kvartu Rudeš. Park je solidno postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Dodatan plus ovog parka je njegova pozicija jer je okružen zgradama sa svih strana pa nije toliko vidljiv za slučajne prolaznike. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i blizina Osnovne škole Rudeš i dječjeg vrtića Grigor Vitez.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Švedske ljestve",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dRE2ctPwnPD3UpYs8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Svetice smješten je u Zagrebu, preciznije u kvartu Svetice. Park je odlično postavljen, debljina i visina šipki su taman i sadrži sve potrebne sprave za kvalitetan trening no ovaj park se također ističe i po velikom broju različitih šipki i ostalih sprava što ga čini idealnim izborom kada se organizira bilo kakav grupni trening. Park se nalazi u sklopu jedne vrste sportsko-rekreacijskog centra gdje još djeluju dva atletska kluba Svetice i Dinamo Zrinjevac, malo dalje je smješten i kompleks bazena Svetice, ali glavna stvar je stadion Maksimir gdje trenira nogometni klub Dinamo. Dodatan plus je mogućnost dopune vode i odlaska na obližnji WC. Ovaj park zajedno s još dva parka Trnover i Britanac spada u najbolje parkove Zagreba, a usudili bi se reći i Hrvatske. Sva tri parka su planski izgrađena u dogovoru s lokalnom zajednicom i zbog toga se dosta ističu od šablonski postavljenih parkova koji prevladavaju u ostatku Zagreba. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i dosta mali razmak između sprava s obzirom koliko još slobodnog mjesta ima na raspolaganju.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Dvije visoke i jedne srednje visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Veliki niz od preko 8 visokih horizontalnih šipki za zgibove različitih visina <br>Dva seta niskih horizontalnih šipki različitih visina <br>Jedna samostalna srednje visoka šipka za zgibove s dodatkom konopca visokog otprilike 5m <br>Tri kompleta malih vodoravnih šipki na podu",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/CNgAxe692gDCrJy46' target=_blank>ovdje</a> i pogledaj slike parka!",
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
      "Street Workout park Prečko smješten je u Zagrebu, preciznije u kvartu Prečko. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening no dosta je velik razmak između sprava što je mali minus jer je dosta prostora neiskorišteno. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i blizina dječjeg vrtića Prečko.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za propadanje <br>Set niskih horizontalnih šipki različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/Dbe1sonARSKGSXJ17' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Ciglenica smješten je u Zagrebu, preciznije u kvartu Trešnjevka. Pored parka se nalazi staro vodocrpilište koje je cijelo obloženo u ciglama pa je park po tome i dobio ime. Park je odlično postavljen jedan od boljih u Zagrebu, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Dodatan plus je i mogućnost dopune vode u obližnjem parku za pse. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka te u parku zna trenirati puno ljudi. Međutim, donedavno je ovaj park imao jako velik problem, sprave za propadanja su bile dosta udaljene jedna od druge te je to povećavalo mogućnost ozljeda stoga smo se mi kao tim obratili putem maila izvođaču radova koji je postavljao park i prezentirali mu problem. Nakon nekog vremena sprave su ponovno bile postavljene, no ovoga puta pravilno.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Dvije klupice za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Sprava za skijanje <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za penjanje u kombinaciji sa spravom za njihanje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/pV6aAdrAH99uWkbv7' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Siget smješten je u Zagrebu, preciznije u kvartu Siget. Park je solidno postavljen, no problem su: debljina i visina šipki. Jedna je previsoka za osobu prosječne visine, dok je druga preniska za određene vježbe kao što su ruski zgibovi pa onda ostaje samo jedna korisna šipka u parku. Sličan problem je i s visinom šipki za propadanja koje su prenisko postavljene. Mana je što se nalazi neposredno glavne prometice u Novom Zagrebu pa je velika buka. Velika prednost ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog gustog drveća pa je ugodno za trenirati posebice u ljetnom periodu. Ovaj park je u sklopu jedne vrste izdužene trim staze koja je postavljena u obliku šetnice kroz park pa ima raznih sprava od grede za hodanje do različitih prepreka za preskakanje i klupica za trbušnjake. Zanimljiva zamisao, no nije praktično jer su sprave podosta udaljene jedna od druge te tako otežavaju samu efikasnost treninga.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve u kombinaciji s mrežom za penjanje i malim umjetnim zidom za penjanje <br>Dvije horizontalne šipke za zgibove različite visine <br>Niske vodoravne šipke na podu <br>Srednje visoke paralelne šike za propadanja <br>Trupac za održavanje ravnoteže <br>Set od tri niske horizontalne šipke različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/ZsRNo65vd3HQSucm7' target=_blank>ovdje</a> i pogledaj slike parka!",
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
      "Street Workout park Trnsko smješten je u Zagrebu, preciznije u kvartu Trnsko. Park je solidno postavljen, debljina i visina šipki dobra, no bilo bi odlično kad bi bio malo veći izbor viših šipki za ruske zgibove. Po dizajnu i izgledu se razlikuje od ostalih parkova te ima i zanimljive dodatke kao što je ploča za penjanje tj. sprava za razvijanje jakosti prstiju što je dosta česta oprema u dvoranama za penjanje. Jedina zamjerka je da tokom ljetnog perioda nema hlada na prostoru parka.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Srednje visoke paralelne šipke za propadanja <br>Set od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s kratkim švedskim ljestvama i dodatkom za vježbu snage u prstima <br>Šipke za sklekove <br>Niz srednje visokih horizontalnih šike za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/32YSQk3gXziYMyRP9' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Trnover smješten je u Zagrebu, preciznije u kvartu Trnovčica. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Ovaj park zajedno s još dva parka Svetice i Britanac spadaju u najbolje parkove Zagreba, a usudili bi se reći i Hrvatske. Sva tri parka su planski izgrađena u dogovoru s lokalnom zajednicom i zbog toga se dosta ističu od šablonski postavljenih parkova koji prevladavaju u ostatku Zagreba. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i blizina Osnovne škole Antuna Branka Šimića",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih i srednje visokih paralelnih šipki za propadanja <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Niz od pet visokih horizontalnih šipki za zgibove različitih visina <br>Set od dvije visoke i dvije srednje visoke horizontalne šipke za zgibove različitih visina <br>Stalak za skakanje <br>Tri para niskih paralelnih šipki na podu",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/yL6GFgmvJJpbpXcw5' target=_blank>ovdje</a> i pogledaj slike parka!!",
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
      "Street Workout park Britanac smješten je u Zagrebu, preciznije u blizini Britanskog trga. Park je odlično postavljen, debljina i visina šipki također su taman kao i veliki izbor šipki, a također sadrži i sve potrebne sprave za kvalitetan trening. Veliki plus ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog okolnih zgrada pa je ugodno za trenirati posebice u ljetnom periodu. Ovaj park zajedno s još dva parka Svetice i Trnover spada u najbolje parkove Zagreba, a usudili bi se reći i Hrvatske. Sva tri parka su planski izgrađena u dogovoru s lokalnom zajednicom i zbog toga se dosta ističu od šablonski postavljenih parkova koji prevladavaju u ostatku Zagreba. Jedine zamjerke su te da je park okružen stambenim zgradama te se ne može puštati glasna muzika zbog okolnih stanara i što park nije prostorno velik te su neke sprave dosta blizu jedna drugoj.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih i srednje visokih paralelnih šipki za propadanja <br>Dva seta od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s švedskim ljestvama <br>Set od dvije niske horizontalne šipke različitih visina <br>Set malih vodoravnih šipki na podu",
    parkNavigation:
      "Klikni <a href='https://g.page/street-workout-park-zagreb?share' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Špansko smješten je u Zagrebu, preciznije u kvartu Špansko. Park je odlično postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Park se nalazi u sklopu jedne vrste sportsko-rekreacijskog centra gdje još djeluju teniski klub Špansko i nogometni klub Špansko. Dodatan plus je mogućnost dopune vode kod obližnjih terena nogometnog kluba Špansko. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i blizina Osnovne škole Tituša Brezovačkog i dječjeg vrtića Špansko.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih paralelnih šipki za propadanja <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set paralelnih šipki za propadanja različitih visina <br>Klupica za trbušnjake <br>Sprava za veslanje <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Bicikl <br>Set od dvije stolice različitih funkcija; pull/push pokreti <br>Set od dvije sprave za ljuljanje okrenute jedna nasuprot drugoj",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/d8fDrr4f3VxPWFPA7' target=_blank>ovdje</a> i pogledaj slike parka!",
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
      "Street Workout park Gajnice smješten je u Zagrebu, preciznije u kvartu Gajnice. Park je solidno postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening. Jedina zamjerka je da tokom ljetnog perioda nema hlada na prostoru parka.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih paralelnih šipki za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Klupa s ručkama <br>Sprava za propadanje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/kDBbQ3zn75fgTW3R9' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Klaka smješten je u Zagrebu, preciznije u kvartu Klaka. Park je dobro postavljen, debljina i visina šipki također taman i sadrži sve potrebne sprave za kvalitetan trening no sadrži i nekolicinu nepotrebnih sprava pa stoga mali minus no unatoč tomu jedan je od boljih parkova u Zagrebu. Park se također nalazi u sklopu sportsko-rekreacijskog centra Klaka koji ima puno toga za ponuditi od atletske staze do različith terena i podloga. Jedina zamjerka je da tokom ljetnog perioda nema hlada na prostoru parka",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih paralelnih šipki za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za skijanje <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Klupa s ručkama <br>Sprava za veslanje <br>Sprava za propadanje <br>Dva seta šipki za sklekove <br>Sprava za njihanje s dodatkom dva rotirajuća kruga za različite vježbe <br>Švedske ljestve",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/RDpHY6TfSa15KeSa9' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Folka smješten je u Zagrebu, preciznije u kvartu Folnegovićevo naselje. Park je solidno postavljen, debljina i visina šipki taman i sadrži sve potrebne sprave za kvalitetan trening no sadrži i nekolicinu nepotrebnih sprava pa stoga mali minus. Jedine zamjerke su da tokom ljetnog perioda nema hlada na prostoru parka i blizina Osnovne škole pl. Matačića.",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Bicikl <br>Set paralelnih šipki za propadanja različitih visina <br>Set od četiri rotirajuća kruga za različite vježbe <br>Set od dvije klupice za trbušnjake <br>Sprava za njihanje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/bMzre1mRyaEysm9F8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
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
      "Street Workout park Šubićeva smješten je u Zagrebu, preciznije u kvartu Donji grad u blizini Šubićeve ulice. Park je solidno postavljen, debljina i visina šipki taman i sadrži sve potrebne sprave za kvalitetan trening. Veliki plus ovog parka prema ostalima je što je veliku većinu dana prostor parka u hladu zbog gustog drveća pa je ugodno za trenirati posebice u ljetnom periodu. Također, park se nalazi u prostoru između zgrada pa je skriven od pogleda prolaznika pa je rijetko gužva i par metara od parka se nalaze betonski tereni za nogomet i košarku. Jedina zamjerka je mali izbor šipki za zgibove (samo dvije na &#34Monkey baru&#34) i prisutnost par nepotrebnih sprava",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za njihanje <br>Set paralelnih šipki za propadanja različitih visina <br>Jedna varijanta bicikla",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/i5Hs5gbAD9URLk1t8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },
};

setTimeout(function () {
  Object.keys(parks).forEach((park) => {
    generatePark(parks[park]);
  });
}, 500);
