// work 1

for(let i = 1; i < 100; i++){
    console.log(i);
};

// work 2

let n = 1;
while (n < 50) {
    console.log(n);
    n +=1;
};

// work 3

const namesArray = ['nika', 'vaxo', 'givi', 'saba', 'tazo'];

namesArray.shift();
console.log(namesArray);

namesArray.unshift('nutsa');
console.log(namesArray);

namesArray.pop();
console.log(namesArray);

namesArray.push('maka', 'shorena', 'mariami');
console.log(namesArray);

// work 4

const emptyArray =  [];

 for (let x = 0; x < 10000; x++) {
       emptyArray.push(x*x);
 };
 
 console.log(emptyArray);


const emptyArray2 = []; 
let k=0;
 
 while (k<10000) {
  let arrayNumber=k*k;
  emptyArray2.push(arrayNumber)
  k +=1;
 };
 
 console.log(emptyArray2);


 //  work 5

 const sumArray = [10, 24, 2324, 671, 762];
 
 let sum = 0;

 for (let s = 0; s < sumArray.length; s++) {
    sum = sum + sumArray[s];
 }
 
 console.log(sum);


//  work 6

for (let number = 10; number < 11; number++) {
    if (number ) {
        console.log(false)
    } else {
        console.log(true)
    }
};

// work 7

let carArray = ["BMW", "MerCedES", "AUDi", "Alfa-romeo", "PorsCHE"];

for (let y = 0; y < carArray.length; y++) {
    const brands = carArray[y];
    if (brands.length < 6) {
        console.log(brands.toUpperCase())
    } else {
        console.log(`${brands} has more than 6 letter.`)
    } ;
};



// work 8

const multiNumberArray = [2,5, 8, 9, 10, 12, 13, 14, 17, 21, 24, 32, 44, 54, 76, 88];

function sortEvenNumbers(num) {
    for (let k = 2; num > k; k++) {
        if (num % k === 0) {
            return true;

        } else {
            return 0;

        }
    };
};

console.log(multiNumberArray.filter(sortEvenNumbers));



function sortOddNumbers(num) {
    for (let k = 2; num > k; k++) {
        if (num % k !== 0) {
            return true;

        } else {
            return 0;

        }
    };   
};

console.log(multiNumberArray.filter(sortOddNumbers));



