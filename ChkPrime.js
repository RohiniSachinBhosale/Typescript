/* Write a typescript program which contain one function named as ChkPrime.
that function should accept one number and it should return true if the given number is prime
otherwise return false.

INPUT:11
OUTPUT: It is Prime Number
*/
function ChkPrime(no) {
    var Cnt = 2;
    for (Cnt = 2; Cnt <= no / 2; Cnt++) {
        if (no % Cnt == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
var Num = 11;
var Ret;
Ret = ChkPrime(Num);
if (Ret == true) {
    console.log("It is Prime Number");
}
else {
    console.log("It is NOT a Prime Number");
}
