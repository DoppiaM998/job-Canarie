const jobData = [
  {
    id: 1,
    country: "Germania",
    sector: "Logistica",
    zone: "Nord",
    title: "Responsabile Magazzino",
    description: "Esperienza richiesta in gestione magazzino",
    salary: "€2000-2500"
  },
  {
    id: 2,
    country: "Germania",
    sector: "Sanitario",
    zone: "Sud",
    title: "Infermiere",
    description: "Infermiere per strutture ospedaliere",
    salary: "€2200-2800"
  },
  {
    id: 3,
    country: "Portogallo",
    sector: "Ristorazione",
    zone: "Nord",
    title: "Sous Chef",
    description: "Sous chef per ristorante 4 stelle",
    salary: "€1700-2100"
  },
  {
    id: 4,
    country: "Olanda",
    sector: "Logistica",
    zone: "Centro",
    title: "Operatore Logistica",
    description: "Operatore per hub logistico internazionale",
    salary: "€1600-2000"
  },
  {
    id: 5,
    country: "Belgio",
    sector: "Pulizie",
    zone: "Sud",
    title: "Responsabile Pulizie",
    description: "Responsabile di un team di pulizie",
    salary: "€1400-1800"
  },
  {
    id: 6,
    country: "Austria",
    sector: "Turismo",
    zone: "Centro",
    title: "Receptionist Hotel",
    description: "Receptionist per hotel 5 stelle",
    salary: "€1600-2000"
  }
];

const countries = ["Germania", "Portogallo", "Olanda", "Belgio", "Austria", "Svezia", "Svizzera"];

const sectors = ["Ristorazione", "Turismo", "Logistica", "Edilizia", "Pulizie e Igienizzazione", "Sanitario", "Customer Service", "Altro"];

const zones = {
  "Germania": ["Nord", "Centro", "Sud"],
  "Portogallo": ["Nord", "Centro", "Sud"],
  "Olanda": ["Nord", "Centro", "Sud"],
  "Belgio": ["Nord", "Centro", "Sud"],
  "Austria": ["Nord", "Centro", "Sud"],
  "Svezia": ["Nord", "Centro", "Sud"],
  "Svizzera": ["Nord", "Centro", "Sud"]
};

function filterJobs(country, sector, zone) {
  return jobData.filter(job => {
    const matchCountry = !country || job.country === country;
    const matchSector = !sector || job.sector === sector;
    const matchZone = !zone || job.zone === zone;
    return matchCountry && matchSector && matchZone;
  });
}
