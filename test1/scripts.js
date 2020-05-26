  function solution(A) {

    let maxMultipleItem = -10000;

    A.forEach(item => {

      if (item > 10000) { 
        return
      }

      if (item < -10000) {
        return
      }
      
      if (!isMultipleOfThree(item)) {
        return
      }
      
      if (item > maxMultipleItem) {
        maxMultipleItem = item;
      }
      
    })

    return maxMultipleItem;

  };

  function isMultipleOfThree(value) {
    return value % 3 === 0
  }
