let string = "amnip";
let j = [];
for (let i = 0; i < string.length; i++) {
    let val = string.charCodeAt(i);
    if (val >= 97 && val <= 109) {
        val = (109 - val) + 110;
        j += String.fromCharCode(val);
        // console.log(j);
    } else if (val >= 110 && val <= 122) {
        val = (122 - val) + 97;
        j += String.fromCharCode(val);
    } else {
        console.log("nope")
    }
}
console.log(j);