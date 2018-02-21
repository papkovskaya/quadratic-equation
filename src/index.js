module.exports = function solveEquation(equation) {
  var array = equation.split(" ");
  var a = parseInt(array[0]);
  var b = parseInt(array[4]);
  var sign1 = array[3];
  var sign2 = array[7];
  var c = parseInt(array[8]);
  b = sign1 == '-' ? -b : b;
  c = sign2 == '-' ? -c : c;
  var D = b*b - 4*c*a;
  array = [];
  if (D > 0){
    array[0] = (Math.round((-b + Math.sqrt(D)) / (2 * a)));
    array[1] = (Math.round((-b - Math.sqrt(D)) / (2 * a)));
    
  } else if (D == 0){
    array.push(Math.round((-1*(b / (2 * a)))));
  } 
  if (array[0] > array[1]){
    var temp = array[0];
    array[0] = array [1];
    array[1] = temp; 
  }
  return array;
}