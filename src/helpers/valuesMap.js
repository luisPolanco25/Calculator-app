
export const valuesMap = (arr) => {

    arr = arr.split('');
    const regex = /[+|*|/|-]/;
    

    const fixer = (array) => {
        for (let x = 0; x < array.length; x++) {
            if (regex.test(array[x]) === true && regex.test(array[x - 1]) === true) {
                array.splice(x - 1, 1);
                fixer(array);
            } else if ((array[x] === '.' && regex.test(array[x - 1]) === true)) {
                array.splice(x - 1, 1);
                fixer(array);
            } else if ((array[x] === '.' && regex.test(array[x + 1]) === true)) {
                array.splice(x, 1);
                fixer(array);
            } else if (array[x] === '.' && array[x + 1] === '.') {
                array.splice(x, 1);
                fixer(array);
            } 
        }
    };
    
    fixer(arr);
    arr = arr.join('');

    return arr;

}
