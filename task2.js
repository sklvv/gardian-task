// Необходимо найти ошибку в коде и получить в консоль 5, 7, 9, 11, 13.
var arr = [];
let k = 5;
for (let index = 0; index < 5; index++) {
	// arr.push(() => console.log(k + index));
	arr.push(k + index);
	k++;
}
arr.forEach(element => {
	// element.call();
	console.log(element);
});
