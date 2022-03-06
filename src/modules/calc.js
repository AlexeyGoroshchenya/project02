import { animate } from "./helpers";

const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total')


    const showTotal = (value, animatedValue) => {

        let delta = Math.abs(value - animatedValue);
        console.log('delta: ' + delta);
        console.log('value: ' + value);
        console.log('animatedValue: ' + animatedValue);

        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                if (value >= animatedValue) {
                    total.textContent = animatedValue + Math.floor(delta * progress);
                } else {
                    total.textContent = animatedValue - Math.floor(delta * progress);
                }

            }
        });

    }

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;
        let animatedValue = +total.textContent;


        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        } else { calcDayValue = 1 }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        }

        showTotal(totalValue, animatedValue);

    }

    calcBlock.addEventListener('input', (e) => {

        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    })

}

export default calc;