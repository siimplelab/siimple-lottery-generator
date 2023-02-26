'use strict';
(function () {
  // code a random lottery number generator that returns an array of 6 unique numbers between 1 and 45 
  
  let lotteryNums = () => {
    let nums = [];
    while (nums.length < 6) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!nums.includes(num)) {
        nums.push(num);
      }
    }
    return nums;
  }


  console.log(lotteryNums());
})();