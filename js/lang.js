const translations = {
  it: {
    login_title: "Accesso riservato ai collaboratori",
    password_placeholder: "Inserisci password:",
    enter_btn: "Entra",
    search_title: "Ricerca Offerte di Lavoro",
    country_label: "Scegli il Paese:",
    sector_label: "Scegli il Settore:",
    zone_label: "Scegli la Zona:",
    search_btn: "Cerca",
    results_title: "Risultati della Ricerca",
    upload_cv_title: "Invio CV Ridotto",
    name_label: "Nome:",
    experience_label: "Esperienze Lavorative Rilevanti:",
    sector_search_label: "Settore cercato:",
    submit_btn: "Invia CV Ridotto"
  },
  en: {
    login_title: "Access reserved for collaborators",
    password_placeholder: "Enter password:",
    enter_btn: "Enter",
    search_title: "Job Search",
    country_label: "Choose Country:",
    sector_label: "Choose Sector:",
    zone_label: "Choose Zone:",
    search_btn: "Search",
    results_title: "Search Results",
    upload_cv_title: "Submit Short CV",
    name_label: "Name:",
    experience_label: "Relevant Work Experience:",
    sector_search_label: "Sector you're looking for:",
    submit_btn: "Submit Short CV"
  },
  es: {
    login_title: "Acceso reservado para colaboradores",
    password_placeholder: "Ingrese contraseña:",
    enter_btn: "Entrar",
    search_title: "Búsqueda de Empleo",
    country_label: "Elige País:",
    sector_label: "Elige Sector:",
    zone_label: "Elige Zona:",
    search_btn: "Buscar",
    results_title: "Resultados de Búsqueda",
    upload_cv_title: "Enviar CV Resumido",
    name_label: "Nombre:",
    experience_label: "Experiencia Laboral Relevante:",
    sector_search_label: "Sector que buscas:",
    submit_btn: "Enviar CV Resumido"
  }
};

function loadLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Salva la lingua selezionata
  localStorage.setItem("lang", lang);
}

// Funzione per cambiare lingua
function changeLanguage(lang) {
  loadLanguage(lang);
  updateActiveLangButton(lang);
}

function updateActiveLangButton(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');
}
