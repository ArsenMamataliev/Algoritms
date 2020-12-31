//Create array
const createArray = (arrayLength) => {
    let arr = [];
    for(let i = 1; i <= arrayLength; i++){
        arr.push(i);
    }
    return arr;
}

const binarySearch = () => {
    let arrayLength = +prompt('Please input array length', 10);
    if ( arrayLength > 1 ){
        let target = +prompt(`Please input target value from 1 to ${arrayLength}`); 
        if (target <= arrayLength ){
            let array = createArray(arrayLength);
            let startIndex = 0;
            let endIndex = array.length - 1;
            let logN = 0;

            while(startIndex <= endIndex) {
                logN++;
                let middleIndex = Math.floor((startIndex + endIndex) / 2);
                if(target === array[middleIndex]) {
                    return alert(`Woow i find your target value ${array[middleIndex]}, log(${logN}) `);
                }
                if(target > array[middleIndex]) {
                    console.log("Searching the right side of Array")
                    startIndex = middleIndex + 1;
                }
                if(target < array[middleIndex]) {
                    console.log("Searching the left side of array")
                    endIndex = middleIndex - 1;
                }
            }
        }else{
            alert(`Please change your target value below  ${arrayLength}`);
        }

    } else{
        alert(`Plese enter a number more than ${arrayLength}`);
    }
}

binarySearch();