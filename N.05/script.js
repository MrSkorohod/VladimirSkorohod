"use strict";
function treeSum(arr){
  let newArr = arr.flat(Infinity), result = null;
  for (let i = 0; i < newArr.length; i++){
    result += newArr[i];
  }
  return result;
}