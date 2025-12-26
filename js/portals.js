// Portali di lavoro per ogni paese, settore e zona
// Ogni zona copre un raggio di ~15km con ricerche mirate
const jobPortals = {
  "Germania": {
    "Nord": {
      "Ristorazione": [
        { name: "Indeed Hamburg (Gastronomie)", url: "https://de.indeed.com/jobs?q=Gastronomie&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Gastronomie)", url: "https://www.stepstone.de/jobs/Gastronomie/in-Bremen?radius=15" }
      ],
      "Logistica": [
        { name: "Indeed Hamburg (Logistik)", url: "https://de.indeed.com/jobs?q=Logistik&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Logistik)", url: "https://www.stepstone.de/jobs/Logistik/in-Bremen?radius=15" }
      ],
      "Commercio": [
        { name: "Indeed Hamburg (Handel)", url: "https://de.indeed.com/jobs?q=Einzelhandel&l=Hamburg&radius=15" },
        { name: "StepStone Bremen (Handel)", url: "https://www.stepstone.de/jobs/Einzelhandel/in-Bremen?radius=15" }
      ]
    },
    "Centro": {
      "Finanza": [
        { name: "Indeed Frankfurt (Finanzen)", url: "https://de.indeed.com/jobs?q=Finanzen&l=Frankfurt&radius=15" },
        { name: "StepStone Frankfurt (Banking)", url: "https://www.stepstone.de/jobs/Banken/in-Frankfurt-am-Main?radius=15" }
      ],
      "Logistica": [
        { name: "Indeed Köln (Logistik)", url: "https://de.indeed.com/jobs?q=Logistik&l=K%C3%B6ln&radius=15" },
        { name: "StepStone Düsseldorf (Logistik)", url: "https://www.stepstone.de/jobs/Logistik/in-D%C3%BCsseldorf?radius=15" }
      ]
    },
    "Sud": {
      "Tecnologia": [
        { name: "Indeed München (IT)", url: "https://de.indeed.com/jobs?q=IT&l=M%C3%BCnchen&radius=15" },
        { name: "StepStone Stuttgart (Engineering)", url: "https://www.stepstone.de/jobs/Ingenieurwesen/in-Stuttgart?radius=15" }
      ],
      "Automotive": [
        { name: "Indeed München (Automotive)", url: "https://de.indeed.com/jobs?q=Automotive&l=M%C3%BCnchen&radius=15" },
        { name: "StepStone Stuttgart (Automotive)", url: "https://www.stepstone.de/jobs/Automotive/in-Stuttgart?radius=15" }
      ]
    }
  },
  "Austria": {
    "Nord / Centro": {
      "Finanza": [
        { name: "Indeed Wien (Finanzen)", url: "https://at.indeed.com/jobs?q=Finanzen&l=Wien&radius=15" },
        { name: "StepStone Wien (International)", url: "https://www.stepstone.at/jobs/International/in-Wien?radius=15" }
      ],
      "Tecnologia": [
        { name: "Indeed Linz (IT)", url: "https://at.indeed.com/jobs?q=IT&l=Linz&radius=15" },
        { name: "StepStone Linz (Technik)", url: "https://www.stepstone.at/jobs/Technik/in-Linz?radius=15" }
      ]
    },
    "Ovest / Sud": {
      "Turismo": [
        { name: "Indeed Salzburg (Tourismus)", url: "https://at.indeed.com/jobs?q=Tourismus&l=Salzburg&radius=15" },
        { name: "StepStone Graz (Service)", url: "https://www.stepstone.at/jobs/Service/in-Graz?radius=15" }
      ],
      "Tecnologia": [
        { name: "Indeed Graz (IT)", url: "https://at.indeed.com/jobs?q=IT&l=Graz&radius=15" },
        { name: "StepStone Graz (Technik)", url: "https://www.stepstone.at/jobs/Technik/in-Graz?radius=15" }
      ]
    }
  },
  "Olanda": {
    "Nord": {
      "Energia": [
        { name: "Indeed Groningen (Energie)", url: "https://www.indeed.nl/jobs?q=Energie&l=Groningen&radius=15" }
      ]
    },
    "Centro": {
      "Tecnologia": [
        { name: "Indeed Amsterdam (Tech)", url: "https://www.indeed.nl/jobs?q=Tech&l=Amsterdam&radius=15" },
        { name: "Indeed Utrecht (IT)", url: "https://www.indeed.nl/jobs?q=IT&l=Utrecht&radius=15" }
      ],
      "Turismo": [
        { name: "Indeed Amsterdam (Toerisme)", url: "https://www.indeed.nl/jobs?q=Toerisme&l=Amsterdam&radius=15" }
      ]
    },
    "Sud": {
      "Logistica": [
        { name: "Indeed Rotterdam (Logistiek)", url: "https://www.indeed.nl/jobs?q=Logistiek&l=Rotterdam&radius=15" }
      ],
      "Tecnologia": [
        { name: "Indeed Eindhoven (High Tech)", url: "https://www.indeed.nl/jobs?q=High+Tech&l=Eindhoven&radius=15" }
      ]
    }
  },
  "Belgio": {
    "Nord (Fiandre)": {
      "Finanza": [
        { name: "Indeed Bruxelles (Finance)", url: "https://be.indeed.com/jobs?q=Finance&l=Bruxelles&radius=15" }
      ],
      "Logistica": [
        { name: "Indeed Antwerpen (Logistiek)", url: "https://be.indeed.com/jobs?q=Logistiek&l=Antwerpen&radius=15" }
      ]
    },
    "Sud (Vallonia)": {
      "Logistica": [
        { name: "Indeed Liège (Logistique)", url: "https://be.indeed.com/jobs?q=Logistique&l=Li%C3%A8ge&radius=15" }
      ]
    }
  },
  "Svizzera": {
    "Nord": {
      "Finanza": [
        { name: "Indeed Zürich (Finanzen)", url: "https://ch.indeed.com/jobs?q=Finanzen&l=Z%C3%BCrich&radius=15" }
      ],
      "Farmaceutico": [
        { name: "Indeed Basel (Pharma)", url: "https://ch.indeed.com/jobs?q=Pharma&l=Basel&radius=15" }
      ]
    },
    "Centro": {
      "Finanza": [
        { name: "Indeed Zug (Finance)", url: "https://ch.indeed.com/jobs?q=Finance&l=Zug&radius=15" }
      ]
    },
    "Sud": {
      "Finanza": [
        { name: "Indeed Genève (Finance)", url: "https://ch.indeed.com/jobs?q=Finance&l=Gen%C3%A8ve&radius=15" },
        { name: "Indeed Lugano (Finanza)", url: "https://ch.indeed.com/jobs?q=Finanza&l=Lugano&radius=15" }
      ]
    }
  }
};

// Funzione per ottenere i portali di lavoro per un paese, settore e zona
function getJobPortals(country, sector, zone) {
  // Mappatura traduzioni per ricerche dirette
  const sectorTranslations = {
    "it": {
      "Ristorazione": "Ristorazione Gastronomia",
      "Turismo": "Turismo Hotel",
      "Logistica": "Logistica Magazzino",
      "Edilizia": "Edilizia Costruzioni",
      "Pulizie e Igienizzazione": "Pulizie Igienizzazione",
      "Sanitario": "Sanitario Infermiere",
      "Customer Service": "Customer Service Assistenza"
    },
    "de": {
      "Ristorazione": "Gastronomie Restaurant",
      "Turismo": "Tourismus Hotel",
      "Logistica": "Logistik Lager",
      "Edilizia": "Baugewerbe Konstruktion",
      "Pulizie e Igienizzazione": "Reinigung Gebaeudereinigung",
      "Sanitario": "Pflege Gesundheit",
      "Customer Service": "Kundenservice"
    },
    "nl": {
      "Ristorazione": "Horeca Restaurant",
      "Turismo": "Toerisme Hotel",
      "Logistica": "Logistiek Magazijn",
      "Edilizia": "Bouw Constructie",
      "Pulizie e Igienizzazione": "Schoonmaak",
      "Sanitario": "Gezondheidszorg",
      "Customer Service": "Klantenservice"
    },
    "es": {
      "Ristorazione": "Restauracion Gastronomia",
      "Turismo": "Turismo Hotel",
      "Logistica": "Logistica Almacen",
      "Edilizia": "Construccion Edificacion",
      "Pulizie e Igienizzazione": "Limpieza Higienizacion",
      "Sanitario": "Sanitario Enfermeria",
      "Customer Service": "Atencion al Cliente"
    }
  };

  const cityMap = {
    "Germania": { "Nord": "Hamburg", "Centro": "Frankfurt", "Sud": "Munich" },
    "Austria": { "Nord / Centro": "Vienna", "Ovest / Sud": "Salzburg" },
    "Olanda": { "Nord": "Groningen", "Centro": "Amsterdam", "Sud": "Rotterdam" },
    "Belgio": { "Nord (Fiandre)": "Brussels", "Sud (Vallonia)": "Liege" },
    "Svizzera": { "Nord": "Zurich", "Centro": "Zug", "Sud": "Geneva" }
  };

  const city = (cityMap[country] && cityMap[country][zone]) || country;
  
  // Dominio e Lingua per nazione
  const config = {
    "Germania": { dom: "de", lang: "de" },
    "Austria": { dom: "at", lang: "de" },
    "Olanda": { dom: "nl", lang: "nl" },
    "Belgio": { dom: "be", lang: "nl" },
    "Svizzera": { dom: "ch", lang: "de" },
    "Portogallo": { dom: "pt", lang: "pt" }
  };
  
  const c = config[country] || { dom: "com", lang: "en" };
  const searchTerm = (sectorTranslations[c.lang] && sectorTranslations[c.lang][sector]) || sector;
  const encodedSearch = encodeURIComponent(searchTerm);
  const encodedCity = encodeURIComponent(city);

  return [
    { 
      name: `Google Jobs (${city})`, 
      url: `https://www.google.com/search?q=jobs+${encodedSearch}+in+${encodedCity}` 
    },
    { 
      name: `Indeed Direct (${city})`, 
      url: `https://${c.dom === "nl" ? "www.indeed.nl" : "de.indeed.com"}/jobs?q=${encodedSearch}&l=${encodedCity}&radius=15` 
    },
    { 
      name: `LinkedIn Direct (${city})`, 
      url: `https://www.linkedin.com/jobs/search/?keywords=${encodedSearch}&location=${encodedCity}` 
    },
    { 
      name: `StepStone (${city})`, 
      url: `https://www.stepstone.${c.dom === "at" ? "at" : "de"}/jobs/${encodedSearch}/in-${encodedCity}` 
    }
  ];
}
