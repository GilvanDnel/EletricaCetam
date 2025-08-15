// --- Script para Rolagem Suave (Smooth Scroll) ---

// Este evento espera que todo o conteúdo HTML da página seja carregado antes de executar o script.
// É uma boa prática para garantir que todos os elementos que o script precisa manipular já existam.
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona TODOS os links <a> que estão dentro do <nav>.
    // O querySelectorAll retorna uma lista (NodeList) de todos os elementos encontrados.
    const navLinks = document.querySelectorAll('nav a');

    // O método forEach() executa uma função para cada item da lista de links que selecionamos.
    // 'link' é a variável que representa cada link da navegação a cada iteração do loop.
    navLinks.forEach(link => {

        // Adiciona um "ouvinte de eventos" de clique a cada link.
        // Quando um link for clicado, a função a seguir será executada.
        link.addEventListener('click', function(e) {

            // e.preventDefault() impede o comportamento padrão do link.
            // O padrão seria "pular" instantaneamente para a âncora (#). Nós não queremos isso.
            e.preventDefault();

            // Pega o valor do atributo 'href' do link que foi clicado (ex: "#fusivel").
            const targetId = this.getAttribute('href');

            // Seleciona o elemento no documento cujo 'id' é igual ao 'href' do link.
            const targetElement = document.querySelector(targetId);

            // Se o elemento de destino existir na página...
            if (targetElement) {
                // ...a função scrollIntoView() é chamada nesse elemento.
                // O objeto { behavior: 'smooth' } diz ao navegador para rolar suavemente
                // até o elemento, em vez de pular diretamente para ele.
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});