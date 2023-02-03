// const myInches= 42;
// const myFeet= myInches/12;
// console.log(myFeet);

// const dadaInches= 92;
// const dadaFeet= dadaInches/12;
// console.log(dadaFeet);

function inchToFit(inch){
    const feet= inch/12;
    return feet;
}

// const dadaInches=900;
// const dadaFeet = inchToFit(dadaInches);
// console.log(dadaFeet);

const inch= 500;
const reshma =inchToFit(inch);
console.log(reshma);

// miles to kilometer
function mileToKilo(mile){
    const kilometer = mile*1.609;
    return kilometer;

}
const mile=1;
const result = mileToKilo(mile);
console.log(result);
