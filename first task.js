let Mystr = "ahmed is. programmer";
Mystr.split("");
for (i = 0; i < Mystr.length; i++) {
  if (Mystr[i] === ".") {
    console.log(i);
  }
}
let MystrRe = /(a|e|i|o|u)/gi;
let num_of_vowls = Mystr.match(MystrRe).length;
console.log(num_of_vowls);
