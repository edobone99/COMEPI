function searchOnEnter(event) {
    if (event.key === 'Enter') {
        var searchTerm = document.getElementById('searchInput').value.toLowerCase();
        var elementsToSearch = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6', text); // Aggiungi altri selettori se necessario

        elementsToSearch.forEach(function(element) {
            var textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchTerm)) {
                // Trovata una corrispondenza, puoi gestire l'elemento come preferisci
                element.style.backgroundColor = 'yellow';
            }
        });
    }
}