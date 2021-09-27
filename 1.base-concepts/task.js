function solveEquation(a, b, c) {
  let arr;

  
  "use strict";

let quadraticEquation = (a, b, c) => {
 
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
}
console.log(quadraticEquation(5,7,1));

  
  
  return res;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
