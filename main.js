// Sélection des éléments DOM nécessaires pour le popup des cookies
var popup = document.getElementById('cookie-popup');
var acceptButton = document.getElementById('accept-cookies');
var refuseButton = document.getElementById('refuse-cookies');
var reopenButton = document.getElementById('reopen-popup');

/**
 * Affiche le popup des cookies si l'utilisateur n'a pas encore pris de décision.
 */
function displayCookiePopupIfRequired() {
    if (!localStorage.getItem('cookiesDecision')) {
        popup.style.display = 'block';
    }
}

/**
 * Cache le popup et sauvegarde le choix de l'utilisateur d'accepter les cookies.
 */
function acceptCookies() {
    popup.style.display = 'none';
    localStorage.setItem('cookiesDecision', 'accepted');
}

/**
 * Cache le popup et sauvegarde le choix de l'utilisateur de refuser les cookies.
 */
function refuseCookies() {
    popup.style.display = 'none';
    localStorage.setItem('cookiesDecision', 'refused');
    // Pour ajouter une logique spécifique lorsque les cookies sont refusés, ajoutez-la ici.
}

/**
 * Réaffiche le popup pour permettre à l'utilisateur de revoir sa décision.
 */
function reopenPopup() {
    popup.style.display = 'block';
}

// Attribue les fonctions d'événement aux boutons correspondants
acceptButton.onclick = acceptCookies;
refuseButton.onclick = refuseCookies;
reopenButton.onclick = reopenPopup;

// Affiche le popup au chargement de la page si nécessaire
displayCookiePopupIfRequired();