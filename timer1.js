//Graham Tyler
//Lighthouse Labs
//June 30, 2020
//Simple Timer Exercise 1

const timer1 = function() {
  let duration = process.argv[2] * 1000;  //only takes one argument, it ignores the rest  
  if(duration === 0) {  
    return false;
  }else if(duration < 0) {
    return false;
  }else if(duration === "") {
    return false;
  }else if(parseInt(duration) === NaN) { 
    return false; 
  }else {
    setTimeout(() => {
      process.stdout.write('\x07')  
    }, duration) 
  }
};
timer1();




//process.stdout.write('\x07'');
//process.stdout.write('\x07');