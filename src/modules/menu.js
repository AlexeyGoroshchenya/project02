const menu = () => {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    //2) В функции toggleMenu() много обработчиков событий. Используя делегирование событий, сделать обработчики для:
    //Крестика закрытия меню и пунктов меню.
    //На кнопку меню.
    //3) У вас должно быть максимум 2 обработчика события в функции toggleMenu()

    menuBtn.addEventListener('click', handleMenu)

    menu.addEventListener('click', (e) => {

        if (e.target.matches('a') || e.target.classList.contains('.close-btn')) {
            e.preventDefault();
            handleMenu()
        }
    });


    //ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ
    //Написать 1 обработчик для всех событий внутри функции toggleMenu()
    //2) Реализовать следующий функционал: если клик произошел мимо меню, оно закрывается

    /*
    document.body.addEventListener('click', (e) => {

        let linkTarget = e.target.matches('ul>li>a') || e.target.classList.contains('close-btn') || e.target.closest('.menu')

        if (linkTarget) {
            e.preventDefault();
            handleMenu()
        } else if (!e.target.closest('.active-menu') && menu.classList.contains('active-menu')) {
            menu.classList.remove('active-menu');
        }
    });
    */


}

export default menu;