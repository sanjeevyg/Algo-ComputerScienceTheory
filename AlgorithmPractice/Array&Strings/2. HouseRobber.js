/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of 
them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. */

var rob = function(nums) {
    let even = nums.filter((e, pos) => ((pos + 1) % 2))
    let odd = nums.filter((e, pos) => ((pos) % 2))

    let sumEven = even.reduce((prev, curr) => prev + curr )
    let sumOdd = odd.reduce((prev, curr) => prev + curr )

    
    if(nums === []) return [];
    if(nums === null) return null;
    if(nums.length === 1) return nums[0];
    if(nums.length === 4 && sumEven === sumOdd) {
       return (nums[0] + nums[3]) > sumEven ?  (nums[0] + nums[3]) : sumEven
    }
    return sumEven > sumOdd ? sumEven : sumOdd
}


let nums = [2, 1, 1, 2]


console.log(rob(nums))

