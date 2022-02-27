const validation = () => {

    const calcInput = document.querySelectorAll('.calc-block input ');

    const textInputs = [
        document.getElementById('form1-name'),
        document.getElementById('form2-name'),
        document.getElementById('form3-name'),
        document.getElementById('form2-message'),
    ]
    const emailInputs = [
        document.getElementById('form1-email'),
        document.getElementById('form2-email'),
        document.getElementById('form3-email'),
    ]
    const telInputs = [
        document.getElementById('form1-phone'),
        document.getElementById('form2-phone'),
        document.getElementById('form3-phone'),
    ]


    calcInput.forEach((element) => {
        element.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "");
        })
    })

    textInputs.forEach((element) => {
        element.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-я\s\-]/, "");
        })
    })

    telInputs.forEach((element) => {
        element.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/, "");
        })
    })

    emailInputs.forEach((element) => {
        element.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w\-\.\_\~\!\*\'\@]/, "");
        })
    })

}

export default validation;