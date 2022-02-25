const scroll = () => {

    const links = document.querySelectorAll('menu>ul>li>a');
    const nextSlideLink = document.querySelector('main>a')


    links.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            const id = element.getAttribute('href');
            const link = document.querySelector(id);

            link.scrollIntoView({ block: "start", behavior: "smooth" });
        })
    })

    nextSlideLink.addEventListener('click', (event) => {
        event.preventDefault();

        const nextSlide = document.querySelector('.service');
        nextSlide.scrollIntoView({ block: "start", behavior: "smooth" });

    })




}

export default scroll;

