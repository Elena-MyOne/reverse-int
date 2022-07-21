module.exports = function reverse (n) {
   if (n < 0) {
      n = n * (-1)
   }
   n = n.toString();
   const arr = Array.from(n);
   return +arr.reverse().join('')
}
