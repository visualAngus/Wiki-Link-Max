const url = 'http://192.168.1.66/list/list/write.php'; // Remplacez par l'URL réelle de votre fichier write.php

const data = {
    input: input // Assurez-vous que la variable `input` est correctement définie et contient la valeur à envoyer
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result); // Affiche la réponse du serveur
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
