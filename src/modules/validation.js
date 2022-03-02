const validation = () => {

    const conditionsValidation = (e) => {
        if (e.target.matches('.calc-block input ')) {
            e.target.value = e.target.value.replace(/\D+/, "");

        } else if (e.target.matches('input.form-name') || e.target.matches('input.mess')) {
            e.target.value = e.target.value.replace(/[^а-яА-я\s\-]/, "");
        }
        else if (e.target.matches('.form-phone')) {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/, "");
        }
        else if (e.target.matches('.form-email')) {
            e.target.value = e.target.value.replace(/[^\w\-\.\_\~\!\*\'\@]/, "");
        }
    }

    document.body.addEventListener('input', (e) => {

        document.getElementById('form2-name').classList.add('form-name');
        conditionsValidation(e);

    })

}

export default validation;