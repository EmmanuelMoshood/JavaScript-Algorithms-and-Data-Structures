/******************************************************Sum All Numbers in a Range */
//sort array in increasing order
//add numbers from start to end number inclusive
//return sum

const sumAll = (arr) => {
    let sum;

    const sortedArray = arr.sort((a,b) => a - b);

    const fullArray = [];
    for(let i = sortedArray[0]; i<=sortedArray[1]; i++){
        fullArray.push(i);
    }

    return fullArray.reduce((acc, current) => acc + current);
}
//test
sumAll([1, 4]);



/****************************************************** return the symmetric difference of the two arrays */
//take one array and compare against the other
//use .indexOf(item) to find item that exist in on eand not the other

const diffArray = (arr1, arr2) => {
    const newArr = [];

    // arr1.forEach(element => {
    //     if(arr2.indexOf(element === -1)){
    //         newArr.push(element)
    //     }
    // });

    for(let i = 0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
            newArr.push(arr1[i])
        }
    }
    for(let i = 0; i<arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            newArr.push(arr2[i])
        }
    }


    return newArr;
}
//test
const test1 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(test);




/****************************************************** Seek and Destroy */
//get arguments passed and convert them to an array to work with
//loop the mainArray checking if its elements donot exist in the "arrToDestroy" array
//push the element that meet condition to a new array and return this result 

const destroyer = (arr) => {
    const arrayOfArguments = Array.from(arguments);
    const mainArray = arrayOfArguments[0];
    const arrToDestroy = arrayOfArguments.splice(1);
    let newArray = [];

    for(let i=0; i<mainArray.length; i++){
        if(mainArray.indexOf(arrToDestroy[i] === -1)){
            newArray.push(arrToDestroy[i])
        }
    }




    return newArray;
}
  
const test2 = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(test2)