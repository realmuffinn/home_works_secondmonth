//1 задание:
const minNum = (num1, num2) => (num1 < num2) ? alert(num1) : alert(num2)
minNum(10, 7)
//2 задание:
const userWord = prompt('Введите что либо: ').trim()
const lenString = (word) => alert('Длина строки: ' + word.length)
lenString(userWord)

//Калькулятор:
function func() {
    var result;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
}
func()