export function square(x) {
  return x * x;
}

export function cube(x) {
  console.log('I get called from print.js!');
//  cosnole.error('I get called from print.js!');
  return x * x * x;
}
