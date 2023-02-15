// all primitive datatypes
// nn bb ss u

let a = null                            // null datatype
let b = 234                             // number datatype
let c = true                            // boolean datatype
let d = BigInt(523)                     // bigint datatype
let x = "Bibhu"                         // string datatype
let y = Symbol("this is a symbol")      // symbol datatype
let z                                   // undefined datatype

console.log( a, b, c, d, x, y, z)



// concatinating a string with a num

a = "Bibhuprasad"
b = 55

console.log( a + b ) 



// creating a object of dictionary having 5 words

let dict = {
    Hiraeth: "Homesickness for a place that cannot be returned to.",
    Serendipity: "Finding something good without looking for it.",
    Onomatopoeia: "A word that sounds like its meaning.",
    Petrichor: "The pleasant smell of rain after a long period of dry weather.",
    Euphoria: "A feeling of intense happiness and excitement."

}

console.log(dict.Serendipity)       // printing the meaning of Serendipity
console.log(dict['Serendipity'])     // also can be accessed with this syntex     