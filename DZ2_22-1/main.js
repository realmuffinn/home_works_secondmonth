// 2 Задание:
for(var i = 20; i >= 0; i--){
    console.log(i)
}

// 3 Задание "Светофор". Switch Case:
var color = prompt("Введите цвет светофора!")

switch (color) {
    case "красный":
        console.log("STOP!")
        break;
    case "желтый":
        console.log("WAIT!")
        break;
    case "зеленый":
        console.log("GO!")
        break
    default:
        console.log("TRY AGAIN")
}
