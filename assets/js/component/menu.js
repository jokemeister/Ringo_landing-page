const menu = () => {
    const btnMenuOpen = document.querySelector('.js--menu-btn');
    const blockMenu = document.querySelector('.js--header-menu-mob');
    btnMenuOpen.addEventListener('click', () => {
        btnMenuOpen.classList.toggle('is-active');
        blockMenu.classList.toggle('is-active');
    })
}

export default menu;