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

//Template
let higherBMIname;
let lowerBMIname;
let higherBMIvalue;
let lowerBMIvalue;

if (markHigherBMI) {
	higherBMIname = "Mark";
	lowerBMIname = "John";
	higherBMIvalue = bmiMark;
	lowerBMIvalue = bmiJohn;
} else {
	higherBMI = "John";
	lowerBMI = "Mark";
	higherBMIvalue = bmiJohn;
	lowerBMIvalue = bmiMark;
}

let result = `${higherBMIname}'s BMI (${higherBMIvalue}) is higher than 
${lowerBMIname}'s (${lowerBMIvalue})!`;
console.log(result);
