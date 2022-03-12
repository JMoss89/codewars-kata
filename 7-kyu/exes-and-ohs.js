/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
const XO = string => {
    const strArray = string.split('');
    const numOfO = strArray.filter(str => str === 'o' || str === 'O');
    const numOfX = strArray.filter(str => str === 'x' || str === 'X');
    if(numOfO.length === numOfX.length){
      return true;
    };
    return false;
};