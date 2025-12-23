const jobData = [
  {
    id: 1,
    country: "Spagna",
    sector: "Ristorazione",
    zone: "Nord",
    title: "Chef di Cucina",
    description: "Ricerca chef con esperienza in cucina italiana",
    salary: "€1800-2200"
  },
  {
    id: 2,
    country: "Germania",
    sector: "Logistica",
    zone: "Nord",
    title: "Responsabile Magazzino",
    description: "Esperienza richiesta in gestione magazzino",
    salary: "€2000-2500"
  },
  {
    id: 3,
    country: "Italia",
    sector: "Turismo",
    zone: "Centro",
    title: "Guida Turistica",
    description: "Guida turistica bilingue per tour manager",
    salary: "€1600-2000"
  },
  {
    id: 4,
    country: "Francia",
    sector: "Edilizia",
    zone: "Centro",
    title: "Carpentiere",
    description: "Carpentiere specializzato in ristrutturazioni",
    salary: "€1900-2400"
  },
  {
    id: 5,
    country: "Spagna",
    sector: "Customer Service",
    zone: "Sud",
    title: "Operatore Customer Service",
    description: "Supporto clienti multilingue",
    salary: "€1500-1800"
  },
  {
    id: 6,
    country: "Germania",
    sector: "Sanitario",
    zone: "Sud",
    title: "Infermiere",
    description: "Infermiere per strutture ospedaliere",
    salary: "€2200-2800"
  },
  {
    id: 7,
    country: "Portogallo",
    sector: "Ristorazione",
    zone: "Nord",
    title: "Sous Chef",
    description: "Sous chef per ristorante 4 stelle",
    salary: "€1700-2100"
  },
  {
    id: 8,
    country: "Olanda",
    sector: "Logistica",
    zone: "Centro",
    title: "Operatore Logistica",
    description: "Operatore per hub logistico internazionale",
    salary: "€1600-2000"
  },
  {
    id: 9,
    country: "Belgio",
    sector: "Pulizie",
    zone: "Sud",
    title: "Responsabile Pulizie",
    description: "Responsabile di un team di pulizie",
    salary: "€1400-1800"
  },
  {
    id: 10,
    country: "Austria",
    sector: "Turismo",
    zone: "Centro",
    title: "Receptionist Hotel",
    description: "Receptionist per hotel 5 stelle",
    salary: "€1600-2000"
  }
];

const countries = ["Spagna", "Germania", "Italia", "Francia", "Portogallo", "Olanda", "Belgio", "Austria", "Svezia", "Svizzera"];

const sectors = ["Ristorazione", "Turismo", "Logistica", "Edilizia", "Pulizie", "Sanitario", "Customer Service", "Altro"];

const zones = {
  "Spagna": ["Nord", "Centro", "Sud"],
  "Germania": ["Nord", "Centro", "Sud"],
  "Italia": ["Nord", "Centro", "Sud"],
  "Francia": ["Nord", "Centro", "Sud"],
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
