const _ = require("lodash")
console.log(
    numberArry =_.filter(_.range(0, 100).map(function(index) {
      
      if (index % 15 == 0){return index +  " FizzBuzz";}
      if (index % 3 == 0){return index + " Fizz";}
      if (index % 5 == 0){return index + " Buzz";}
      return null ;
    }),null)
  );