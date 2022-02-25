const modal = () => {

    const modal = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupCloseBtn = modal.querySelector('.popup-close');

    const openModal = function () {
        if (window.screen.width > 768) {
            let count = parseInt(modal.style.transform.slice(11)) + 5;

            let idInterval = requestAnimationFrame(openModal);

            if (count <= 0) {

                modal.style.transform = 'translateX(' + count + '%)';

            } else { cancelAnimationFrame(idInterval) }
        } else {
            modal.style.transform = 'translateX(0%)';
        }
    }

    //понимаю, что тут можно было бы и открытие и закрытие сделать 
    //одной функцией с передачей аргументом значения, с которым будет 
    //count сравниваться, но допилить до рабочего состояния такой вариант
    //тупо нет времени
    const closeModal = function () {

        if (window.screen.width > 768) {
            let count = parseInt(modal.style.transform.slice(11)) + 5

            let idInterval = requestAnimationFrame(closeModal);

            if (count <= 100) {
                modal.style.transform = 'translateX(' + count + '%)';
            } else {
                cancelAnimationFrame(idInterval)
                modal.style.transform = 'translateX(-100%)'
            }
        } else {
            modal.style.transform = 'translateX(-100%)';

        }
    }

    const init = () => {
        modal.style.transform = 'translateX(-100%)'
        modal.style.display = 'block';

        popupBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                openModal()
            })
        })

        popupCloseBtn.addEventListener('click', () => {
            closeModal()
        })
    }

    init()

}

export default modal;
//Использовать JS анимацию. Использовать нативный JavaScript. Использование
// сторонних библиотек запрещено!
// Необходимо манипулировать элементами посредством JS. СSS анимация не подходит
// для анимирования модального окна.
// 3) Если пользователь заходит на сайт с устройства, у которого ширина экрана
// меньше 768px (мобильного устройства) - анимация отключается