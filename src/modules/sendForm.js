
const sendForm = ({ formId, someElem = [] }) => {


    formId.forEach((formBlock) => {

        const form = document.getElementById(formBlock)

        const statusBlock = document.createElement('div');
        const errorText = 'что-то пошло не так...';
        const loadText = 'скоро все будет...';
        const successText = 'С вами свяжется наш менеджер';

        const validate = (list) => {

            let nameInput = true
            let messInput = true
            let phoneInput = true

            list.forEach(input => {

                //В поля name="user_name" разрешить ввод только кириллицы и пробелов
                if (input.matches('input.form-name')) {
                    if (input.value.match(/[^а-яА-я\s]/)) {
                        //console.log('Проверьте данные');
                        nameInput = false
                    }
                }
                //В поля name="user_message" разрешить только кириллицу, пробелы, цифры и знаки препинания
                if (input.classList.contains('mess')) {
                    if (input.value.match(/[^а-яА-я\s,.!?;:()]/)) {
                        //console.log('Проверьте данные');
                        messInput = false
                    }
                }
                //В поля name="user_phone" разрешить ввод только цифр, знака “+”, круглых скобок и дефис
                if (input.classList.contains('form-phone')) {
                    if (input.value.match(/[^0-9\(\)\-\+]/)) {
                        //console.log('Проверьте данные');
                        phoneInput = false
                    }
                }

            })
            let success = nameInput && messInput && phoneInput

            return success
        }



        const sendData = (data) => {
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "aplication/json"
                }

            }).then(res => res.json())
        }

        const submitData = () => {
            const formElements = form.querySelectorAll('input')
            const formData = new FormData(form)
            const formBody = {}

            statusBlock.textContent = loadText
            form.append(statusBlock)
            if (formBlock === 'form3') {
                statusBlock.style.color = 'white'
            }

            formData.forEach((val, key) => {
                formBody[key] = val;
            })

            someElem.forEach((elem) => {
                const element = document.getElementById(elem.id)

                if (element.textContent > 0) {
                    if (elem.type === 'block') {
                        formBody[elem.id] = element.textContent
                    } else if (elem.type === 'input') {
                        formBody[elem.id] = element.value
                    }
                }
            })

            if (validate(formElements)) {
                sendData(formBody)
                    .then(data => {
                        statusBlock.textContent = successText
                        setTimeout(() => {
                            statusBlock.remove()// это не по тз, но некрасиво когда остается блок после отправки
                        }, 5000)
                        formElements.forEach(input => {
                            input.value = ''
                        })
                    })

                    .catch(error => {

                        console.log(error);
                        statusBlock.textContent = errorText
                    })
            } else {
                console.log('данные не валидны');
            }

        }

        try {
            if (!form) {
                throw new Error('верните форму')
            }


            form.addEventListener('submit', (e) => {
                e.preventDefault();
                submitData()
            })
        } catch (error) {
            console.log(error.message);
        }


    })



}

export default sendForm;