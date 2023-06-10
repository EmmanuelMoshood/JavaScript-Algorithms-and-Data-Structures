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
  
  sumAll([1, 4]);
