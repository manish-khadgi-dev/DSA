const s = 'A man, a plan, a canal: Panama';

var isPalindrome = function (s) {
  const newS = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let i = 0;
  let y = newS.length - 1;
  while (i < y) {
    if (newS[i] !== newS[y]) {
      return false;
    }

    i++;
    y--;
  }

  return true;
};

console.log(isPalindrome(s));
