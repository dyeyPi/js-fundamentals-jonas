//BMI Calculator

//TestData 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

//TestData 2
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
*/
const bmiMark = markMass / (markHeight**2);
const bmiJohn = johnMass / (johnHeight**2);

let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);
