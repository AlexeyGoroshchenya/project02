const sliderDots = () => {

    const slides = document.querySelectorAll('.portfolio-item');
    const slidesDots = document.querySelector('.portfolio-dots')

    let numberOfDots = slides.length;

    const createDots = () => {
        const dot = document.createElement("li");
        dot.textContent = "";
        dot.classList.add("dot");
        slidesDots.append(dot)

    }

    const checkNumberOfDots = () => {

        for (let i = 0; i < numberOfDots; i++) {
            createDots()
        }

    }

    checkNumberOfDots();



}

export default sliderDots;