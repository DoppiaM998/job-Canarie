document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const country = params.get('country');
  const sector = params.get('sector');
  const zone = params.get('zone');

  const results = filterJobs(country, sector, zone);
  displayResults(results, country, sector);
});

function displayResults(results, country, sector) {
  const resultsContainer = document.getElementById('results');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
        <p>Nessun risultato trovato. Prova altri filtri.</p>
        ${displayJobPortals(country, sector)}
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = results.map(job => `
    <div class="result-card">
      <h4>${job.title}</h4>
      <p><strong>Paese:</strong> ${job.country}</p>
      <p><strong>Zona:</strong> ${job.zone}</p>
      <p><strong>Settore:</strong> <span class="badge">${job.sector}</span></p>
      <p>${job.description}</p>
      <p><strong style="color: #667eea;">${job.salary}</strong></p>
      <a href="upload_reduced.html" class="btn">Candidati</a>
    </div>
  `).join('');

  // Aggiungi sezione portali di lavoro consigliati
  const portalsSection = document.createElement('div');
  portalsSection.style.gridColumn = '1/-1';
  portalsSection.innerHTML = `
    <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">
    <h3 data-i18n="job_portals" style="color: #667eea; margin-bottom: 20px;">Portali di Lavoro Consigliati</h3>
    ${displayJobPortals(country, sector)}
  `;
  
  resultsContainer.parentElement.appendChild(portalsSection);
  loadLanguage(localStorage.getItem("lang") || "it");
}

function displayJobPortals(country, sector) {
  if (!country || !sector) {
    return '<p>Seleziona un paese e un settore per vedere i portali di lavoro consigliati.</p>';
  }

  const portals = getJobPortals(country, sector);
  
  return `
    <div class="portals-grid">
      ${portals.map(portal => `
        <div class="portal-card">
          <h4>${portal.name}</h4>
          <a href="${portal.url}" target="_blank" class="btn" data-i18n="apply_here">Candidati qui</a>
        </div>
      `).join('')}
    </div>
  `;
}
