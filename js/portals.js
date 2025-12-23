// Portali di lavoro per ogni paese e settore
const jobPortals = {
  "Spagna": {
    "Ristorazione": [
      { name: "Indeed ES", url: "https://www.indeed.es/q-Ristorazione-jobs.html?l=Spagna" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Ristorazione&location=Spagna" },
      { name: "Infojobs", url: "https://www.infojobs.net/busqueda-empleo/ristorazione/spagna" }
    ],
    "Turismo": [
      { name: "Indeed ES", url: "https://www.indeed.es/q-Turismo-jobs.html?l=Spagna" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Turismo&location=Spagna" },
      { name: "Infojobs", url: "https://www.infojobs.net/busqueda-empleo/turismo/spagna" }
    ],
    "Logistica": [
      { name: "Indeed ES", url: "https://www.indeed.es/q-Logistica-jobs.html?l=Spagna" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Logistica&location=Spagna" },
      { name: "Infojobs", url: "https://www.infojobs.net/busqueda-empleo/logistica/spagna" }
    ],
    "Edilizia": [
      { name: "Indeed ES", url: "https://www.indeed.es/q-Edilizia-jobs.html?l=Spagna" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Edilizia&location=Spagna" },
      { name: "Infojobs", url: "https://www.infojobs.net/busqueda-empleo/edilizia/spagna" }
    ],
    "Pulizie": [
      { name: "Indeed ES", url: "https://www.indeed.es/q-Pulizie-jobs.html?l=Spagna" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Pulizie&location=Spagna" }
    ],
    "Sanitario": [
      { name: "Indeed ES", url: "https://www.indeed.es/q-Sanitario-jobs.html?l=Spagna" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Sanitario&location=Spagna" },
      { name: "Infojobs", url: "https://www.infojobs.net/busqueda-empleo/sanitario/spagna" }
    ],
    "Customer Service": [
      { name: "Indeed ES", url: "https://www.indeed.es/q-Customer-Service-jobs.html?l=Spagna" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Customer+Service&location=Spagna" }
    ]
  },
  "Germania": {
    "Ristorazione": [
      { name: "Indeed DE", url: "https://de.indeed.com/q-Gastronomie-jobs.html?l=Deutschland" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Gastronomie&location=Deutschland" },
      { name: "StepStone", url: "https://www.stepstone.de/stellenangebote--Gastronomie.html" }
    ],
    "Turismo": [
      { name: "Indeed DE", url: "https://de.indeed.com/q-Tourismus-jobs.html?l=Deutschland" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Tourismus&location=Deutschland" }
    ],
    "Logistica": [
      { name: "Indeed DE", url: "https://de.indeed.com/q-Logistik-jobs.html?l=Deutschland" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Logistik&location=Deutschland" },
      { name: "StepStone", url: "https://www.stepstone.de/stellenangebote--Logistik.html" }
    ],
    "Edilizia": [
      { name: "Indeed DE", url: "https://de.indeed.com/q-Bauwesen-jobs.html?l=Deutschland" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Bauwesen&location=Deutschland" }
    ],
    "Sanitario": [
      { name: "Indeed DE", url: "https://de.indeed.com/q-Pflege-jobs.html?l=Deutschland" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Pflege&location=Deutschland" },
      { name: "StepStone", url: "https://www.stepstone.de/stellenangebote--Pflege.html" }
    ]
  },
  "Italia": {
    "Ristorazione": [
      { name: "Indeed IT", url: "https://it.indeed.com/q-Ristorazione-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Ristorazione&location=Italia" },
      { name: "InfoJobs", url: "https://www.infojobs.it/ricerca-lavoro/ristorazione" }
    ],
    "Turismo": [
      { name: "Indeed IT", url: "https://it.indeed.com/q-Turismo-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Turismo&location=Italia" }
    ],
    "Logistica": [
      { name: "Indeed IT", url: "https://it.indeed.com/q-Logistica-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Logistica&location=Italia" }
    ]
  },
  "Francia": {
    "Ristorazione": [
      { name: "Indeed FR", url: "https://fr.indeed.com/q-Restauration-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Restauration&location=France" },
      { name: "SeektoJob", url: "https://www.seektojob.com/emploi/restauration/france" }
    ],
    "Edilizia": [
      { name: "Indeed FR", url: "https://fr.indeed.com/q-Batiment-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Batiment&location=France" }
    ]
  },
  "Portogallo": {
    "Ristorazione": [
      { name: "Indeed PT", url: "https://www.indeed.pt/q-Restauracao-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Restauracao&location=Portugal" }
    ]
  },
  "Olanda": {
    "Logistica": [
      { name: "Indeed NL", url: "https://www.indeed.nl/q-Logistiek-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Logistiek&location=Niederlande" }
    ]
  },
  "Belgio": {
    "Pulizie": [
      { name: "Indeed BE", url: "https://www.indeed.be/q-Nettoyage-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Nettoyage&location=Belgique" }
    ]
  },
  "Austria": {
    "Turismo": [
      { name: "Indeed AT", url: "https://www.indeed.at/q-Tourismus-jobs.html" },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?keywords=Tourismus&location=Austria" }
    ]
  }
};

// Funzione per ottenere i portali di lavoro per un paese e settore
function getJobPortals(country, sector) {
  if (jobPortals[country] && jobPortals[country][sector]) {
    return jobPortals[country][sector];
  }
  
  // Portali generici come fallback
  return [
    { name: "LinkedIn Jobs", url: `https://www.linkedin.com/jobs/search/?keywords=${sector}&location=${country}` },
    { name: "Indeed", url: `https://www.indeed.com/q-${sector}-jobs.html?l=${country}` }
  ];
}
