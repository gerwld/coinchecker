export function onlyNumAfterDot(n, toFixed) {
 if(Number.isInteger(n)) {
  return n;
 } else {
  return n.toFixed(toFixed);
 }
}