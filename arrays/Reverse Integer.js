/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy=x;
    x=Math.abs(x);

    let rev=0;
    while(x>0){
        rem=x%10;
        rev=(10*rev)+rem;
        x=Math.floor(x/10);
    }

    let limit=2**31;
    if(rev<-limit || rev>limit-1) return 0;


  return (xCopy<0)? -rev : rev;
};
