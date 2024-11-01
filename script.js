function calculerPrix() {
    const tailleBois = document.getElementById('taille-bois');
    const prixParStere = parseFloat(tailleBois.options[tailleBois.selectedIndex].dataset.prix);
    const quantite = parseFloat(document.getElementById('quantite').value);

    if (!quantite || quantite <= 0) {
        document.getElementById('resultat').innerHTML = "Veuillez entrer une quantité valide.";
        return;
    }
    const total = prixParStere * quantite;

document.getElementById('resultat').innerHTML = 'Le coùt total pour $ {quantite} stères de $ }tailleBois.options[tailleBois.selectedIndex].text.split(' - ') [0]} est de ${total.toFixed(2)}€.';
}