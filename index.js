/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let min_open = 0;
    let max_open = 0;

    for(let char of s){
        if(char === '('){
            min_open ++;
            max_open ++;
        } else if(char === ')'){
            if(min_open > 0){
                min_open --;
            }

            max_open --;

            if(max_open < 0){
                return false;
            }
        } else { // * can be open or close
            // if close
            if(min_open > 0){
                min_open --;
            }
            // if open 
            max_open ++;
        }
    }

    return min_open === 0;  
};
