function setSearchedTerm() {
    const element = document.getElementById('searchedText');
    const searchInput = document.querySelector("input[name='search_form']");
    if (!element) {
        return;
    }
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    element.textContent = params.get('search_form');
    searchInput.value = params.get('search_form');
}

function init() {
    setSearchedTerm();
}


window.onload = init;