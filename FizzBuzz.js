const _ = require("lodash")
console.log(
    (_.range(0, 100).map(function(indexValue) {
      
      if (indexValue % 15 == 0){return " FizzBuzz";}
      if (indexValue % 3 == 0){return " Fizz";}
      if (indexValue % 5 == 0){return " Buzz";}
      return indexValue ;
    }
  )));