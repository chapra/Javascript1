let a = 15;
let b =true;
let c = "Pranitha";
let d = 24;
console.log('The value of my variable a is:' +a);
console.log('The value of my variable b is:' +b);
console.log('The value of my variable c is:' +c);
console.log('The value of my variable d is:' +d);


console.log('The type of variable a is number');
console.log('The type of variable b is boolean');
console.log('The type of variable c is string');
console.log('The type of variable d is number');

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);


var sameType = 0;
if (typeof a == typeof b){
    sameType = sameType +1;;
   }else if(typeof a == typeof c){
        sameType =sameType + 1;
    }else if(typeof a == typeof d){
        sameType =sameType + 1;
    }else if(typeof b == typeof c){
        sameType =sameType + 1;
    }else if(typeof b == typeof d){
        sameType =sameType + 1;
    }else if(typeof c == typeof d){
        sameType =sameType + 1; 
    }  
console.log(sameType);
