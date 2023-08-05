// Group Anaagram
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const groupAnagram = () => {
  let map = {};

  for (const i of strs) {
    const key = i.split('').sort().join('');

    if (map[key]) {
      map[key].push(i);
    } else {
      map[key] = [i];
    }
  }
  return Object.values(map);
};

console.log(groupAnagram(strs));
