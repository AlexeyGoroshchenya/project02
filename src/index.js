import timer from './modules/timer';
import menu from './modules/menu';
import { modal } from './modules/modal';
import scroll from './modules/scroll';
import { validation } from './modules/validation';
import tabs from './modules/tabs';
import sliderDots from './modules/sliderDots';
import slider from './modules/slider';
import calc from './modules/calc';
import { swiper } from './modules/swiper';
import sendForm from './modules/sendForm';


const sliderClasses = {
    dotClass: 'dot',
    portfolioItemClass: 'portfolio-item',
    portfolioContentClass: 'portfolio-content',
    portfolioBtnClass: 'portfolio-btn',
};

timer('24 march 2022');
menu();
modal();
scroll();
validation();
tabs();
sliderDots();
slider(sliderClasses);
calc(100);
swiper();
sendForm({
    formId: [
        'form1',
        'form2',
        'form3',
    ],
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ],
});