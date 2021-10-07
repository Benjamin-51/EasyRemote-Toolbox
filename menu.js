const menuBlock = document.querySelector(".menu-block");
const menuRuban = document.querySelector(".menu-ruban");

menuBlock.addEventListener('click', () => {
    menuRuban.classList.toggle('collapsed');
    }
);

window.addEventListener('load', () => {
    menuRuban.classList.toggle('collapsed');
    }
);