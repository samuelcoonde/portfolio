document.querySelectorAll('.icones').forEach(img => {
    // Evento para quando o mouse ficar em cima do ícone
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.2)'; // Mundando o tamanho da imagem quando passa o mouse por cima

        let textoExibicao = img.getAttribute('title'); // Pegando o título da imagem para exibição

        // Criando um ToolTip
        let tooltip = document.createElement('div');
        tooltip.textContent  = textoExibicao; // Colocando texto no tooltip
        tooltip.classList.add('tooltip-temp');

        tooltip.style.color = 'white';
        tooltip.style.padding = '5px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '12px';

        document.body.appendChild(tooltip);
    });

    // Evento para quando o mouse sair de cima do ícone
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // volta ao normal
        
        // Remove o tooltip
        document.querySelectorAll('.tooltip-temp').forEach(t => t.remove());
    });
});

document.querySelectorAll('#menu_nav li').forEach(li => {
    li.addEventListener('mouseenter', () => {
        li.style.transform = 'scale(1.1)';
    });

    li.addEventListener('mouseleave', () => {
        li.style.transform = 'scale(1)';
    })
})