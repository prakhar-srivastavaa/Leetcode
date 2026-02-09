// Function to find the majority element in an array using Boyer-Moore Voting Algorithm
function majorityElement(nums: number[]): number {
    // n is half the length of the array
    let n = nums.length / 2;
    // count keeps track of the current candidate's frequency
    let count = 0;
    // el stores the current candidate for majority element
    let el;
    // Iterate through the array to find a candidate
    for (let i = 0; i < nums.length; i++) {
        // If count is zero, set current element as candidate
        // 34 3
        if (count == 0) {
            count = 1;
            el = nums[i];
        }
        // If current element matches candidate, increment count
        else if (nums[i] == el) {
            count++;
        }
        // If current element does not match candidate, decrement count
        else {
            count--;
        }
    }
    // Verify if the candidate is actually the majority element
    // chceking n/2
    let count1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == el) count1++;
    }
    // Return candidate if it appears more than n times
    if (count1 > n) { return el; }


};