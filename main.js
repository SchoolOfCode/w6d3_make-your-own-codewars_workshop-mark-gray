/* 

WELCOME ABOARD;

THEY WANT TO TAKE ON SUPPLIES
Our function takes in an array of 'supplies'

THE BOAT CAN ONLY HANDLE A CERTAIN WEIGHT (INTEGER)

Random array between index 0-9, array is filled with random numbers 1-99;
[1, 5, 75, 43, 14, 90]

Boat can take weight of 60;
[1, 43, 14] = 58 would be correct

THEY NEED TO GET RID OF SOME SUPPLIES

NOT ALL SUPPLIES WEIGH THE SAME
Function returns boolean true if the weight (int) is correct
*/

//👉 Write the function your CodeWarriors will start with below here:
let array = [[1, 5, 75, 43, 14, 90], [58]]
let array2 = [[7, 90, 28, 4, 19, 81, 42, 15], [80]]

export default function sailedTheSeas(array){
    array.sort((a, b) => a - b);
    let arr1 = array.slice(2, 4)
    let arr2 = array.slice(0, 1)
    let newArray = arr1.concat(arr2);
    let finalArray = newArray.reduce((a, b) => a + b);
    return finalArray;
}
console.log(sailedTheSeas(array));

