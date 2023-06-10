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
const test = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(test)