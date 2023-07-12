// Дан массив случайных чисел. Необходимо найти в нем два числа которые в сумме дадут 16.
// Массив чисел составить по собственному усмотрению.
function findTwoSum(arr, target) {
	const numsMap = new Map();

	for (let i = 0; i < arr.length; i++) {
		let summand = target - arr[i];

		if (numsMap.has(summand)) {
			return [summand, arr[i]];
		}

		numsMap.set(arr[i], i);
	}

	return false;
}

const target = 16;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [12, 4, 5, 9, 11];
const arr3 = [1, 15, 3, 13, 11, 5];
const arr4 = [1, 14];

console.log(findTwoSum(arr, target));
console.log(findTwoSum(arr2, target));
console.log(findTwoSum(arr3, target));
console.log(findTwoSum(arr4, target));
