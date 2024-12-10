import { el, list, mount } from 'redom';
import Inputmask from "inputmask";
import valid from 'card-validator';
import * as EmailValidator from 'email-validator';

// Класс содержит в себе создании иконки банка
class icon {
    constructor() {
        this.el = el('div', { class: 'pay__icon-card pay__logo' });
    };
    update(date) {
        if (date === 'mir') {
            this.el = el('div', { class: 'pay__icon-card pay__mir-icon' });
        } else {
            if (date === 'visa') {
                this.el = el('div', { class: 'pay__icon-card pay__visa-icon' });
            } else {
                if (date === 'maestro') {
                    this.el = el('div', { class: 'pay__icon-card pay__maestro-icon' });
                } else {
                    if (date === 'unionpay') {
                        this.el = el('div', { class: 'pay__icon-card pay__unionpay-icon' });
                    } else {
                        this.el = el('div', { class: 'pay__icon-card pay__logo' });
                    };
                };
            };
        };
    };
};

// временная переменная для хранения флагов кнопки оплаты;
const trueDate: string[] = [];

var numberCard = el('input', { class: 'pay__input pay__number' }, { id: 'card' }, { type: 'text' }, { placeholder: '0000 0000 0000 0000' }, { required: true });
const card = new Inputmask('[9999 9999 9999 9999]');
card.mask(numberCard);

const divIcon = el('div', { class: 'pay__icon' });
const IconList = list(divIcon, icon);
IconList.update(['']);

numberCard.addEventListener('blur', () => {
    var numberValidation = valid.number(numberCard.value);

    if (numberValidation.card) {
        IconList.update([numberValidation.card.type]);
    };

    setTimeout(() => {
        if (numberValidation.card?.type === 'mir' || numberValidation.card?.type === 'visa' || numberValidation.card?.type === 'maestro' || numberValidation.card?.type === 'unionpay') {
            numberCard.style = 'border-color: #00db00';
            numberCard.style.color = '#00db00'
            trueDate.push('true');
            console.log(`True:${trueDate}`);
        } else {
            if (numberCard.value.length > 1) {
                numberCard.style = 'border-color: red';
                numberCard.style.color = 'red';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            } else {
                numberCard.style = 'border-color: #000';
                numberCard.style.color = '#000';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            }
        };

        if (trueDate.length == 6) {
            buttonPay.disabled = false;
            buttonPay.classList.add('pay__btn');
        } else {
            buttonPay.disabled = true;
            buttonPay.classList.remove('pay__btn');
        };
    }, 500);
});


const monthInput = el('input', { class: 'pay__input pay__month' }, { id: 'month' }, { type: 'number' }, { placeholder: 'mm' }, { min: '01' }, { max: '12' });
const month = new Inputmask('[99]');
month.mask(monthInput);
const yearInput = el('input', { class: 'pay__input pay__year' }, { id: 'year' }, { type: 'number' }, { placeholder: 'yy' });
const dateSpan = el('span', { class: 'pay__dateSpane' });
dateSpan.innerHTML = '/'
const dateDiv = el('div', { class: 'pay__date' }, monthInput, dateSpan, yearInput);

monthInput.addEventListener('input', () => {
    var numberValidation = valid.expirationMonth(monthInput.value);

    setTimeout(() => {
        monthInput.blur();
        yearInput.focus();
        if (numberValidation.isValid) {
            monthInput.style = 'border-color: #00db00';
            monthInput.style.color = '#00db00';
            trueDate.push('true');
            console.log(`True:${trueDate}`);
        } else {
            if (monthInput.value.length > 1) {
                monthInput.style = 'border-color: red';
                monthInput.style.color = 'red';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            } else {
                monthInput.style = 'border-color: #000';
                monthInput.style.color = '#000';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            };
        };

        if (trueDate.length == 6) {
            buttonPay.disabled = false;
            buttonPay.classList.add('pay__btn');
        } else {
            buttonPay.disabled = true;
            buttonPay.classList.remove('pay__btn');
        };
    }, 500);

});

yearInput.addEventListener('blur', () => {
    var numberValidation = valid.expirationYear(yearInput.value);

    setTimeout(() => {

        if (numberValidation.isValid) {
            yearInput.style = 'border-color: #00db00';
            yearInput.style.color = '#00db00';
            trueDate.push('true');
            console.log(`True:${trueDate}`);
        } else {
            if (yearInput.value.length > 1) {
                yearInput.style = 'border-color: red';
                yearInput.style.color = 'red';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            } else {
                yearInput.style = 'border-color: #000';
                yearInput.style.color = '#000';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            };
        };

        if (trueDate.length == 6) {
            buttonPay.disabled = false;
            buttonPay.classList.add('pay__btn');
        } else {
            buttonPay.disabled = true;
            buttonPay.classList.remove('pay__btn');
        };
    }, 500);
});

const pinInput = el('input', { class: 'pay__input pay__pin' }, { id: 'pin' }, { type: 'text' }, { placeholder: '###' });
const pin = new Inputmask('[999]');
pin.mask(pinInput);

pinInput.addEventListener('blur', () => {
    var numberValidation = valid.cvv(pinInput.value);

    setTimeout(() => {
        if (numberValidation.isValid) {
            pinInput.style = 'border-color: #00db00';
            pinInput.style.color = '#00db00';
            trueDate.push('true');
            console.log(`True:${trueDate}`);
        } else {
            if (pinInput.value.length > 1) {
                pinInput.style = 'border-color: red';
                pinInput.style.color = 'red';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            } else {
                pinInput.style = 'border-color: #000';
                pinInput.style.color = '#000';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            };
        };

        if (trueDate.length == 6) {
            buttonPay.disabled = false;
            buttonPay.classList.add('pay__btn');
        } else {
            buttonPay.disabled = true;
            buttonPay.classList.remove('pay__btn');
        };
    }, 500);
});

const divDown = el('div', { class: 'pay__down' }, dateDiv, pinInput);
const divMain = el('div', { class: 'pay__main' }, IconList, numberCard, divDown)

const emailInput = el('input', { class: 'pay__input pay__email' }, { type: "text" }, { placeholder: 'mail@mail.com' });
const email = new Inputmask("*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]");
email.mask(emailInput);

const buttonPay = el('button', { class: 'pay__btn-disable' }, { type: 'submit' });
buttonPay.innerHTML = 'Оплатить';
buttonPay.disabled = true;

emailInput.addEventListener('blur', () => {

    setTimeout(() => {
        if (EmailValidator.validate(emailInput.value)) {
            emailInput.style = 'border-color: #00db00';
            emailInput.style.color = '#00db00';
            trueDate.push('true');
            console.log(`True:${trueDate}`);
        } else {
            if (emailInput.value.length > 1) {
                emailInput.style = 'border-color: red';
                emailInput.style.color = 'red';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            } else {
                emailInput.style = 'border-color: #000';
                emailInput.style.color = '#000';
                trueDate.pop();
                console.log(`False:${trueDate}`);
            };
        };

        if (trueDate.length == 6) {
            buttonPay.disabled = false;
            buttonPay.classList.add('pay__btn');
        } else {
            buttonPay.disabled = true;
            buttonPay.classList.remove('pay__btn');
        };
    }, 500);
});

console.log(trueDate);

const formPay = el('form', { class: 'pay__form' }, divMain, emailInput, buttonPay);
const div = el('div', { class: 'pay__container' }, formPay);
mount(document.body, div);