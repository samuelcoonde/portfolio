// Animação para o ícone das linguagens de programação
// Pegando todos os ícones da classe icones
const icones = document.querySelectorAll('.icones');

icones.forEach(img => {
    img.addEventListener('mouseenter', () => {
        //aumenta o ícone quando o mouse fica em cima
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Animação para as opções do menu de navegação
document.querySelectorAll('#menu_nav li').forEach(li => {
    li.addEventListener('mouseenter', () => {
        li.style.transform = 'scale(1.1)';
    });

    li.addEventListener('mouseleave', () => {
        li.style.transform = 'scale(1)';
    })
})