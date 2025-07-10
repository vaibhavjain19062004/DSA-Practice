/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len=s.length;
    let halflen=Math.floor(len/2);

    for(i=0;i<halflen;i++){
        //swapping (s[i],s[len-i-1]);

        let temp=s[i];
        s[i]=s[len-i-1];
        s[len-i-1]=temp;
    }  
};
