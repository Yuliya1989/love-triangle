/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
var arr = new Array();
var count = 0;
for (var i = 0; i < preferences.length; i ++) {
if (preferences[i] > 0 && preferences[i] < preferences.length) {

var thirdElem = preferences[preferences[i] - 1];
var firstElem = preferences[thirdElem - 1];

if (arr.includes(thirdElem - 1) == false && arr.includes(i) == false && arr.includes(preferences[i] - 1) == false && preferences[i] != thirdElem && i == firstElem - 1) {
arr.push(i);
arr.push(preferences[i] - 1);
arr.push(thirdElem - 1);

count=count+1;
}
}
}
return count;
};

