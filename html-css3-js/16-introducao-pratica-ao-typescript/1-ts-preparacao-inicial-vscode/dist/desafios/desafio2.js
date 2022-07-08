"use strict";
// Como podemos melhorar o esse código usando TS? 
var Occupation;
(function (Occupation) {
    Occupation[Occupation["Atriz"] = 0] = "Atriz";
    Occupation[Occupation["Padeiro"] = 1] = "Padeiro";
})(Occupation || (Occupation = {}));
let pessoa1 = {};
pessoa1.name = "maria";
pessoa1.age = 29;
occupation: Occupation.Atriz;
let pessoa2 = {};
pessoa2.name = "roberto";
pessoa2.age = 19;
Occupation: Occupation.Padeiro;
let pessoa3 = {
    name: "laura",
    age: 32,
    occupation: Occupation.Atriz,
};
let pessoa4 = {
    name: "carlos",
    age: 19,
    occupation: Occupation.Padeiro,
};
