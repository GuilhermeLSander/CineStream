const animes = [];
const botao = document.getElementById('abrir-formulario');
const formulario = document.getElementById('form-filme');
const grid = document.getElementById('animeGrid');

function scrollGrid(direction) {
    grid.scrollBy({ left: direction * 300, behavior: 'smooth' });
}

botao.addEventListener('click', () => {
    formulario.hidden = !formulario.hidden;
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const anime = {
        titulo: formulario.elements.titulo.value,
        genero: formulario.elements.genero.value,
        capa: formulario.elements.capa.value,
        nota: formulario.elements.nota.value
    };
    animes.push(anime);

    const card = document.createElement('article');
    card.classList.add('movie-card');
    card.innerHTML = `
        <img src="${anime.capa}" alt="${anime.titulo}">
        <div class="card-info">
            <h3>${anime.titulo}</h3>
            <p class="genero-tag">${anime.genero}</p>
            <span>⭐ ${anime.nota}</span>
        </div>
    `;

    grid.prepend(card);
    formulario.reset();
    formulario.hidden = true;
    grid.scrollTo({ left: 0, behavior: 'smooth' });
});