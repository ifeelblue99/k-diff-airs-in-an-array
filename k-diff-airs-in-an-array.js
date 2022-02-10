const arr = [1, 2, 3, 5, 6]
const k = 2
function findPairs(nums, k) {
    nums.forEach(el=>{
        if(nums.includes(el-k)) console.log(el)
    })
};

findPairs(arr, k)
console.log(arr)
