const validation = () => {

    const checkConditionsValidation = (e) => {
        if (e.target.matches('.calc-block input ')) {
            e.target.value = e.target.value.replace(/\D+/, "");

        } else if (e.target.matches('input.form-name')) {
            e.target.value = e.target.value.replace(/[^а-яА-я\s\-]/, "");
        }
        else if (e.target.matches('input.mess')) {
            e.target.value = e.target.value.replace(/[^а-яА-я\s,.!?;:()]/, ""); //тут расширил 
            //перечень допустимых символов, согласно заданию к уроку 27
        }
        else if (e.target.matches('.form-phone')) {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/, "");
        }
        else if (e.target.matches('.form-email')) {
            e.target.value = e.target.value.replace(/[^\w\-\.\_\~\!\*\'\@]/, "");
        }
    }

    const correctValidationData = (e) => {
        //Несколько идущих подряд пробелов или дефисов должны заменяться на один.  
        //Пробелы и дефисы в начале и конце значения должны удаляться.
        if (e.target.matches('input')) {
            e.target.value = e.target.value.replace((/\s+/g), ' ').replace((/\-+/g), '-').trim().replace(/^\-/g, '').replace(/\-$/g, '').trim()
        }

        //Для поля type=text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему.
        if (e.target.classList.contains('form-name')) {
            e.target.value = e.target.value.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
        }

        // e.target.classList.add('success')

    }

    document.body.addEventListener('input', (e) => {
        checkConditionsValidation(e);
    })

    document.querySelector('.main-form-input').addEventListener("blur", (e) => {
        correctValidationData(e);
    }, true)

    document.querySelector('.popup-content').addEventListener("blur", (e) => {
        correctValidationData(e);
    }, true)

    document.querySelector('.footer-form-input').addEventListener("blur", (e) => {
        correctValidationData(e);
    }, true)

    document.querySelector('.form-email').setAttribute('required', 'required')



}

export { validation };