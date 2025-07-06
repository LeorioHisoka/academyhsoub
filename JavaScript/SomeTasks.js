function reverseString(Txt = "") {
  return Txt.split("").reverse().join("");
}
console.log(reverseString("amir"));

function isPrime(NumP) {
  if (NumP <= 1) return false;
  if (NumP % 2 == 0) return false;
  if (NumP === 3) {
    return true;
  }
  for (let index = 2; index < NumP / 2; index++) {
    if (NumP / index == 0) {
      return false;
    }
  }
  return NumP;
}
console.log(
  isPrime([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ])
);

function sumOdd(oddSum) {
  let total = 0;
  for (let numr = 0; numr < oddSum.length; numr++) {
    if (oddSum[numr] % 2 !== 0) {
      total += oddSum[numr];
    }
  }
  return total;
}
console.log(sumOdd([3, 8, 9, 2, 10, 7, 5, 17, 12]));

function repeatText(Txt, Times) {
  const result = Array(Times).fill(Txt).join(" ");
  console.log(result);
}
repeatText("Hi", 3);

function evenOrOddSum(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let numOdd = 0; numOdd < arr.length; numOdd++) {
    if (arr[numOdd] % 2 !== 0) oddSum += arr[numOdd];
    else evenSum += arr[numOdd];
  }

  console.log("EvenSum : " + evenSum);
  console.log("OddSum : " + oddSum);
}
evenOrOddSum([2, 5, 6, 4, 8, 3, 5]);
