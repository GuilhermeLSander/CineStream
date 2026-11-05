const animes = [];
const botao = document.getElementById('abrir-formulario');
const formulario = document.getElementById('form-filme');
const grid = document.getElementById('animeGrid');

function scrollGrid(direction) {
    grid.scrollBy({
        left: direction * 300,
        behavior: 'smooth'
    });
}

botao.addEventListener('click', () => {
    formulario.hidden = !formulario.hidden;
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const anime = {
        titulo: formulario.elements.titulo.value,
        capa: formulario.elements.capa.value,
        nota: formulario.elements.nota.value
    };
    animes.push(anime);

    const card = document.createElement('article');
    card.classList.add('movie-card');

    const capa = document.createElement('img');
    capa.src = anime.capa;
    capa.alt = anime.titulo;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const titulo = document.createElement('h3');
    titulo.textContent = anime.titulo;

    const nota = document.createElement('span');
    nota.textContent = `⭐ ${anime.nota}`;

    cardInfo.append(titulo, nota);
    card.append(capa, cardInfo);
    
    grid.prepend(card);

    formulario.reset();
    formulario.hidden = true;
    
    grid.scrollTo({ left: 0, behavior: 'smooth' });
});
