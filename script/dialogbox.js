// Selecionar todos os elementos HTML relevantes com a classe .dialog-text
const dialogTextElements = document.querySelectorAll('.dialog-text');

// Adicionar um evento de clique a cada elemento de texto clicável
dialogTextElements.forEach(dialogText => {
    dialogText.addEventListener('click', () => {
        // Encontrar a caixa de diálogo correspondente dentro do elemento pai
        const dialogBox = dialogText.parentElement.querySelector('.dialog-box');
        
        // Alternar a visibilidade da caixa de diálogo ao clicar
        if (dialogBox.style.display === 'block') {
            dialogBox.style.display = 'none';
        } else {
            dialogBox.style.display = 'block';
        }
    });
});


//CODIGO TESTE, deixa ai só por garantia

// Selecionar os elementos HTML relevantes
//const dialogText = document.querySelector('.dialog-text');
//const dialogBox = document.querySelector('.dialog-box');

// Adicionar um evento de clique ao elemento de texto clicável
//dialogText.addEventListener('click', () => {
    // Alternar a visibilidade da caixa de diálogo ao clicar
//    if (dialogBox.style.display === 'block') {
//        dialogBox.style.display = 'none';
//    } else {
//        dialogBox.style.display = 'block';
//    }
//});