let money = prompt('Сколько денег ты готов потратить на путешествие?');
if (money <= 5000) {
    alert('Поработай еще');
} else if (money <= 20000) {
    alert('Ты сможешь путешествовать по Бурятии');
} else if (money <= 35000) {
    alert('В Сочи путевка тебе обеспечена');
} else if (money <= 60000) {
    alert('Позволь себе Турцию и Египет');
} else if (money > 60000) {
    alert('Тут можно и помечтать о разных направлениях');
} else {
    alert('Введи число');
}

let choice = prompt('Поедешь в ближайщие 3 месяца? Да/Нет');

(choice == 'Да' || choice == 'да') ?
    alert('Ты счастливчик!') : alert('Не расстраивайся!');
