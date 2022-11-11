/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let temp;
    let start =0;
    let end = s.length-1;
    while(start<end){
        temp = s[start]
        s[start] = s[end]
        s[end] = temp

        start ++;
        end--;
    }
};