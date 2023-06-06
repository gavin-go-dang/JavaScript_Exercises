const numberArray = [1, 5, 13, 6, 9, 22, 24, 21, 101, 100, 200, 4, 7, 7, 12];
const firstArray = document.getElementById('first-array');
firstArray.innerHTML = numberArray


// Lay cac phan tu > 10 Cach 1
const filteringArrayGreaterThan10 = [];
for(let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 10) {
        filteringArrayGreaterThan10.push(numberArray[i]);
    }
}

const greaterThan10Elelemt_1 = document.getElementById('element-greater-than-10-1');
greaterThan10Elelemt_1.innerHTML = filteringArrayGreaterThan10;


// Lay cac phan tu > 10 Cach 2: su dung filter
function checkGreateThan10(number){
    return number > 10;
}

const filteringArrayGreaterThan_10_2 = numberArray.filter(checkGreateThan10);

const greaterThan10_2 = document.getElementById('element-greater-than-10-2');
greaterThan10_2.innerHTML = filteringArrayGreaterThan_10_2;


// Lay cac phan tu > 10 Cach 3: Su dung arrow function
const filteringArrayGreaterThan10_3 = numberArray.filter(number => number > 10)
const greaterThan10_3 = document.getElementById('element-greater-than-10-3');
greaterThan10_3.innerHTML = filteringArrayGreaterThan_10_2;

//Tinh tong Cach 1: dung for
let sum = 0;
for (let i = 0; i < numberArray.length; i++){
    sum += numberArray[i];
}

const sumArray1 = document.getElementById('sum-array-1');
sumArray1.innerHTML = sum;


//Cach 2: dung reduce
sum = 0
function sumReduce(sumBefore, nextElement){
        return sumBefore + nextElement;
}

sum = numberArray.reduce(sumReduce, 0);
const sumArray2 = document.getElementById('sum-array-2');
sumArray2.innerHTML = sum;


//Nhan 2 gia tri trong mang
//Cach 1: dung for
const doubleValueList = []
for (let i=0; i < numberArray.length; i++){
    doubleValueList.push(numberArray[i]*2);
}

const doubleValuesElement1 = document.getElementById('double-value-1');
doubleValuesElement1.innerHTML = doubleValueList


//Cach 2 dung map
function mapDoubleValue(value){
    return value * 2;
}

const doubleValueList2 = numberArray.map(mapDoubleValue)
const doubleValuesElement2 = document.getElementById('double-value-2');
doubleValuesElement2.innerHTML = doubleValueList2


//Join  2 mang. Cach 1: dung for add tung phan tu
const numberArray2 = [301, 333, 100, 470, 1000, 290, 80, 39];

function join2Arrays(array1, array2) {
    const joinArrays = [];
  
    for (let i = 0; i < array1.length; i++) {
      joinArrays.push(array1[i]);
    }
  
    for (let i = 0; i < array2.length; i++) {
      joinArrays.push(array2[i]);
    }
  
    return joinArrays;
}


const arrayAfterJoin = join2Arrays(numberArray, numberArray2);
const joinArrayElement_1 = document.getElementById('join-array-1');
joinArrayElement_1.innerHTML = arrayAfterJoin


//Join  2 mang. Cach 2: Dung concat()

const arrayAfterJoin2 = numberArray.concat(numberArray2)
const joinArrayElement_2 = document.getElementById('join-array-2');
joinArrayElement_2.innerHTML = arrayAfterJoin2

//Join  2 mang. Cach 3: spread operator

const arrayAfterJoin3 = [...numberArray, ...numberArray2]
const joinArrayElement_3 = document.getElementById('join-array-3');
joinArrayElement_3.innerHTML = arrayAfterJoin3
//Them 1 attribute cho 1 object
//tao class User voi 3 thuoc tinh: email, username, phone

let user = {'fname' : 'Van A', 'lname' : 'Nguyen'}
const objectBefore = document.getElementById('object-before')

objectBefore.innerHTML = JSON.stringify(user);
user.phone = '098789546'
const objectAddPhone = document.getElementById('object-phone')
objectAddPhone.innerText = JSON.stringify(user);
console.log(user)
user.address = 'HCM'
const objectAddAddress = document.getElementById('object-address')
objectAddAddress.innerHTML = JSON.stringify(user);

user = {...user, gender : 'Male'}
const objectAddGender = document.getElementById('object-gender')
objectAddGender.innerHTML = JSON.stringify(user);
