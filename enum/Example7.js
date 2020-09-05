var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = 2] = "Saturday";
    Weekend[Weekend["Sunday"] = 3] = "Sunday";
})(Weekend || (Weekend = {}));
console.log(Weekend.Saturday);
console.log(Weekend["Saturday"]);
console.log(Weekend[3]);
