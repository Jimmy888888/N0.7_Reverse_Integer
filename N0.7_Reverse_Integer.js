/**
 * @param {number} x
 * @return {number}
 */
/*
pseudo code
let zero_tail = true;
loop(x>0){ tx = x % 10; zero_tail=( tx != 0 ? false: true); rx = rx * 10 + tx; x = Math.floor(x / 10);}
*/
 var reverse = function(x) {
    let zero_tail = true;
    let negtive = 1;
    let remainder = 0;
    let rev_x = 0;
    //avoid js overflow
    if( x < 0)
    {
        x = x * -1;
        negtive = -1;
    }
    while( x > 0)
    {
        remainder = x % 10;
        console.log(remainder);
      
        rev_x = rev_x * 10 + remainder;
        
        x = Math.floor(x / 10);
    }
    rev_x = rev_x * negtive;
    //rev_x's range [-231, 231 - 1]
    if (rev_x < Math.pow(-2, 31) || rev_x > Math.pow(2, 31) - 1)
    {
        return 0;
    } 
    return rev_x;
};


/*
let t = -15;
console.log( t % 10);//output: -5
*/

let x = 220300;
console.log( reverse(x));