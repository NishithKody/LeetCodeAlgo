/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length)
        return false;
    

    let map = new Map();
    for(let i of s1){
        if(map.has(i)){
            map.set(i,map.get(i)+1)
        }
        else{
            map.set(i,1);
        }
    }
    console.log('map1 ',map)
   
   let start = 0;
   let end = s1.length -1;
    console.log('start, end',start,end)

   while(end <s2.length){
       let temp = s2.substring(start, end+1)
       let map2 = new Map();

       for(let i of temp){
            if(map2.has(i)){
                map2.set(i,map2.get(i)+1)
            }
            else{
                map2.set(i,1);
            }
        }
        console.log('map2',map2)
        if(mapCheck(map,map2))
            return true;
    

        end = end +1;
        start = start +1;
   }
    return false;

};

let mapCheck = (map1, map2) =>{
    for(let item of map1){
        let test = map2.get(item[0])

        if(test != item[1])
            return false;
    }
    return true;
}
