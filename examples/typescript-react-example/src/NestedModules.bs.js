// Generated by BUCKLESCRIPT VERSION 4.0.11, PLEASE EDIT WITH CARE


function nested3Function(x) {
  return x;
}

var Nested3 = /* module */[
  /* x */0,
  /* y */1,
  /* z */2,
  /* w */3,
  /* nested3Value */"nested3Value",
  /* nested3Function */nested3Function
];

function nested2Function(x) {
  return x;
}

var Nested2 = /* module */[
  /* x */0,
  /* nested2Value */1,
  /* y */2,
  /* Nested3 */Nested3,
  /* nested2Function */nested2Function
];

var Universe = /* module */[
  /* theAnswer */42,
  /* notExported */33,
  /* Nested2 */Nested2,
  /* someString */"some exported string"
];

var notNested = 1;

export {
  notNested ,
  Universe ,
  
}
/* No side effect */
