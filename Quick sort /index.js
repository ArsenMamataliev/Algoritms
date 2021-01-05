const inputNum = ()=> {
    let arr = prompt(`Please enter numbers as 1, 2, 3. I'll sort them`);
    return arr.split(',');
};


const quickSort = (arr) => {
    if(arr.length < 2 ) return arr;
    let pivot = arr[0];
    let leftSide = [];
    let rightSide = [];
    for (let i = 1; i < arr.length; i++){
        (pivot > arr[i]? leftSide.push(arr[i]) : rightSide.push(arr[i]))
    }
    return quickSort(leftSide).concat(pivot, quickSort(rightSide));
    
}

console.log(quickSort(inputNum()));
