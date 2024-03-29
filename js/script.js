function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burget-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    
    function toggleMenu() {
        menu.toggleClass('burger-menu__active');
      
        if (menu.hasClass('burger-menu__active')) {
                const block = $('body').scrollTop();
                $(window).on('scroll', () => $('body').scrollTop(block));
            } else {
                $(window).off('scroll');
            }
        }

    // function toggleMenu() {
    //     menu.toggleClass('burger-menu__active');

    //     if (menu.hasClass('burger-menu__active')) {
    //         $('body').css('overflow', 'hidden');
    //     } else {
    //         $('body').css('overflow', 'visible')
    //     }
    // }
}

burgerMenu('.burger-menu');