function findMax(map){
  let max = 0;
  for (let key of map.keys()) {
    if (key > max) {
      max = key;
    }
  }
  return max;
}

module.exports = function longestConsecutiveLength(array) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    map.set(array[i]);
  }

  let max = findMax(map);

  let count = 0;
  let mapCounts = new Map();
  for (let i = 0; i <= max; i++) {
    if (map.has(i)) {
      count++;
    }
    else {
      if(count != 0) {
        mapCounts.set(count);
        count = 0;
      }
    }
  }
  mapCounts.set(count);

  return findMax(mapCounts);
}



