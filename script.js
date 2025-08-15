// Espera o conteúdo da página carregar
document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    hamburgerBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });


    // --- LÓGICA DE ROLAGEM SUAVE (SMOOTH SCROLL) ---
    const scrollLinks = document.querySelectorAll('.nav-links a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                if (hamburgerBtn.offsetParent !== null) {
                    navLinks.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                }
            }
        });
    });

    // --- LÓGICA DA BARRA DE BUSCA E FILTRO ---
    const searchInput = document.getElementById('search-input');
    const componentes = document.querySelectorAll('.componente');

    searchInput.addEventListener('keyup', function (event) {
        const searchTerm = event.target.value.toLowerCase().trim();

        componentes.forEach(componente => {
            const tituloComponente = componente.querySelector('h2').textContent.toLowerCase();

            if (tituloComponente.includes(searchTerm)) {
                componente.style.display = 'block';
            } else {
                componente.style.display = 'none';
            }
        });
    });
});