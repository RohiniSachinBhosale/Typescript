/* Write a typescript program which contains one function named as DisplayFactors.
That function should accept one number and display factors of that number.

INPUT:20
OUTPUT: 1   2   4   5   10
*/
function DisplayFactors(no) {
    var Cnt = 1;
    for (Cnt = 1; Cnt < no; Cnt++) {
        if (no % Cnt == 0)
            console.log(Cnt);
    }
}
var Num = 20;
var Ret;
console.log("Factor of " + Num + " is :");
Ret = DisplayFactors(Num);
