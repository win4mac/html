var argumentArray = [36325, 9824, 777];
const styleResult_1 = document.querySelector(".result-1");
const styleResult_2 = document.querySelector(".result-2");
const styleArray = document.querySelector(".array");

function add(arg_1, arg_2) {
  var result = arg_1 + arg_2;
  return result;
}

function multiply(arg_3, arg_4) {
  var result = arg_3 * arg_4;
  return result;
}
const argument1 = argumentArray[0];
const argument2 = argumentArray[1];
const argument3 = argumentArray[2];

function mathCalc(button) {
  styleResult_1.textContent =
    "Результат умножения: " + multiply(argument1, argument2);
  styleResult_2.textContent =
    "Результат сложения: " + add(multiply(argument1, argument2), argument3);
}

var arrayNumb1 = [1, 2, 3];
var arrayNumb2 = [4, 5, 6];
var arrayNumb3 = [1, 2, 3, 4];

function areArraysSame(ar1, ar2) {
  if (ar1 === 1) {
    ar1 = arrayNumb1;
  } else {
    if (ar1 === 2) {
      ar1 = arrayNumb2;
    } else {
      ar1 = arrayNumb3;
    }
  }

  if (ar2 === 1) {
    ar2 = arrayNumb1;
  } else {
    if (ar2 === 2) {
      ar2 = arrayNumb2;
    } else {
      ar2 = arrayNumb3;
    }
  }

  if (ar1.length === ar2.length) {
    var i = 0;
    while (i < ar1.length) {
      if (ar1[i] === ar2[i]) {
      } else {
        return (
          "Длина массивов " +
          ar1 +
          " и " +
          ar2 +
          " одинаковая, но элементы НЕ равны"
        );
      }
      i++;
    }
    return (
      "Длина массивов одинаковая и все элементы массивов " +
      ar1 +
      " и " +
      ar2 +
      " равны"
    );
  } else {
    return "Длина массивов " + ar1 + " и " + ar2 + " не одинаковые";
  }
}

function arraySame(button) {
  var r = Number(prompt("Введите номер массива (от 1  до 3) для сравнения:"));
  var s = Number(prompt("Введите номер массива (от 1  до 3) для сравнения:"));
  styleArray.textContent = areArraysSame(r, s);
}
