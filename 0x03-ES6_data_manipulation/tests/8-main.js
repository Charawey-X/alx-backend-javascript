import cleanSet from "../8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', '1bonappetit', 'banana']), 1));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', '1bonappetit', 'banana'])));
