
// Quick Question #1

// What does the following code return?

// new Set([1,1,2,2,3,4])

// returns{1,2,3,4}

// Quick Question #2

// What does the following code return?

// [...new Set("referee")].join("")

// returns "ref"

// Quick Questions #3

// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// {[1,2,3]: false} (checked solutions I am wrong here)

// hasDuplicate

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
if (new Set(arr).size === arr.length) {
    return false}
    else {return true}
}

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// vowelCount

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.


const vowelCount = (str) => {
    const strArr = [...str]
    const reducedstrArr = strArr.reduce(function(acc, el){
        if (!Object.keys(acc).some(function(e){ return e.toLocaleLowerCase() === e}) && "aeiou".includes(el.toLowerCase())){
            let charCount = 0
            strArr.forEach(function(char){
                if (char.toLowerCase() === e.toLocaleLowerCase()) {charCount += 1}
            })
            acc.set(el.toLowerCase(), charCount)
        }
         return acc
    },new Map())

    return reducedstrArr

}


// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
