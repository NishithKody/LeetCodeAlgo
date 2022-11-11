function reverseWords(s: string): string {
    let arr = s.split(' ');
    let res = ""
    // console.log('array',arr)
    for(let i of arr){ 

        res = res+" "+rev(i);
    }

    return res.trim();
};

let rev = (str: string): string=>{
    let temp= str.split('').reverse().join('')
    // console.log('rev ',temp)
    return temp
}
