

const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.background')


botao.addEventListener('click',  () => { 

    botao.addEventListener('click', () => {
        menuLateral.classList.add('ativo');
        botao.classList.add('ativo');
        conteudo.classList.add('ativo');
        background.classList.add('ativo');
        
      });
      
    

})