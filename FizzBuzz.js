const _ = require("lodash")
console.log(
    numberArry =_.range(0, 100).map(function(val, index) {
      index++;
      if (index % 15 == 0){return "FizzBuzz";}
      if (index % 3 == 0){return "Fizz";}
      if (index % 5 == 0){return "Buzz";}
      return index;
    }).join('\n')
  );