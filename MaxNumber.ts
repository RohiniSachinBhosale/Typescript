/*Write a Progfram which contains one function named as Maximum.
That function accept three parameter, and it should return largest value from the three input numbers.

Input: 23 89 6
Output: Maximum number is 89
*/


function Maximum(No1:number,No2:Number,No3:number):void
{
    if (No1>No2 && No1>No3)
    {
        console.log("Maximum number is: "+No1);
    }
    else if(No2>No3)
    {
        console.log("Maximum number is: "+No2);
    }
    else
    {
        console.log("Maximum number is: "+No3);
    }
}

var Ret: void;

Ret = Maximum(23,89,6);

