const slider = (dotClasses) => {

    let {
        dotClass,
        portfolioItemClass,
        portfolioContentClass,
        portfolioBtnClass,
    } = dotClasses;

    for (let key in dotClasses) {
        if (!document.querySelector((`.${dotClasses[key]}`))) {
            return
        }
    }

    const sliderBlock = document.querySelector(('.' + portfolioContentClass));
    const slides = document.querySelectorAll(('.' + portfolioItemClass));
    const dots = document.querySelectorAll(('.' + dotClass));

    let currentSlide = 0;
    let interval;
    let timeInterval = 2000;

    const pervSlide = (elems, index, slideStr = 'slide-active') => {
        elems[index].classList.remove(slideStr);
    }

    const pervDot = (elems, index, slideStr = 'dot-active') => {
        elems[index].classList.remove(slideStr);
    }

    const nextSlide = (elems, index, slideStr = 'slide-active') => {
        elems[index].classList.add(slideStr);
    }

    const nextDot = (elems, index, slideStr = 'dot-active') => {
        elems[index].classList.add(slideStr);
    }

    const autoSlide = () => {
        pervSlide(slides, currentSlide, `${portfolioItemClass}-active`);
        pervDot(dots, currentSlide, `${dotClass}-active`);

        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, `${portfolioItemClass}-active`);
        nextDot(dots, currentSlide, `${dotClass}-active`);
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches(('.' + dotClass + ', .' + portfolioBtnClass))) return;

        pervSlide(slides, currentSlide, `${portfolioItemClass}-active`);
        pervDot(dots, currentSlide, `${dotClass}-active`);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains(dotClass)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, `${portfolioItemClass}-active`);
        nextDot(dots, currentSlide, `${dotClass}-active`);
    })

    sliderBlock.addEventListener('mouseenter', (e) => {

        if (e.target.matches(('.' + dotClass + ', .' + portfolioBtnClass))) stopSlide(timeInterval);

    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {

        if (e.target.matches(('.' + dotClass + ', .' + portfolioBtnClass))) startSlide(timeInterval);

    }, true)

    startSlide(timeInterval)

}

export default slider;