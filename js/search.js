const nums = [
    -9,-7,-5,-3,-1,
    1,3,5,7,9,11,13,
    15,17,19,21,23,25,
    27,29,31,33,35,37,
    39,41,43,45,47,49,
    51,53,55,57,59,61,
    63,65,67,69,71,73,
    75,77,79,81,83,85,
    87,89,91,93,95,97,99
];

let arrOut = document.querySelector('.array__numbers');
let out = ' ';
for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== undefined) {
        out +=' | ' + nums[i];
    }
}

arrOut.innerHTML = out;

const search = (arr, target) => {
    let left    = 0,
        right   = arr.length - 1,
        mid;

    while(left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if(target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right  = mid - 1;
        } else {
            left   = mid + 1;
        }
    }
    return 'We haven\'t this number';
}

let insertNumbers = document.querySelector('.insert-number'),
    buttonSearch  = document.querySelector('.buton'),
    outNums       = document.querySelector('.out-number');

    buttonSearch.onclick = () => {
        let valSearch = +insertNumbers.value;
        insertNumbers.value = '';
        
        outNums.textContent = search(nums, valSearch);
    }

    




