const jobData = [
  {
    id: 1,
    country: "Spagna",
    sector: "Ristorazione",
    zone: "Madrid",
    title: "Chef di Cucina",
    description: "Ricerca chef con esperienza in cucina italiana",
    salary: "€1800-2200"
  },
  {
    id: 2,
    country: "Germania",
    sector: "Logistica",
    zone: "Berlino",
    title: "Responsabile Magazzino",
    description: "Esperienza richiesta in gestione magazzino",
    salary: "€2000-2500"
  },
  {
    id: 3,
    country: "Italia",
    sector: "Turismo",
    zone: "Roma",
    title: "Guida Turistica",
    description: "Guida turistica bilingue per tour manager",
    salary: "€1600-2000"
  },
  {
    id: 4,
    country: "Francia",
    sector: "Edilizia",
    zone: "Parigi",
    title: "Carpentiere",
    description: "Carpentiere specializzato in ristrutturazioni",
    salary: "€1900-2400"
  },
  {
    id: 5,
    country: "Spagna",
    sector: "Customer Service",
    zone: "Barcellona",
    title: "Operatore Customer Service",
    description: "Supporto clienti multilingue",
    salary: "€1500-1800"
  },
  {
    id: 6,
    country: "Germania",
    sector: "Sanitario",
    zone: "Monaco",
    title: "Infermiere",
    description: "Infermiere per strutture ospedaliere",
    salary: "€2200-2800"
  },
  {
    id: 7,
    country: "Portogallo",
    sector: "Ristorazione",
    zone: "Lisbona",
    title: "Sous Chef",
    description: "Sous chef per ristorante 4 stelle",
    salary: "€1700-2100"
  },
  {
    id: 8,
    country: "Olanda",
    sector: "Logistica",
    zone: "Amsterdam",
    title: "Operatore Logistica",
    description: "Operatore per hub logistico internazionale",
    salary: "€1600-2000"
  },
  {
    id: 9,
    country: "Belgio",
    sector: "Pulizie",
    zone: "Bruxelles",
    title: "Responsabile Pulizie",
    description: "Responsabile di un team di pulizie",
    salary: "€1400-1800"
  },
  {
    id: 10,
    country: "Austria",
    sector: "Turismo",
    zone: "Vienna",
    title: "Receptionist Hotel",
    description: "Receptionist per hotel 5 stelle",
    salary: "€1600-2000"
  }
];

const countries = ["Spagna", "Germania", "Italia", "Francia", "Portogallo", "Olanda", "Belgio", "Austria", "Svezia", "Svizzera"];

const sectors = ["Ristorazione", "Turismo", "Logistica", "Edilizia", "Pulizie", "Sanitario", "Customer Service", "Altro"];

const zones = {
  "Spagna": ["Madrid", "Barcellona", "Valencia", "Siviglia"],
  "Germania": ["Berlino", "Monaco", "Amburgo", "Colonia"],
  "Italia": ["Roma", "Milano", "Napoli", "Firenze"],
  "Francia": ["Parigi", "Lione", "Marsiglia", "Tolosa"],
  "Portogallo": ["Lisbona", "Porto", "Covilhã"],
  "Olanda": ["Amsterdam", "Rotterdam", "L'Aia"],
  "Belgio": ["Bruxelles", "Anversa", "Gand"],
  "Austria": ["Vienna", "Salzburg", "Innsbruck"],
  "Svezia": ["Stoccolma", "Göteborg", "Malmö"],
  "Svizzera": ["Zurigo", "Basilea", "Berna"]
};

function filterJobs(country, sector, zone) {
  return jobData.filter(job => {
    const matchCountry = !country || job.country === country;
    const matchSector = !sector || job.sector === sector;
    const matchZone = !zone || job.zone === zone;
    return matchCountry && matchSector && matchZone;
  });
}
