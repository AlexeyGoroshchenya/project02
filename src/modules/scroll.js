const scroll = () => {

    const nextSlideLink = document.querySelector('main>a')

    const scrollTo = (element) => {
        const id = element.getAttribute('href');
        const link = document.querySelector(id);

        link.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    document.querySelector('menu').addEventListener('click', (e) => {
        if (e.target.matches('menu>ul>li>a')) {
            e.preventDefault();
            scrollTo(e.target);
        }
    })


    nextSlideLink.addEventListener('click', (event) => {
        event.preventDefault();
        const nextSlide = document.querySelector('.service');
        nextSlide.scrollIntoView({ block: "start", behavior: "smooth" });

    })




}

export default scroll;

