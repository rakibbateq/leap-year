function leapyear(year){
    const reminder = year % 400;
    // return reminder;

    // console.log(reminder);
    if( reminder==0){
        console.log('This is leap year',year)
    }
    else{
        console.log('Normal year',year)
    }

}

// const year=55;
// const result = leapyear(year);
// console.log(result);

 leapyear(1720);
 leapyear(1600);
 leapyear(1700);
 leapyear(1721);
 leapyear(1952);