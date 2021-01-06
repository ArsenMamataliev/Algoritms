const inputNum = ()=> {
    let inputStr = prompt(`Please enter numbers as 1, 2, 3. I'll sort them`, '-1, 10, 5, 4, 0, 8');
    let arr = inputStr.split(',');
    //str to number
    for(let i = 0; i < arr.length; i++){
        arr[i] = + arr[i];
    }
    return arr;
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

document.write(quickSort(inputNum()));
