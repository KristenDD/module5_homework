// Задание 1

let num = +prompt();
if (typeof num == "number" && isNaN(num)) {
  console.log("Упс, кажется вы ошиблись");
} else if (num % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

// Задание 2

let x;
x = 515 > 5;
if (typeof x == "number") {
  console.log("x- число");
} else if (typeof x == "string") {
  console.log("х- строка");
} else if (typeof x == "boolean") {
  console.log("х- логический тип");
} else {
  console.log("Тип x не определён");
}

// Задание 3

let str = "Hello";
console.log(`${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`);

// Задание 4

let number = Math.random() * (101 - 1) + 1;
console.log(Math.trunc(num));

// Задание 5

let arr1 = ["one", "two", "tree", "four", "five"];
console.log(arr.length);
arr.forEach(function (item) {
  console.log(item);
});

// Задание 6

let arr2 = [1, 5, 43, 63, 2, 14, 43, 1];
let dubles = arr.filter((number, index, numbers) => {
  if (numbers.indexOf(number) !== index) {
    console.log(true);
  } else {
    console.log(false);
  }
});

// Задача 7

let arr3 = [1, 8, 43, 63, 2, 14, "boby", null];
for (let item of arr) {
  if (item % 2 == 0) {
    console.log("четный элемент");
  } else {
    console.log("нечетный элемент");
  }
}

// Задача 8

let array = new Map([
  ["bmw", "Germany"],
  ["honda", "Japan"],
  ["tesla", "USA"],
  ["lada", "Russia"]
]);

for (let [key, value] of array) {
  console.log(`ключ- ${key}  значение- ${value}`);
}
