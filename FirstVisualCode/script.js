// let a = 5;
// let b = 7;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);
// console.log(b%a);
// a++;
// a = a+1;
// a+=10;
// a = a+10;
// b = a = a+1; //a++
// b = a+1; //++a
// console.log(a);
// b--;
// b=b-1
// b-=5;
// b=b-5
// console.log(b);
// a*=2;//a = a * 2
// console.log(a);
// a/=5;//a = a / 2
// console.log(a);
// a%=5;//a = a % 2
// console.log(a);
// a**=3;
// console.log(a);

// console.log(5==5);
// console.log(5==7);

// console.log("2" === 2)

// console.log(5!=5);

// console.log("2" !== 2)

// console.log(5>7);
// console.log(5<7);

// console.log(24>=24);
// console.log(20<=24);

// console.log(5<=7 && "2" == 2 && 5>= 5 && 9==3)


// console.log( "Hello"=="Hello" && (5>=7 || "2" === 2 || 5>= 7 || 9!=3))

// console.log(!(5==5))

// let age = prompt("yasinizi Daxil Edin");

// if(age > 60)
// {
//     console.log("Torpaga oyresmek vaxtidi")
// }

if("Hello"=="Hell" && (5>=7 || "2" === 2 || 5>= 7 || 9!=3))
{
    console.log("sertler Tplusun Yekun Neticesi True-dur");
}
else if("Hello"=="Hello" && (5>=7 || "2" === 2 || 5>= 7 || 9!=3))
{
    console.log("sertler else if Tplusun Yekun Neticesi True-dur");
}
else
{
    console.log("sertler Tplusun Yekun Neticesi False-dur");
}


let a = 5;
switch (a)
{
    case 5:
        a**=5;
        console.log("Reqem Besdir ve quvveti 5 netice "+a);
        break;
    case 6:
        console.log("Reqem Yeddidir");
        break;
    case 7:
        console.log("Reqem Yeddidir");
        break;
    case 8:
        console.log("Reqem Sekkizdir");
        break;
    default:
        break;
}