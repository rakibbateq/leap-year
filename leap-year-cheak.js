function cheakLeapyear(year){ 

    // three condition to find leap year
    if ((0==year % 4) && (0 != year % 100) ||(0 == year % 400) ){
        console.log(year + '' + 'this is a leap year')

    }
    else{
        console.log( year + '' + 'this is not leap year')
    }
}

cheakLeapyear(1600);
cheakLeapyear(1720);
cheakLeapyear(1700);
cheakLeapyear(1721);
cheakLeapyear(1652);