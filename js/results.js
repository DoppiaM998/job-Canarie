document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const country = params.get('country');
  const sector = params.get('sector');
  const zone = params.get('zone');

  const results = filterJobs(country, sector, zone);
  displayResults(results);
});

function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>Nessun risultato trovato. Prova altri filtri.</p>';
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
}
