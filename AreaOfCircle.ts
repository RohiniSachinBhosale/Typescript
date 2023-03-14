/*
2. Write a typescript program which contains one function named as Area. That function should calculate area of Circle.
 Accept value of radius from user and return its area.
default value of PI should be 3.14. if it is not provided by caller.

Input: 5
Output: Area of Circle is 78.5

*/

function Area(radius:number,pi:number=3.14):number
{
    let ans: number=0;

    ans=pi*radius*radius;

    return ans;
}

var No : number = 5;

var Ret : number = 0;

Ret = Area(No);

console.log("Area of Circle is :"+Ret);