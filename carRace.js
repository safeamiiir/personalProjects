/**
 * Created by amir on 3/16/18.
 */
var carNumbers = 0;
var cars = [];
var currentPosition = 0;
var cylandrNumberRndm = [];
var userInp = [];
var carLefted = 0;
var winnerCars = [];

// *************************************************************
//                       VARIABLES                                 
// *************************************************************

function Cars(id,cylandrNumber,currentPosition,NumOfChance,){
    return{
    id,
    cylandrNumber,
    currentPosition,
    NumOfChance,
    }
}
// Cars All Are CHILD Of This Function It Is The CREATOR !!!

function carNumbersGetter() {
    carNumbers =+ prompt("Insert Number Of The Cars : ",'');
    carLefted = carNumbers;
}
// It Gets Number Of The Cars from USER Wit 'Promt'

function carIdentifier() {
    for(var i = 0; i < carNumbers; i++){
        cylandrNumberRndm.push(Math.floor((Math.random() * 10) + 1)); // 1-10
    }
    for(var i = 0; i < carNumbers; i++){
        cars[i] = new Cars(i,cylandrNumberRndm[i],currentPosition,Math.max(...cylandrNumberRndm) - cylandrNumberRndm[i] + 1);
        console.log(cars[i]);
    }
}
// *************************************************************
//      It Identifies The Car This Way : 
//      Set it an 'Id'
//      Set it a 'cylandrNumber'                               
//      set it a 'currentPosition'
//      set it a 'NumOfChance'
// *************************************************************

function dice() {
    return  Math.floor((Math.random() * 10) + 1);
}
// Dice for Every Move Of The Car

function move(i) {
    for(var j = 0; j < cars[i].NumOfChance; j++ ) {

        userInp =+ prompt("Enter[" + (j+1) + "]move of " + "car[" + (i+1) + "] : ", ""); //User INPUT

        //conflict Handler START!!!
        for(var k = 0; k < carNumbers - 1; k++){
            if(k !== i && cars[i].currentPosition === cars[k].currentPosition){
                cars[k].currentPosition = 0;
            }
        }//conflict Handler END!!!

        cars[i].currentPosition += Math.abs( userInp - dice() ) * cars[i].cylandrNumber;
        if(cars[i].currentPosition >= 100){
            console.log("car[" + (i+1) + "]Has Won The Race !!!!!! ");
            carLefted -= 1;
            winnerCars.push(i);
            break;
        }
    }
}
// *************************************************************
//        Move The Cars By Changing 'currentPosition'                               
// *************************************************************

function main() {
    carNumbersGetter();
    carIdentifier();
    while(carLefted){//while There is any Car
        for(var i = 0; i < carNumbers; i++){//Move 4 Cars
            if( !winnerCars.includes(i) ){
                move(i);
                console.log("car ["+ (i+1) +"]'s Position Is : " +cars[i].currentPosition);
            }
        }
        console.log("Car Lefted : " + carLefted);
    }

}
// *************************************************************
//             MAIN FUNC  Calls All The Other Funcs                              
// *************************************************************

main();   
// *************************************************************
//               PLAY THE GAME HERE ^^                              
// *************************************************************