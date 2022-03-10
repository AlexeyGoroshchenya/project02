import { animate } from "./helpers";

const modal = () => {

    const modal = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');

    const openModal = function () {
        if (window.screen.width > 768) {
            let count = parseInt(modal.style.transform.slice(11));

            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {

                    count = count - (count * progress)
                    modal.style.transform = 'translateX(' + (count) + '%)';
                }
            });

        } else {
            modal.style.transform = 'translateX(0%)';
        }
    }


    const closeModal = function () {

        if (window.screen.width > 768) {

            let count = parseInt(modal.style.transform.slice(11));

            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    count = (count + progress)

                    modal.style.transform = 'translateX(' + (count * 100) + '%)';
                }
            });
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

        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                closeModal()
            }
        })



    }

    if (modal.classList.contains('close-modal')) {
        closeModal()
        modal.classList.remove('close-modal')
    }

    init()

}

export { modal };
